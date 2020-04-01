<template>
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
</template>

<script>
export default {
  name: 'AccountSettings',
  data () {
    return {
      phone:''
    }
  },
  methods: {
    phoneClick(){
      // console.log("phoneClick")
      this.$emit('phoneClick')
    },
    usernameClick(){
      console.log("usernameClick")
      this.$emit('usernameClick')
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
</style>