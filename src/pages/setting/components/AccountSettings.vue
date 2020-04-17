<template>
  <div>
    <ul>
      <li @click="phoneClick">
        手机号码
        <p>{{phone}}</p>
        <span class="iconfont">&#xe650;</span>
      </li>
      <li @click="usernameClick">
        修改用户名
        <span class="iconfont">&#xe650;</span>
      </li>
    </ul>
    <username-dialog v-model="userNameShow"
            :showCancelButton="false"
            :showConfirmButton="false"
            style="background-color:#201624;color:#fff;display: flex;flex-direction: column;">
        <div style="background-color:#b4a8d5;text-align:center;line-height:.9rem;height:.9rem">修改用户名</div>
        <div class="username">
          <input type="text" placeholder="请输入新用户名" v-model="username" />
        </div>
        <div class="button">
          <div @click="userNameCancel">取消</div>
          <div @click="userNameConfirm">确定</div>
        </div>
    </username-dialog>
  </div>
</template>

<script>
import { Dialog,Notify } from 'vant'
import { check_username,change_username } from '@/assets/javaScript/_axios'
export default {
  name: 'AccountSettings',
  data () {
    return {
      phone:'',
      userNameShow: false,
      username: ''
    }
  },
  components: {
    UsernameDialog:Dialog.Component
  },
  methods: {
    phoneClick(){
      // console.log("phoneClick")
      this.$emit('phoneClick')
    },
    usernameClick(){
      // console.log("usernameClick")
      // this.$emit('usernameClick')
      this.userNameShow = true;
    },
    userNameCancel(){
      // 取消修改
      this.userNameShow = false;
    },
    userNameConfirm(){
      // 确定修改
      if(this.username != ''){
        check_username({
          username:this.username
        }).then(res=>{
          // console.log(res)
          if(res.status == 0){
            change_username({
              newUsername:this.username
            }).then(res=>{
              if(res.data == '修改用户名成功'){
                Notify({ type: 'success', message: '修改用户名成功' });
              }else{
                Notify({ type: 'danger', message: '未知错误，请重试' });
              }
            })
          }else{
            Notify({ type: 'danger', message: res.msg });
          }
        })
      }
    }
  },
  mounted(){
    this.phone = this.$globalData.userInfo.phone
  }
}
</script>

<style lang="css" scoped>
  ul{
    margin-bottom: .27rem;
  }
  li{
    height: .82rem;
    line-height: .82rem;
    color: #bfbfbf;
    background-color: #201624;
    position: relative;
    padding-left: .5rem;
    font-size: .28rem;
    transition: background-color .3s;
  }
  li:active{
    background-color: #483c4d;
  }
  li>.iconfont{
    position: absolute;
    /*font-size: */
    color: #919191;
    right: .3rem;
    display: inline-block;
    transform: rotate(180deg);
  }
  li>p{
    display: inline-block;
    float: right;
    margin-right: .8rem;
    color: #676767;
  }

  .username{
    background-color: #201624;
    padding: .5rem 0; 
  }
  .username>input{
    display: block;
    margin: 0 auto;
    width:5.6rem !important;
    background-color: transparent;
    /*text-align: center;*/
    color:#9c9c9c;
    border-bottom: 2px solid #b4a8d5;
    line-height: .5rem;
  }
  .username+div{
    background-color: #201624;
    padding:.3rem .35rem;
    display: flex;
    justify-content: flex-end;
    border:none;
  }
  .username+div>div{
    display: inline-block;
    color:#b2b2b2;
    font-size: .3rem;
  }
  .username+div>div:nth-child(2){
    color:#b4a8d5;
    margin-left: .4rem;
  }
</style>