<template>
  <div :class="[isSafari?'isSafari':'']">
    <swiper class="my-swipe" 
            id="wd_swiper" 
            @slideChange="indexChange">
      <!-- 每个梦的卡片 -->
      <swiper-slide v-for="(item,index) in lists" 
                    :key="index">
        <div class="dream_box" :class="index==itemIndex?'active':''">
          <!-- 标题 -->
          <div class="title">{{item.title}}</div>
          <div class="boundary">
            <img :src="photoSrc+'dreamWorld/boundary_l.png'" />
            <img class="star" :src="photoSrc+'star-bf.png'" />
            <img :src="photoSrc+'dreamWorld/boundary_r.png'" />
          </div>
          <div class="content">
            <div v-html="item.content">
              <!-- 文字内容 --><!-- 
              {{item.content}} -->
            </div>
            <div>
              <vedio v-for="(i,index) in item.vedioSrcLists"
                   :key="index"
                   :audioSrc="i.src"
                   ref="vedio"/>
            </div>
            <div class="evaluate">
              <div>留下你的感想</div>
              <div class="progress_bar">
                <!-- 选项 -->
                <div>
                  <div class="star">
                    <img v-if="item.chooseComment == 1" :src="photoSrc+'star.png'" />
                    <img v-else :src="photoSrc+'star-bf.png'" />
                  </div>
                  <div @click.stop="evaluate" :data-index="0">
                    <div :data-index="0" :style="{'width':item.isSendComment==0?'0':item.commentOneCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+'%'}"></div>
                    <span :data-index="0">真是个有趣的梦</span>
                    <span :data-index="0" v-if="item.isSendComment">
                      {{(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)==0?0:(item.commentOneCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+" ").substr(0,4)}}%
                    </span>
                  </div>
                </div>
                <!-- 选项 -->
                <div>
                  <div class="star">
                    <img v-if="item.chooseComment == 2" :src="photoSrc+'star.png'" />
                    <img v-else :src="photoSrc+'star-bf.png'" />
                  </div>
                  <div @click.stop="evaluate" :data-index="1">
                    <div :data-index="1" :style="{'width':item.isSendComment==0?'0':item.commentTwoCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+'%'}"></div>
                    <span :data-index="1">摸摸头</span>
                    <span :data-index="1" v-if="item.isSendComment">
                      {{(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)==0?0:(item.commentTwoCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+" ").substr(0,4)}}%
                    </span>
                  </div>
                </div>
                <!-- 选项 -->
                <div>
                  <div class="star">
                    <img v-if="item.chooseComment == 3" :src="photoSrc+'star.png'" />
                    <img v-else :src="photoSrc+'star-bf.png'" />
                  </div>
                  <div @click.stop="evaluate" :data-index="2">
                    <div :data-index="2" :style="{'width':item.isSendComment==0?'0':item.commentThreeCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+'%'}"></div>
                    <span :data-index="2">这个梦好奇葩</span>
                    <span :data-index="2" v-if="item.isSendComment">
                      {{(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)==0?0:(item.commentThreeCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+" ").substr(0,4)}}%
                    </span>
                  </div>
                </div>
                <!-- 选项 -->
                <div>
                  <div class="star">
                    <img v-if="item.chooseComment == 4" :src="photoSrc+'star.png'" />
                    <img v-else :src="photoSrc+'star-bf.png'" />
                  </div>
                  <div @click.stop="evaluate" :data-index="3">
                    <div :data-index="3" :style="{'width':item.isSendComment==0?'0':item.commentFourCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+'%'}"></div>
                    <span :data-index="3">做过类似的梦</span>
                    <span :data-index="3" v-if="item.isSendComment">
                      {{(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)==0?0:(item.commentFourCount*1/(item.commentOneCount+item.commentTwoCount+item.commentThreeCount+item.commentFourCount)*100+" ").substr(0,4)}}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="information">
              <!-- 头像 -->
              <img :src="item.headPhotoUrl" />
              <!-- 用户名 -->
              <span>{{item.username}}</span>
            </div>
            <div class="time">
              {{item.dreamTime | yyyy.mm.dd}}&nbsp;
              {{item.dreamTime | timeWord}}
            </div>
            <div class="type">
              来自游记《{{item.type | dreamType}}》
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- 最后的添加页 -->
      <swiper-slide>
        <div class="addDream">
          <div>已经看完{{lists.length}}个梦境了</div>
          <div>还要继续探索吗？</div>
          <button class="addDreamButton" @click="addDream">
            <span class="iconfont">&#xe630;</span>
            继续探索
          </button>
          <div>
            继续探索需要花费星辰<img :src="photoSrc+'star.png'" />x2
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Dialog } from 'vant'
import Vedio from '../../createDream/components/Vedio'
export default {
  name: 'wd-Swiper',
  data () {
    const that = this;
    return {
      itemIndex:0,
      photoSrc: this.$globalData.photoSrc,
      isSafari:this.$globalData.isSafari,
    }
  },
  methods:{
    indexChange(){
      this.itemIndex = this.$children[0].swiper.snapIndex;
      // console.log(this.$children[0].swiper.snapIndex);
      this.$emit('indexChange',this.itemIndex)
    },
    addDream(){
      Dialog.confirm({
        message: '确定要继续花费两颗星辰进行探索吗？'
      }).then(() => {
        this.$emit('addDream')
      }).catch(() => {
        
      });
    },
    // 点击发表感想
    evaluate(e){
      // console.log(e.target.dataset.index)
      if(!this.lists[this.itemIndex].isSendComment){
        Dialog.confirm({
          message: '评论后就不能再修改咯，再想想吧',
          confirmButtonText:'评论'
        }).then(() => {
          this.$emit('evaluate',e.target.dataset.index);
        }).catch(() => {
          
        });
      }else{
        Dialog({
          message: '一次只能留下一条感想噢'
        })
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Vedio
  },
  props: {
    lists: {
      type: Array
    },
  }
}
</script>

<style lang="stylus" scoped>
  .my-swipe{
    width:6.24rem;
    margin:0 auto;
    display: block;
    overflow: unset;
  }
  #wd_swiper >>> .swiper-wrapper{
    color: #fff;
    font-size: 20px;
    text-align: center;
    /*height:100px;*/
    width:6.1rem !important;
    margin:0 auto;
  }
  .dream_box{
    background-color: #201624;
    border-radius:.19rem;
    padding:.58rem .32rem 0;
    transform: scale(0.9,0.9);
    transition: all .3s;
    opacity: 0.8;
  }
  .dream_box.active{
    transform: scale(1,1);
    opacity: 1;
  }
  .title{
    text-align: center;
    font-size: .36rem;
    color:#fefefe;
    padding:0 .32rem;
  }
  .boundary{
    margin-top: .28rem;
  }
  .boundary>img:not(.star){
    height: .28rem;
  }
  .boundary>.star{
    height:.4rem;
    margin: 0 .06rem;
  }
  .content{
    font-size: .26rem;
    line-height: .4rem;
    margin:.36rem 0;
    color:#9c9c9c;
    height: calc(100vh - 5.6rem);
    overflow-y: auto; 
  }
  .content >>> div>div>.video_box{
    // background-image:linear-gradinet(to right ,#110b19 ,#35253e);
    background-image:linear-gradient( to right, #110b19 0%, #35253e 100%);
    color: #9c9c9c;
  }
  .isSafari .content{
    height: calc(100vh - 5.6rem - 75px);
  }
  /*梦境文章内容*/
  .content>div:nth-child(1){
    padding-bottom: .5rem;
    min-height: calc(100vh - 11rem);
  }
  .isSafari .content>div:nth-child(1){
    min-height: calc(100vh - 11rem - 75px);
  }
  /*感想*/
  .evaluate{
    border-top: 2px solid #2b2b2b;
    text-align: left;
    padding: .3rem 0;
    height:200px;
  }
  .progress_bar{
    margin-top: .1rem;
    padding:0 .1rem;
  }
  .progress_bar>div{
    display: flex;
    height: .7rem;
    justify-content: space-between;
    margin-top: .24rem;
  }
  .progress_bar .star{
    line-height: .7rem
    /*margin-right*/
  }
  .progress_bar .star>img{
    height: .46rem;
  }
  .progress_bar .star+div{
    width: 4.02rem;
    height: .66rem;
    line-height: .7rem;
    border:2px solid #5c486b;
    border-radius: .15rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 .22rem;
  }
  .progress_bar .star+div>div{
    position: absolute;
    left:0;
    width:0;
    height:100%;
    background-color: #352b3d;
    border-radius: .15rem;
    transition: width .5s;
  }
  .progress_bar .star+div>span{
    position: relative;
    z-index: 1;
  }
  .footer{
    border-top: 2px solid #2b2b2b;
    padding:.18rem 0;
    font-size: .24rem;
    color:#878787;
    text-align: left;
    display: flex;
    justify-content:space-between;
    position:relative;
  }
  .footer>div{
    display: inline-block;
    height: .75rem;
    line-height: .75rem;
  }
  .footer img{
    height: .75rem;
    width: .75rem;
    border-radius: 50%;
    margin-right: .16rem;
  }
  .footer>.time{

  }
  .footer>.type {
    position:absolute;
    right:0;
    bottom:-.5rem;
    width: auto;
    height: auto;
    line-height: unset;
  }
  // 继续探索页
  .addDream{
    margin-top:3rem;
    color:#878787;
    font-size:.26rem;
  }
  .addDream>div{
    margin-top:.22rem
  }
  .addDreamButton{
    width:3.66rem;
    height:.78rem;
    background-color:transparent;
    color:#fff;
    border-radius:.15rem;
    border:1px solid #fff;
    line-height: .76rem;
    font-size: .26rem;
    padding: 0 .78rem;
    margin: 1rem auto 0;
    display: flex;
  }
  .addDreamButton>span{
    font-size: .48rem;
    margin-right: .34rem;
  }
  .addDreamButton+div img{
    height:.4rem;
    position: relative;
    top: -.1rem;
    margin:0 .08rem;
    font-size: .3rem;
  }
</style>