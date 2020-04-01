<template>
  <div class="about_us">
    <div class="logo">
      <img src="@/assets/images/login/logo.png" />
    </div>
    <div>@梦境旅人<br/>
      电子邮箱：xxx@163.com<br/>
      QQ交流群：88829876
    </div>
    <ul>
      <li>
        <div>当前版本</div>
        <div>1.0.0</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .about_us{
    text-align:center;
  }
  .logo{
    height: 1.8rem;
    overflow: hidden;
  }
  img{
    width:1.64rem;
    margin-bottom:.7rem;
    opacity: 0.7;
  }
  .about_us>div{
    font-size: .24rem;
    color:#707070;
    line-height: .42rem;
  }
  li{
    height: .82rem;
    line-height: .82rem;
    color: #bfbfbf;
    background-color: #201624;
    position: relative;
    padding: 0 .5rem;
    margin-top: .32rem;
    font-size: .28rem;
    transition: background-color .3s;
    display: flex;
    justify-content: space-between;
  }
  li:active{
    background-color: #483c4d;
  }
</style>