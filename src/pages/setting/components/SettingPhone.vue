<template>
  <div class="phoneSetting">
    <div>
      <div class="input">
        <span class="iconfont">&#xe660;</span>
        <input type="text" @click="phoneInputClick"
                           @blur="phoneInputBlur"
                           v-model.lazy="phone" 
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
    <div class=button @click="confirm">确定</div>
  </div>
</template>

<script>
import { check_user_phone,get_auth_code,change_phone  } from '@/assets/javaScript/_axios'
import { Dialog,Toast,Notify } from 'vant'
export default {
  name: 'SettingPhone',
  data () {
    return {
      phone:'请输入手机号码',
      code:'请输入验证码',
      time:0,
      codeBtn:'发送验证码',
    }
  },
  methods: {
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
      if( this.time == 0  && (this.phone+'').length == 11){  
        if( this.phone == this.$globalData.userInfo.phone ){
          Dialog({message:'请输入新的手机号码'})
        }else{
          check_user_phone({
            phone:this.phone*1
          }).then((res)=>{
            if(res.status == 1){
              Dialog.alert({
                message: res.msg
              }).then(() => {});
            }else{
              this.sendCode();
            }
          })
        }
      }
    },
    confirm(){
      if( this.code == '请输入验证码' ){
        Dialog({message:'请输入验证码'})
      }else{
        change_phone({
          phone: this.phone,
          code: this.code ,
        }).then(res=>{
          if(res.success == true){
            Toast.clear();
            Toast.success('更换成功');
            this.$globalData.userInfo.phone = this.phone;
            console.log(res.data)
          }else{
            Dialog({message:res.data})
          }
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .phoneSetting{
    text-align: center;
    margin-top: .9rem;
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
  .phoneSetting>.button{
    width:5.56rem;
    height:.82rem;
    background-color: #b4a8d5;
    margin: .6rem auto 0;
    color:#fff;
    font-size: .36rem;
    border-radius: .5rem;
    line-height: .82rem;
  }
</style>