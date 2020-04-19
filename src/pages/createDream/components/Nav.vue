<template>
  <div class="nav">
    <div v-if="(typePage && typePage =='create') || (typePage && typePage =='revise')">
      <!-- 录音 -->
      <span class="iconfont" @touchstart="touchstart_btn1" @touchend="touchend_btn1" @touchmove="touchmove_btn1">
        <div :class="recordActive?'active':''">
          <span class="iconfont">&#xe631;</span>
          {{recordActive?'松开结束录音':'按住开始录音'}}
        </div>
      </span>
      <!-- <span class="iconfont" @click="click_btn2"></span> -->
      <span class="iconfont" @click="click_btn3">&#xe63b;</span>
    </div>
    <div v-if="typePage && typePage=='read'">
      <span class="iconfont" @click="revise_dream">&#xe655;</span>
      <span class="iconfont" @click="clock_dream">&#xe639;</span>
      <span class="iconfont" @click="move_dream">&#xe65e;</span>
      <span class="iconfont" @click="del_dream">&#xe65f;</span>
    </div>

    <div class="recording" v-show="recordActive" @click="closeRecorderMenu">
      <!-- 录音时弹窗 -->
      <div :style="recordMenuShow?'background-color:transparent':''">
        <div v-if="!recordCountDownShow">
          <span :style="'width:'+(recordingAnimationIndex==0?'0':recordingAnimationIndex==1?'.16rem':recordingAnimationIndex==2?'.3rem':'.6rem')"><span class="iconfont">&#xe673;</span></span>
          <span class="iconfont">&#xe631;</span>
          <span :style="'width:'+(recordingAnimationIndex==0?'0':recordingAnimationIndex==1?'.16rem':recordingAnimationIndex==2?'.3rem':'.6rem')"><span class="iconfont">&#xe646;</span></span>
        </div>
        <!-- 倒计时 -->
        <div v-if="recordCountDownShow" style="font-size: 1rem">{{recordCountDown}}</div>
        <div v-show="!recordMenuShow">
          上滑取消或转文字
        </div>
        <div :class="['recordMenu',recordMenuShow?'active':'']">
          松开手指，{{recordMenuActiveIndex==0?'取消录音':(recordMenuActiveIndex==1?'转换文字':'')}}
          <div :class="['recordCancel',recordMenuActiveIndex==0?'active':'']">
            <div>
              <span class="iconfont">&#xe64e;</span><br/>
              取消
            </div>
          </div>
          <div :class="['recordTransform',recordMenuActiveIndex==1?'active':'']">
            <div>
              <span class="iconfont">&#xe64d;</span><br/>
              转文字
            </div>
          </div>
        </div>
      </div>
      <overlay :show="recordMenuShow" />
    </div>
  </div>
</template>

