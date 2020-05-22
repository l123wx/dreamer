<template>
  <div class="box">
    <img :src="photoSrc+'login/logo.png'" />
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
      photoSrc:this.$globalData.photoSrc,
      isSafari:this.$globalData.isSafari,
    }
  },
  components: {
    Login,
  },
  methods: {
    
  },
  mounted(){
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
</style>