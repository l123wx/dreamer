<template>
  <div :class="['box',isSafari?'isSafari':'']">
    <img :src="photoSrc+'login/logo.png'" />
    <login />
    <!-- 用户协议提示 -->
    <div class="tip">
      注册即代表您同意<span @click="toAgreement" data-type="0">用户协议</span>和<span @click="toAgreement" data-type="1">隐私协议</span>
    </div>
  </div>
</template>

<script>
import Login from './components/login'
import { auto_login } from '@/assets/javaScript/_axios'
export default {
  name: 'LoginAndRegister',
  data () {
    return {
      photoSrc:this.$globalData.photoSrc,
      isSafari:this.$globalData.isSafari,
    }
  },
  components: {
    Login,
  },
  methods: {
    toAgreement(e) {
      this.$router.push({name:'Agreement',params:{type:e.target.dataset.type}})
    }
  },
  mounted(){
    if(this.$globalData.token){
      // alert(this.$globalData.token)
      auto_login({
      }).then(res=>{
        // console.log(res)
        if(res.status == 0){
          // localStorage.setItem('userInfo',JSON.stringify(res.data));
          this.$globalData.userInfo = res.data;
          this.$router.push({name:'Home',params:{getStar:res.msg=='登录成功，并赠送两个星辰'?true:false}});
        }
      })
    }

    // console.log(localStorage.getItem('token'));
    // this.$globalData.token = 'tK2DARUWraEiJ02rLtWWQQ=='
    // auto_login({
    //   // token:'tK2DARUWraEiJ02rLtWWQQ=='
    // }).then(res=>{
    //   console.log(res)
    // })
    // console.log(this.$globalData.token)
    // localStorage.setItem('username','zhangsan');
    // localStorage.getItem('username');

    // if(this.$globalData.token){

    // }

  }
}
</script>

<style lang="css" scoped>
  .box{
    height:100vh;
    background-color: #201624;
    text-align: center;
  }
  .box.isSafari{
    height:calc(100vh - 75px);
  }
  img{
    height:2.72rem;
    margin-top: 1.43rem;
    margin-bottom:.7rem;
  }
  /*用户协议提示*/
  .tip {
    text-align: center;
    position: absolute;
    /*bottom: 100px;*/
    font-size: .24rem;
    color: #999699;
    width: 100%;
    bottom: .7rem;

  }
  @media (max-height: 500px) { 
    .tip {
      display: none;
    }
  }
  .tip>span {
    color: #d5c697;
  }
</style>