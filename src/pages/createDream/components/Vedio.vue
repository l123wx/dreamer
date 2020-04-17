<template>
  <div>
    <audio preload="auto" 
           hidden 
           ref="video"
           @canplay="canplay">
      <source :src="audioSrc" type="audio/mpeg" />
    </audio>
    <div :class="['video_box',videoPlaying?'playing':'']"
         @click.stop
         @touchstart="touchStart" 
         @touchmove="touchMove" 
         @touchend="touchEnd">
      <span class="iconfont">&#xe646;</span>
      <span v-if="videoReady">{{videoTime}}’’</span>
      <loading type="spinner" 
               size="18px"
               color="#fff"
               v-if="!videoReady"/>
    </div>
  </div>
</template>

<script>
import { Loading } from 'vant';
export default {
  name: 'Vedio',
  data () {
    return {
      videoPlaying:false,
      videoTime:null,
      audioPlayInterval:null,
      videoReady:false,
      eventInterval:null,
      eventTouchTime:0,
    }
  },
  components:{
    Loading
  },
  props:{
    audioSrc:{
      type:String
    }
  },
  methods:{
    touchStart(){
      let that = this;
      clearTimeout(this.eventInterval);//清除定时器
        this.eventInterval = setTimeout(function(){
          that.eventTouchTime++;
          that.$emit("deleteVedio");
          // console.log("deleteVedio")
        },600);//这里设置定时
      },
      //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    touchEnd(){
      clearTimeout(this.eventInterval);
      if(this.eventTouchTime == 0){
        //这里写要执行的内容（尤如onclick事件）
        this.playOrStop();
      }
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按 
    touchMove(){
      clearTimeout(this.eventInterval);//清除定时器
      this.eventTouchTime = 0;
    },
    playOrStop(){
      if(this.videoReady){
        if( this.videoPlaying ){
          this.vedioStop();
        }else{
          this.vedioPlay();
        }
      }
    },
    vedioStop(){
      // console.log("停止")
      this.$refs.video.pause();
      this.videoPlaying = false;
      this.videoTime = Math.ceil(this.$refs.video.duration);
      clearInterval(this.audioPlayInterval)
      this.$emit('vedioStop');
    },
    vedioPlay(){
      for(let item in this.$parent.$refs.vedio){
        this.$parent.$refs.vedio[item].vedioStop();
      }
      // console.log("开始")
      this.videoPlaying = true;
      this.$refs.video.play()
      // console.log(this)
      this.$emit('vedioPlay');
      this.audioPlayInterval = setInterval(e=>{
        if( this.videoTime > 0){
          this.videoTime--;
        }else{
          this.vedioStop();
        }
      }, 1000)
    },
    canplay(){
      this.videoReady = true;
      this.videoTime = Math.ceil(this.$refs.video.duration);
    }
  },
  mounted(){

  }
}
</script>

<style lang="css" scoped>
  .video_box{
    user-select: none;
    display: flex;
    justify-content: space-between;
    width: 3rem;
    height: .76rem;
    border-radius: 1rem;
    background-image: linear-gradient( to right, rgb(182,165,213) 0%, rgb(159,211,222) 100%);
    line-height: .76rem;
    padding: 0 .5rem;
    color: #fff;
    margin:0 0 .3rem 0;
  }
  .video_box>span:nth-child(1){
    overflow: hidden;
    font-size: .34rem;
  }
  .video_box.playing>span:nth-child(1){
    animation: animate-tail 2s steps(1) infinite;
  }
  @keyframes animate-tail {  
    0% {width: .06rem;}
    30% {width: .16rem;}
    70% {width: .3rem;}
  }  
</style>