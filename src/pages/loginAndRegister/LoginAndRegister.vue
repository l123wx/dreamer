<template>
  <div class="box">
    <img src="@/assets/images/login/logo.png" />
    <login />
  </div>
</template>

<script>
import Login from './components/login'
import { auto_login } from '@/assets/javaScript/_axios'
export default {
  name: 'LoginAndRegister',
  data () {
    return {

    }
  },
  components: {
    Login,
  },
  methods: {
    
  },
  mounted(){
    if(this.$globalData.token){
      alert(this.$globalData.token)
      auto_login({
      }).then(res=>{
        console.log(res)
        if(res.status == 0){
          // localStorage.setItem('userInfo',JSON.stringify(res.data));
          this.$globalData.userInfo = res.data;
          this.$router.push('home');
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
  img{
    height:2.72rem;
    margin-top: 1.43rem;
    margin-bottom:.7rem;
  }
</style>