<template>
  <div class="box">
    <div class="header">
      <div>
        <p>欢迎你,{{username}}</p>
        <div class="logout" @click="logout">退出登录</div>
      </div>
    </div>
    <div class="center">
      <div class="nav">
        <img :src="photoSrc+'login/logo.png'" />
        <ul>
          <li @click="pageIndex=0">解梦回信</li>
          <li @click="pageIndex=1">梦境审核</li>
        </ul>
      </div>
      <div class="content">
        <div v-show="pageIndex==0">
          <div class="table_box">
            <table>
              <thead>
                <tr role="row">
                  <th style="width:30px">id</th>
                  <th style="width:70px">用户名</th>
                  <th style="width:70px">梦境名称</th>
                  <th style="width:370px">梦境内容</th>
                  <th style="width:220px">用户备注</th>
                  <th style="width:170px">回复内容</th>
                  <th style="width:70px">回复</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" v-for="(item,index) in revealDreamLists">
                  <th>{{item.id}}</th>
                  <th>{{item.username}}</th>
                  <th>{{item.dreamTitle}}</th>
                  <th>{{item.dreamContent | spaceAndEnter}}</th>
                  <th>{{item.describe}}</th>
                  <th :contenteditable="item.reply?false:true" ref="reply">{{item.reply}}</th>
                  <th>{{item.reply?"已回复":""}}
                    <span style='color:blue;cursor:pointer' 
                          v-if="!item.reply"
                          @click="reply(item.id,index)">回复</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-show="pageIndex==1">
          <div class="table_box">
            <table>
              <thead>
                <tr role="row">
                  <th style="width:30px">id</th>                  
                  <th style="width:120px">梦境名称</th>
                  <th style="width:370px">梦境内容</th>
                  <th style="width:100px">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" v-for="(item,index) in auditDreamLists">
                  <th>{{item.id}}</th>
                  <th>{{item.title}}</th>
                  <th>{{item.content | spaceAndEnter}}</th>
                  <th>
                    <span style="color:#50c750;cursor:pointer;margin-right:10px"
                          @click="auditDream(1,item.id,index)">通过</span>
                    <span style="color:#ff4141;cursor:pointer"
                          @click="auditDream(0,item.id,index)">打回</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get_dream_master_msg,reply_dream,get_audit_dream,audit_single_dream } from '@/assets/javaScript/_axios'
export default {
  name: 'DreamMaster',
  data () {
    return {
      photoSrc:this.$globalData.photoSrc,
      username:'',
      replyContent:'',
      revealDreamLists:[],
      auditDreamLists:[],
      pageIndex:0,
    }
  },
  methods: {
    // 解梦回复
    reply(dreamId,index) {
      reply_dream({
        replyDreamId:dreamId,
        content:this.$refs.reply[index].innerText
      }).then(res=>{
        if( res.msg == "回复成功" )
        this.revealDreamLists[index].reply = this.$refs.reply[index].innerText;
      })
    },
    // 梦境审核
    auditDream(type,dreamId,index){ //type: 1:通过 0:不通过
      audit_single_dream({
        dreamId:dreamId,
        type:type
      }).then(res=>{
        if( res.msg == "操作成功" ){
          this.auditDreamLists.splice(index,index+1)
        }
      })
    },
    logout() {
      this.$router.push({name:'BackstageLogin'})
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  },
  mounted() {
    get_dream_master_msg({
    }).then(res=> {
      this.revealDreamLists = res.data
    })
    get_audit_dream({
    }).then(res=>{
      this.auditDreamLists = res.data;
    })
    this.username = localStorage.getItem('username');
  }
}
</script>

<style lang="css" scoped>
  tr,th,td {
    border: 1px solid #dddddd;
    padding: 8px;
    color: #777;
    text-align: center
  }
  tbody>tr>th {
    font-weight: normal;
    line-height: 20px;
  }
  tbody>tr:nth-child(2n) {
    background-color: #f9f9f9;
  }
  table {
    width: 100%;
  }
  .box {
    height: 100vh;
  }
  .header {
    height: 60px;
    background-color: #34495e;
    border-bottom: 3px solid #faebac;
    position: relative;
  }
  .header>div {
    position: absolute;
    display: inline-block;
    right: 20px;
    color: #fff;
    margin-right: 20px;
  }
  .header>div:hover>.logout {
    display: block;
  }
  .header p {
    display: inline-block;
    line-height: 60px;
    color: #fff;
    position: relative;
  }
  .logout {
    width: 100px;
    height: 50px;
    line-height: 50px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    display: none;
    color: #000;
    margin: 0 auto;
  }
  .logout:hover {
    color: #696969;
  }
  .center {
    min-height: calc(100vh - 60px);
    background-color: #666;
    display: flex;
  }
  .center .nav {
    flex: 1;
    background-color: #34495e;
  }
  .center .nav img {
    width: 80px;
    margin: 30px auto 20px;
    display: block;
  }
  .center .nav li {
    font-size: 18px;
    color: #abb4be;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
  .center .nav li:hover {
    background-color: #21262d;
  }
  .center .content {
    flex: 5;
    background-color: #ecedf0;
    overflow: auto;
    height: calc(100vh - 60px - 80px);
    padding: 40px;
  }
  .table_box {
    padding: 20px;
    border-radius: 6px;
    background-color: #fff;
  }
</style>