<script>
import Record from "@/assets/javaScript/recorder/record-sdk";
import { del_dream,change_single_dream_column,voice_to_text_by_base64 } from '@/assets/javaScript/_axios.js'
import { Popup,Dialog,ActionSheet,Notify,Overlay } from 'vant'
export default {
  name: 'Nav',
  data () {
    return {
      ClockMenuShow: false,
      ClockActions: [
        { name: '隐藏这个梦' },
        { name: '公开这个梦' },
      ],
      recordActive:false,
      recordCountDownShow:false, //倒计时是否显示
      recordCountDown:0,
      recordingAnimationIndex:0, //麦克风动画的一个参考变量
      recordingAnimationInterval:null,
      recordMenuShow:false,
      recordMenuActiveIndex:-1,
      recorder: new Record(),
      recorderBlob:null
    }
  },
  props:{
    buttonShow:{
      type: Boolean,
      default: false
    },
    typePage: {
      type:String
    },
    dreamId: {
      type: Number
    }
  },
  components:{
    NPopup:Popup,
    ClockActionSheet:ActionSheet,
    Overlay
  },
  methods: {
    saveRecord() {
      this.stopRecord();
      this.blobToDataURL(this.recorderBlob,base64=>{
        // console.log(base64)
        this.$emit("saveRecord",base64);
      })

    },
    touchstart_btn1(e) {
      // 开始录音
      this.startRecord();
      this.recordCountDown = 60;
      this.$emit("touchstart_btn1");
      this.recordActive = true;
      this.recordingAnimationInterval = setInterval(res=>{
        this.recordCountDown --;
        if(this.recordCountDown <=0){//倒计时结束后
            this.closeRecorderMenu();
            // 录音变成语音保存下来
            this.saveRecord();
        }else if( this.recordCountDown < 10 ){ //开始倒计时
          this.recordCountDownShow = true;
        }
        if( this.recordingAnimationIndex < 3 || !(this.recordingAnimationIndex = 0)){
          this.recordingAnimationIndex ++;
        }
      }, 1000)
    },
    touchend_btn1() {
      this.closeRecorderMenu();
      if( this.recordCountDown > 59 ){
        Notify({ type: 'danger', message: '说话时间太短！'});
      }else{
        // console.log(this.recordMenuActiveIndex)
        if( this.recordMenuActiveIndex == 1){
          //转文字
          this.stopRecord();
          this.blobToDataURL(this.recorderBlob,base64=>{ 
            // console.log(base64)
            voice_to_text_by_base64({
              base64Data:base64
            }).then(res=>{
              if( res.status == 0 ){
                // res就是语音转换的结果
                // console.log(res.data['0'])
                this.$emit("recorderTransform",res.data['0'])
              }else{
                Notify({ type: 'danger', message: res.msg+'请重试！'});
              }
            })
          })
        }else if( this.recordMenuActiveIndex == -1 ){//如果没有上滑，变成录音
          // console.log("如果没有上滑，变成录音")
          this.saveRecord();
        }
      }
      //重置菜单状态
      this.recordMenuActiveIndex == -1;
    },
    touchmove_btn1(e) {
      if( window.innerHeight - e.changedTouches['0'].screenY < 70){//下方
        // console.log("下方")
        this.recordMenuActiveIndex = -1;
        this.recordMenuShow = false;
      }else{
        this.recordMenuShow = true;
        // console.log("上方")
        //根据手指位置判断菜单选项
        if( e.changedTouches['0'].pageX > window.innerWidth/2 ){
          // console.log("在右边")
          this.recordMenuActiveIndex = 1;
        }else{
          // console.log("在左边")
          this.recordMenuActiveIndex = 0;
        }
      }
    },
    closeRecorderMenu(){
      this.recordActive = false;
      this.recordMenuShow = false;
      this.recordCountDownShow = false;
      clearInterval(this.recordingAnimationInterval);
      this.recordingAnimationIndex = 0;
    },
    click_btn2() {
      this.$emit("click_btn2");
    },
    click_btn3() {
      this.$emit("click_btn3");
    },
    // 修改梦
    revise_dream(){
      this.$emit("revise_dream");
    },
    //隐藏&公开梦
    clock_dream(){
      this.$emit("clock_dream");
    },
    // 移动梦
    move_dream(){
      this.$emit("move_dream");
    },
    // 删除梦
    del_dream(){
      Dialog.confirm({
        message: '确定要删除这个梦吗'
      }).then(() => {
        del_dream({
          dreamId:this.dreamId
        }).then(res=>{
          // console.log(res)
          if( res.data == '删除成功' ){
            Notify({ type: 'success', message: '已删除'});
            this.$router.go(-1)
          }else{
            Notify({ type: 'danger', message: '操作失败，请重试'});
          }
        })
      }).catch(() => {
        // on cancel
      });
    },
    //开始录音
    startRecord: function() {
      console.log("start to record now.");
      let self = this;
      // self.isFinished = false;
      self.recorder.startRecord({
        success: res => {
          console.log("start record successfully.");
        },
        error: res => {
          console.log("start record failed.");
          Notify({ type: 'danger', message: '录音失败，请检查麦克风权限'});
        }
      });
    },
    // blob转base64
    blobToDataURL: function(blob, callback) {
        var a = new FileReader();
        a.onload = function (e) { callback(e.target.result); }
        a.readAsDataURL(blob);
    },
    // 停止录音并获得录音文件
    stopRecord: function() {
      console.log("stop record now.");
      let self = this;
      // self.isFinished = false;
      return self.recorder.stopRecord({
        success: res => {
          console.log(res)
          //此处可以获取音频源文件(res)，用于上传等操作
          console.log("stop record successfully.");
          this.recorderBlob = res;
        },
        error: res => {
          console.log("stop record failed.");
          Notify({ type: 'danger', message: '录音失败，请检查麦克风权限'});
        }
      });
    },
  }
}
</script>

