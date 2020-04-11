<template>
  <div class="box">
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe622;</span>
      <img src="@/assets/images/notice/photo1.jpg" />
    </div>
    <div class="center">
      <div class="title">2020.03.03更新日志</div>
      <div class="info">
        <span>梦境小管家</span>
        <span>2020.03.03</span>
      </div>
      <div class="content">
        1.新增了“星星瓶”功能。
        <br/>  
        2.新增支持SQLite数据库功能，可免安装使用或在后台切换数据库类型；
        <br/>
        3.新增隐藏游记内容功能，管可一键隐藏一本书内所有的游记；
        <br/>
        4.修复了“梦世界”的bug；
        <br/>
        5.新增梦境游记批量导出功能；
        <br/>
        6.新增按时间排序梦境功能；
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeDetails',
  data () {
    return {

    }
  },
  methods:{
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    height:100vh;
    background-color: #090614;
    color: #fff;
  }
  .header{
    height: 2.55rem;
    position: relative;
  }
  .header>img{
    width:100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .header>span{
    position: relative;
    height: .62rem;
    width: .62rem;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    margin: .22rem .3rem;
    z-index: 1;
    display: inline-block;
    line-height: .62rem;
    text-align: center;
    border-radius: 50%;
  }
  .center{
    height: calc( 100vh - 2.55rem);
    overflow: auto;
    padding:0 .3rem;
  }
  .title{
    font-size: .36rem;
    font-weight: bold;
    margin-top: .68rem; 
  }
  .info{
    display: flex;
    justify-content: space-between;
    color: #6c6c6c;
    font-size: .18rem;
    width: 150px;
    margin-top: .4rem;
  }
  .info>span:nth-child(1){
    width: 1.4rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .content{
    line-height: .92rem;
    color: #c7c7c7;
    font-size: .26rem;
  }
</style>