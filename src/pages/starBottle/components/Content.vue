<template>
  <div class="content">
    <div class="nav">
      <div :class="pageType=='get'?'active':''" @click="activeGet">收到的星辰</div>
      <div :class="pageType=='send'?'active':''" @click="activeSend">送出的星辰</div>
    </div>
   
    <!-- 收到的星辰 -->
    <div v-show="pageType=='get'" class="get">
      <content-scroll @onRefresh="onRefresh">
        <div class="getContentBox">
          <div class="list" v-for="item in getLists" :key="item.id">
            <!-- 梦境名称和时间 -->
            <div class="title">
              <div>
                <span @click="readMyDream(item.dreamId)">【<span>{{item.dreamTitle}}</span>】</span>收到一颗星辰
              </div>
              <div>{{item.createTime | yyyy.mm.dd}}</div>
            </div>
            <div class="content">
              <!-- 头像 -->
              <div class="avatar">
                <img :src="item.headPhotoUrl" />
              </div>
              <!-- 昵称&留言 -->
              <div>
                <!-- 昵称 -->
                <div>{{item.username}}</div>
                <!-- 留言 -->
                <div>{{item.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </content-scroll>
    </div>
    <!-- 送出的星辰 -->
    <div v-show="pageType=='send'" class="send">
      <content-scroll @onRefresh="onRefresh">
        <div class="sendContentBox">
          <div class="list" v-for="item in sendLists" :key="item.id">
            <!-- 星星标 -->
            <div>
              <span class="iconfont">&#xe62f;</span>
            </div>
            <!-- 内容 -->
            <div>
              <div class='title'>送给<span @click="readOthersDream(item.dreamId)">【<span>{{item.dreamTitle}}</span>】</span>一颗星辰</div>
              <div class='sentence'>“<span>{{item.content}}</span>”</div>
            </div>
            <!-- 时间 -->
            <div class="time">
              {{item.createTime | yyyy.mm.dd}}
            </div>
          </div>
        </div>
      </content-scroll>
    </div>
  </div>
</template>

<script>
import ContentScroll from '@/components/Scroll'
export default {
  name: 'Content',
  components: {
    ContentScroll
  },
  data () {
    return {
      pageType: 'get',
    }
  },
  props: {
    getLists: {
      type: Array
    },
    sendLists: {
      type: Array
    }
  },
  methods: {
    activeGet() {
      this.pageType = 'get'
    },
    activeSend() {
      this.pageType = 'send'
    },
    onRefresh(){
      this.$emit('onRefresh',this);
    },
    readMyDream(dreamId){
      this.$router.push({name:'CreateDream',params:{type:'read',dreamId:dreamId}})
    },
    readOthersDream(dreamId){
      this.$router.push({name:'CreateDream',params:{type:'',dreamId:dreamId}})
    }
  }
}
</script>

<style lang="css" scoped>
  .content{
    /*color:#fff;*/
  }
  .nav{
    font-size: .24rem;
    padding:.4rem 0;
  }
  .nav>div{
    display: inline-block;
    margin-right: .36rem;
    color:#707070;
    transition: color .2s;
  }
  .nav>div.active{
    color:#fff;
  }
  .scroll{
    height:8.8rem;
  }
  /*送出的星辰*/
  .sendContentBox{
    min-height:7rem;
  }
  .send .list{
    display: flex;
    margin-bottom: .45rem;
  }
  .send .list>div:nth-child(1){
    height: .7rem;
    width: .7rem;
    background-color: #b4a8d5;
    border-radius: 50%;
    color: #fff;
    line-height: .7rem;
    text-align: center;
    margin-right: .28rem;
  }
  .send .list>div:nth-child(1)>.iconfont{
    font-size: .40rem;
  }
  .send .list>div:nth-child(2){
    width:4.48rem;
  }
  .send .list>div:nth-child(2)>div{
    font-size: .26rem;
  }
  .send .title{

  }
  .send .title>span{
    color:#b4a8d5;
  }
  .send .title>span>span{
    max-width: 1.6rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
  }
  .send .sentence{
    color:#959595;
    margin-top: .16rem;
  }
  .send .sentence>span{
    max-width: 4.2rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .send .time{
    font-size: .21rem;
    text-align: right;
    width:1.4rem;
  }
  /*收到的星辰*/
  .getContentBox{
    min-height: 7.2rem;
  }
  .get .list{
    border-radius: .3rem;
    background-color: rgb(32, 22, 36);
    padding:.22rem .4rem;
  }
  .get .list+div{
    margin-top: .25rem;
  }
  .get .title{
    display: flex;
    justify-content: space-between;
  }
  .get .title>div:nth-child(1)>span{
    color:#b4a8d5;
    margin-left: -.16rem;
  }
  .get .title>div:nth-child(1)>span>span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    max-width:2rem;
  }
  /*时间*/
  .get .title>div:nth-child(2){
    font-size: .21rem;
    color:#959595;
  }

  /*头像和内容*/
  .get .list>.content{
    display: flex;
    margin-top: .44rem;
  }
  .get .list>.content>div{
    display: inline-block;
    vertical-align: top;
  }
  /*头像*/
  .get .list .avatar{
    width:.88rem;
    height: .88rem;
    border-radius: 50%;
    background-color: #b4a8d5;
    overflow: hidden;
    margin-right: .15rem;
  }
  .get .list .avatar>img{
    height:100%;
    width:100%;
  }
  /*用户名和留言*/
  .get .content>div:nth-child(2){
    width:5rem;
  }
  /*用户名*/
  .get .content>div:nth-child(2)>div:nth-child(1){
    font-size: .24rem;
    color:#959595;
    margin-top:.1rem;
  }
  /*留言*/
  .get .content>div:nth-child(2)>div:nth-child(2){
    font-size: .26rem;
    width:4.9rem;
    margin: .18rem 0 .2rem 0;
    line-height: .36rem;
  }
</style>
