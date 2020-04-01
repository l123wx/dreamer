<template>
  <div class="login">
    <div>
      <div class="input">
        <span class="iconfont">&#xe660;</span>
        <input type="text" @click="phoneInputClick"
                           @blur="phoneInputBlur"
                           v-model.lazy="phone" 
                           maxlength="11" />
      </div>
    </div>
    <div v-show="pageType=='register'">
      <div class="input">
        <span class="iconfont">&#xe65b;</span>
        <input type="text" @click="usernameInputClick"
                           @blur="usernameInputBlur"
                           v-model.lazy="username" 
                           maxlength="11" />
      </div>
    </div>
    <div>
      <div class="input code">
        <span class="iconfont">&#xe661;</span>
        <input type="text" @click="codeInputClick"
                           @blur="codeInputBlur"
                           v-model="code" 
                           maxlength="4" />
        <div class="button" @click="sendCodeClick">{{codeBtn}}</div>
      </div>
    </div>
    <div class=button @click="login_or_register">{{pageType=='register'?'注册':'登陆'}}</div>
    <div class="switch_btn">
      <span @click="typeSwitch">立即{{pageType=='register'?'登陆':'注册'}}</span>
    </div>
  </div>
</template>

<script>
import { Dialog ,Toast , Notify } from 'vant'
import { check_user_phone,log_or_reg,get_auth_code  } from '@/assets/javaScript/_axios'
export default {
  name: 'login',
  data () {
    return {
      phone:'请输入手机号码',
      code:'请输入验证码',
      time:0,
      codeBtn:'发送验证码',
      username:'请输入用户名',
      pageType:'login',
    }
  },
  methods:{
    usernameInputClick() {
      if(this.username == '请输入用户名'){
        this.username = '';
      }
    },
    usernameInputBlur(){
      if(this.username == ''){
        this.username = '请输入用户名';
      }
    },
    phoneInputClick() {
      if(this.phone == '请输入手机号码'){
        this.phone = '';
      }
    },
    phoneInputBlur(){
      if(this.phone == ''){
        this.phone = '请输入手机号码';
      }
    },
    codeInputClick() {
      if(this.code == '请输入验证码'){
        this.code = '';
      }
    },
    codeInputBlur() {
      if(this.code == ''){
        this.code = '请输入验证码';
      }
    },
    sendCode(){
      get_auth_code({
        phone: this.phone
      }).then(res=>{
        if(res.status==0){
          Notify({ type: 'success', message: '验证码已发送到您的手机，请注意查收' });
          this.time = 60;
          this.codeBtn = this.time+"S" //提前修改秒数，提高体验感
          let codeTime = setInterval(() => {
            this.time-=1;
            this.codeBtn = this.time+"S"
            if(this.time == 0 ){
              clearInterval(codeTime);
              this.codeBtn = '发送验证码'
            }
          },1000)
        }else{
          Notify({ type: 'danger', message: '验证码发送失败，请重试' });
        }
      })
    },
    sendCodeClick() {
      // 验证码倒计时
      if( this.time == 0  && (this.phone+'').length == 11){       
        check_user_phone({
          phone:this.phone*1
        }).then((res)=>{
          if(this.pageType == 'register'){  //注册
            if(res.status == 1){
              Dialog.alert({
                message: '手机号已注册！'
              }).then(() => {});
            }else{
              this.sendCode();
            }
          }else{ //登陆
            if(res.status == 0){
              Dialog.alert({
                message: '手机号未注册！'
              }).then(() => {});
            }else{
              this.sendCode();
            }
          }
        })
      }
    },
    typeSwitch(){
      if(this.pageType == 'login'){
        this.pageType = 'register';
      }else{
        this.pageType = 'login';
      }
    },
    login_or_register() {
      if( this.code == '请输入验证码' ){
        Notify({ type: 'danger', message: '请输入验证码' });
      }else{
        log_or_reg({
          phone: this.phone,
          code: this.code ,
          username:this.pageType=='register'?this.username:''
        }).then(res=>{
          if(res.status == 0){
            Toast.clear();
            Toast.success((this.pageType=='login'?'登陆':'注册')+'成功');
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('userInfo',JSON.stringify(res.data));
            this.$globalData.userInfo = JSON.stringify(res.data);
            console.log(res.data)
            this.$router.push('/home')
          }else{
            Notify({ type: 'danger', message: res.msg });
          }
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .login{

  }
  .login>div:nth-child(2){
    margin-top: .32rem;
  }
  .input{
    position: relative;
    display: inline-block;
  }
  .input>.iconfont{
    position: absolute;
    left:.52rem;
    top:.22rem;
    color:#fff;
    font-size: .3rem;
  }
  input{
    height: .68rem;
    width: 3.34rem;
    border:1px solid #c4c1c5;
    border-radius: .35rem;
    background-color: transparent;
    color:#fff;
    font-size: .28rem;
    padding:0 1.1rem;
  }
  .code{
    margin-top: .32rem;
    display: inline-flex;
    width: 5.56rem;
    justify-content: space-between;
  }
  .code input{
    width: 2.2rem;
    padding-right: 0;
  }
  .code .iconfont{
    font-size: .34rem;
    top: .19rem;
  }
  .code .button{
    height: .72rem;
    width: 1.81rem;
    background-color:#b4a8d5;
    color:#fff;
    font-size: .28rem;
    line-height: .72rem;
    border-radius:.6rem;
  }
  .login>.button{
    width:5.56rem;
    height:.82rem;
    background-color: #b4a8d5;
    margin: .6rem auto 0;
    color:#fff;
    font-size: .36rem;
    border-radius: .5rem;
    line-height: .82rem;
  }
  .switch_btn{
    width: 5rem;
    text-align: right;
    margin:.5rem auto;
    color:#fff;
    font-size: .24rem;
  }
</style>