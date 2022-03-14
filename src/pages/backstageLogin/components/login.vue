<template>
  <div class="login">
    <div>
      <div class="input">
        <span class="iconfont">&#xe65b;</span>
        <input type="text" @focus="usernameInputClick"
                           @blur="usernameInputBlur"
                           v-model.lazy="username" 
                           maxlength="11" />
      </div>
    </div>
    <div>
      <div class="input">
        <span class="iconfont">&#xe660;</span>
        <input :type="inputType" @focus="passwordInputClick"
                           @blur="passwordInputBlur"
                           v-model.lazy="password" 
                           maxlength="11" />
      </div>
    </div>
    <div class=button @click="backstageLogin">登录后台</div>
  </div>
</template>

<script>
import { Dialog ,Toast , Notify } from 'vant'
import { dream_master_login  } from '@/assets/javaScript/_axios'
export default {
  name: 'login',
  data () {
    return {
      password:'请输入密码',
      username:'请输入用户名',
      inputType:'text'
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
    passwordInputClick() {
      if(this.password == '请输入密码'){
        this.password = '';
        this.inputType = 'password'
      }
    },
    passwordInputBlur(){
      if(this.password == ''){
        this.password = '请输入密码';
        this.inputType = 'text'
      }
    },
    backstageLogin() {
      dream_master_login({
        username: this.username,
        password: this.password ,
      }).then(res=>{
        if(res.status == 0){
          Toast.clear();
          Toast.success('登录成功');
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('username',res.data.username);
          this.$globalData.token = res.data.token;
          this.$router.push({name:'DreamMaster'})
          location.reload();
        }else{
          Notify({ type: 'danger', message: res.msg });
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .login{
    background-color: #201624;
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
  /*用户协议提示*/
  .tip {
    text-align: center;
    position: fixed;
    /*bottom: 100px;*/
    font-size: .24rem;
    color: #999699;
    width: 100%;
    bottom: .7rem;

  }
  .tip>span {
    color: #d5c697;
  }
</style>