<style scoped>
  .nav{
    height:1.04rem;
    background-image: linear-gradient( to right, rgb(159,211,222) 0%, rgb(182,165,213) 100%);
    color:#fff;
    position: relative;
    user-select: none;
  }
  .nav>div{
    display: flex;
  }
  .nav>div>span{
    display:inline-block;
    flex:1;
    font-size: .5rem;
    text-align: center;
    height:1.04rem;
    line-height:1.04rem;
  }
  .nav>div>span:nth-child(1){

  }
  .nav>div>span:nth-child(1)>div{
    width: 3.46rem;
    height: .6rem;
    background-color: #748899;
    margin: 0 0 0 1.2rem;
    position: relative;
    top: 50%;
    margin-top: -.3rem;
    border-radius: .5rem;
    font-size: .24rem;
    line-height: .6rem;
    transition: background-color .2s;
  }
  .nav>div>span:nth-child(1)>div.active{
    background-color: #53616d;
  }
  .nav>div>span:nth-child(1)>div>span{
    font-size: .36rem;
    position: absolute;
    left: .2rem;
    top: .07rem;
    line-height: .48rem;
  }

  .recording{
    position: fixed;
    height: 100vh;
    width: 100%;
    top:0;
    left:0;
    user-select: none;
  }
  /*录音时弹窗*/
  .recording>div:nth-child(1){
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.7);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-50%);
    z-index: 2;
    transition: background-color .1s;
  }
  .recording>div:nth-child(1)>div{
    text-align: center;
    padding-top: .8rem;
  }
  /*录音图标*/
  .recording>div:nth-child(1)>div>span{
    font-size: .8rem;
    display: inline-block;
    position: relative;
  }
  .recording>div:nth-child(1)>div>span:nth-child(1),.recording>div:nth-child(1)>div>span:nth-child(3){
    height: .6rem;
    overflow: hidden;
    /*width: .16rem;*/
    /*width: .3rem;*/ 
    /*width: .6rem;*/
  }
  .recording>div:nth-child(1)>div>span>span{
    transform: scale(0.9,1);
    /*top: -.06rem;*/
    top: .02rem;
    font-size: .6rem;
    position: absolute;
    display: inline-block;
  }
  .recording>div:nth-child(1) span:nth-child(1)>span{
    right: 0;
  }
  .recording>div:nth-child(1) span:nth-child(3)>span{
    left: 0;
  }
  /*提示文字*/
  .recording>div:nth-child(1)>div:nth-child(2){
    position: absolute;
    padding-bottom: .4rem;
    width: 100%;
    font-size: 12px;
    bottom: 0;
  }
  .recordMenu{
    position: absolute;
    bottom: .8rem;
    width: 100%;
    padding: 0 !important;
    opacity: 0;
    transition: opacity .1s;
  }
  .recordMenu.active{
    opacity: 1;
  }
  .recordMenu>div{
    height: .8rem;
    width: .8rem;
    position: absolute;
    top: .5rem;
    background-color: #fff;
    color: #7a7a7a;
    border-radius: 50%;
    transition: all .3s;
    line-height: .8rem;
  }
  .recordMenu>div>div{
    font-size: .26rem;
    display: inline-block;
    vertical-align: middle;
    line-height: .4rem;
  }
  .recordMenu>div>div>span{
    font-size: .44rem;
  }
  .recordMenu>div:nth-child(1){
    left: 0rem;
  }
  .recordMenu>div:nth-child(2){
    right: 0rem;
  }
  .recordMenu.active>div{
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    top: 1.2rem;
    line-height: 1.6rem;
    transition: all .3s;
  }
  .recordMenu.active>div:nth-child(1){
    left: -1.2rem;
  }
  .recordMenu.active>div:nth-child(2){
    right: -1.2rem;
  }
  .recordMenu>div:nth-child(1).active{
    height: 1.9rem;
    width: 1.9rem;
    left: -1.35rem;
    top: 1.1rem;
    background-color: #ca4b5b;
    color: #fff;
    line-height: 1.9rem;
  }
  .recordMenu>div:nth-child(2).active{
    height: 1.9rem;
    width: 1.9rem;
    right: -1.35rem;
    top: 1.1rem;
    background-color: #b4a8d5;
    color: #fff;
    line-height: 1.9rem;
  }
</style>

