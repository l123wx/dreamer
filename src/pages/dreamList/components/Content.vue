<template>
  <div class="content">
    <div class="cardView" v-show="showType==0">
      <div v-if="!lists.length" class="tipOfNone">该梦境还没有梦噢</div>
      <!-- 卡片视图 -->
      <div v-for="(item,index) in lists"
           :key="index"
           class="dream_box"
           @click="dreamListClick(item.id)">
        <div class="title">{{item.title}}</div>
        <div class="iconfont">
          <img v-if="!item.pictureCount && !item.voiceCount" :src="photoSrc+'star.png'" />
          <img v-if="!item.pictureCount && item.voiceCount" :src="photoSrc+'video.png'" />
          <img v-if="item.pictureCount" :src="photoSrc+'picture.png'" />
        </div>
        <div class="center">{{item.content|spaceAndEnter}}</div>
        <div class="footer">
          <div class="date">{{item.dreamTime | yyyy.mm.dd}}<span v-if="!item.isPublic" class="iconfont">&#xe600;</span></div>
          <div class="time">{{item.dreamTime | timeWord}}</div>
        </div>
      </div>
    </div>  
    <!-- 列表视图 -->
    <div class="listView" v-show="showType">
      <div v-for="(item,index) in lists" 
           class="dream_box"
           :key="index">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      photoSrc: this.$globalData.photoSrc,
    }
  },
  props: {
    showType: {
      type: Number
    },
    lists: {
      type:Array
    }
  },
  methods: {
    dreamListClick(e){
      // console.log(e)
      this.$router.push({name:'CreateDream',params:{type:'read',dreamId:e}})
    }
  }
}
</script>

<style lang="css" scoped>
  .content>div:not(.loadMore){
    min-height: calc(100vh - 1.04rem - 1.28rem - 1.4rem);
    padding:0 .5rem 0.5rem;
  }
  /*梦境里没有梦的提醒*/
  .tipOfNone{
    min-height:.01rem;
    text-align: center;
    margin-top: .5rem;
    display: block;
    width: 100%;
  }
  /*卡片视图*/
  .cardView{
    flex-wrap:wrap;
    display: flex;
    justify-content:space-between;
  }
  .cardView .dream_box{
    width:2.54rem;
    height:4rem;
    background-color: #fff;
    border-radius: .18rem;
    margin-top:.18rem;
    color:#000;
    padding:.44rem .28rem;
  }
  .cardView .dream_box>.title{
    font-size: .3rem;
    color:#7c7c7c;
    text-align: center;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:2.6rem;
  }
  /*图标*/
  .cardView .dream_box>.iconfont>img{
    height:.38rem;
    display: block;
    margin:.21rem auto;
  }
  .cardView .dream_box>.center{
    color:#c2c2c2;
    font-size: .24rem;
    line-height: .32rem;
    margin:.12rem 0;
    min-height: 1.55rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    /*text-align: center;*/
  }
  .cardView .footer{
    bottom:0;
    margin-top:1.2rem;
    font-size: .24rem;
    color:#c2c2c2;
    display: flex;
    justify-content: space-between;
  }
  .cardView .footer .iconfont{
    color:#868686;
    font-size: .20rem;
    margin-left:.12rem;
  }
  /*列表视图*/
  .listView{

  }
  .listView>.dream_box{
    font-size: .3rem;
    border-bottom:2px solid;
    border-color:inherit;
    height:.9rem;
    line-height: .9rem;
    padding:0 .28rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>