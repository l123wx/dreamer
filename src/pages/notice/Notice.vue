<template>
  <div :class="['box',isSafari?'isSafari':'']">
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      系统公告
    </div>
    <ul>
      <li class="list">
        <div class="time">2020.03.03</div>
        <div class="content" @click='listClick'>
          <div class="photo">
            <img :src="photoSrc+'notice/photo1.jpg'" />
          </div>
          <div class="word">
            <div>2020.03.03更新日志</div>
            <div>新增了“星星瓶”功能，修复了“梦世界”的bug</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
      photoSrc:this.$globalData.photoSrc,
      isSafari:this.$globalData.isSafari,
    }
  },
  methods:{
    backClick(){
      this.$router.go(-1)
    },
    // 点击查看详情
    listClick(){
      this.$router.push("/NoticeDetails");
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    height:100vh;
    overflow: auto;
    background-color: #090614;
  }
  .box.isSafari{
    height:calc(100vh - 75px);
  }
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
    background-color: #201624;
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .time{
    height:1rem;
    line-height: 1rem;
    text-align: center;
    font-size: .24rem;
    color:#fff;
  }
  .content{
    height: 3.46rem;
    width: 6.9rem;
    overflow: hidden;
    margin: 0 auto;
    background-color: #dddddd;
    border-radius: .26rem;
  }
  .photo{
    height: 2.34rem;
    position: relative;
  }
  .photo>img{
    width:100%;
    position: absolute;
    bottom: 0;
  }
  .word{
    padding:0 .36rem;
  }
  .word>div:nth-child(1){
    font-size: .28rem;
    font-weight: bold;
    margin-top: .18rem;
  }
  .word>div:nth-child(2){
    font-size: .24rem;
    color: #6e6e6e;
    margin-top: .18rem;
    width: 270px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>