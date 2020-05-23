<template>
  <div class="box">
    <div class="title">
      <input type="text" :readonly="!typePage || typePage=='read'" v-model="title" @click="input_click" @blur="input_blur" />
    </div>
    <div class="boundary">
      <img :src="photoSrc+'dreamWorld/boundary_l.png'" />
      <img class="star" :src="photoSrc+'star.png'" />
      <img :src="photoSrc+'dreamWorld/boundary_r.png'" />
    </div>
    <div class="message_box" 
         @click="focus_textarea">
      <field v-model="message" 
             type="textarea"
             autosize
             autofocus
             size="100"
             class="textarea"
             ref="textarea"
             @blur="blur_textarea"
             @focus="focus_textarea"
             :formatter="formatter"
             :readonly="!typePage || typePage=='read'"/>
      <div>
        <vedio v-for="(item,index) in vedioSrcLists" 
             :key="index"
             :audioSrc="item.src"
             ref="vedio"
             @deleteVedio="deleteVedio(index)"/>
      </div>
      <!-- 感想 -->
      <div class="evaluate" v-if="typePage=='read'">
        <div style="color:#959595">大家对这个梦的感想</div>
        <div class="progress_bar">
          <!-- 选项 -->
          <div>
            <div class="star">
              <img :src="photoSrc+'star-bf.png'" />
            </div>
            <div>
              <div :style="{'width':dreamData.commentOneCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+'%'}"></div>
              <span>真是个有趣的梦</span>
              <span>
                {{(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)==0?0:(dreamData.commentOneCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+" ").substr(0,4)}}%
              </span>
            </div>
          </div>
          <!-- 选项 -->
          <div>
            <div class="star">
              <img :src="photoSrc+'star-bf.png'" />
            </div>
            <div>
              <div :style="{'width':dreamData.commentTwoCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+'%'}"></div>
              <span>摸摸头</span>
              <span>
                {{(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)==0?0:(dreamData.commentTwoCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+" ").substr(0,4)}}%
              </span>
            </div>
          </div>
          <!-- 选项 -->
          <div>
            <div class="star">
              <img :src="photoSrc+'star-bf.png'" />
            </div>
            <div>
              <div :style="{'width':dreamData.commentThreeCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+'%'}"></div>
              <span>这个梦好奇葩</span>
              <span>
                {{(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)==0?0:(dreamData.commentThreeCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+" ").substr(0,4)}}%
              </span>
            </div>
          </div>
          <!-- 选项 -->
          <div>
            <div class="star">
              <img :src="photoSrc+'star-bf.png'" />
            </div>
            <div>
              <div :style="{'width':dreamData.commentFourCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+'%'}"></div>
              <span>做过类似的梦</span>
              <span>
                {{(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)==0?0:(dreamData.commentFourCount*1/(dreamData.commentOneCount+dreamData.commentTwoCount+dreamData.commentThreeCount+dreamData.commentFourCount)*100+" ").substr(0,4)}}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant'
import { get_dream_info } from "@/assets/javaScript/_axios"
import Vedio from './Vedio'
export default {
  name: 'Content',
  data () {
    return {
      title:'为梦境起个名字吧',
      message:'在这里输入输入内容',
      dreamData:{},
      photoSrc:this.$globalData.photoSrc,
    }
  },
  components: {
    Field,
    Vedio,
  },
  props: {
    typePage: {
      type:String
    },
    dreamId: {
      type:Number
    },
    vedioSrcLists: {
      type:Array
    }
  },
  methods:{
    focus_textarea(){
      this.$refs.textarea.focus()
      if(this.message=='在这里输入输入内容'){
        this.message=''
      }
    },
    blur_textarea(){
      if(this.message==''){
        this.message='在这里输入输入内容'
      }
    },
    input_click(){
      if(this.title=='为梦境起个名字吧'){
        this.title=''
      }
    },
    input_blur(){
      if(this.title==''){
        this.title='为梦境起个名字吧'
      }
    },
    formatter(value){
      //将空格和回车替换成占位符
      // value=value.replace(/\<br \/\>/g,"\n");
      return value;
      // return value.replace(/\d/g, '');
    },
    deleteVedio(index){
      console.log("deleteVedio")
      this.$emit("deleteVedio",index);
    }
  },
  mounted(){
    // console.log(this.typePage)
    if(this.dreamId){
      this.title = ''
      this.message = ''
      get_dream_info({
        dreamId:this.dreamId
      }).then(res=>{
        // console.log(res)
        this.dreamData = res.data
        this.title = res.data.title
        this.message = res.data.content.replace(/\<br\/\>/g,"\n");
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    text-align: center;
    /*height: calc(100vh - 3.24rem);*/
    background-color: #fff;
    width:5.4rem;
    margin:0 auto .2rem;
    border-radius: .19rem;
    padding:.6rem .64rem .1rem;
  }
  .title{
    text-align: center;
    font-size: .36rem;
    color:#a0a0a0;
    padding:0 .32rem;
  }
  .title>input{
    width:100%;
    display: inline-block;
    text-align: center;
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
  .message_box{
    height: calc(100vh - 5.07rem);
    margin:.32rem 0;
    /*background-color: red;*/
    overflow: auto;
    color: #a0a0a0;
    font-size: .26rem;
  }
  .textarea{
    min-height: calc(100vh - 9.7rem);
  }
  /*感想*/
  .evaluate{
    text-align: left;
    padding: .3rem 0;
    width: 5.3rem;
    margin: 0 auto;
    border-radius: .19rem;
    background-color: #fff;
  }
  .progress_bar{
    margin-top: .1rem;
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
    border:2px solid #b4a8d5;
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
    background-color: #f0eef7;
    border-radius: .15rem;
    transition: width .5s;
  }
  .progress_bar .star+div>span{
    position: relative;
    z-index: 1;
  }
</style>