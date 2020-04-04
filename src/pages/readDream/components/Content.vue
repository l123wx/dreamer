<template>
  <div class="box">
    <div class="title">
      <input type="text" v-model="title" @click="input_click" @blur="input_blur" />
    </div>
    <div class="boundary">
      <img src="@/assets/images/dreamWorld/boundary_l.png" />
      <img class="star" src="@/assets/images/star.png" />
      <img src="@/assets/images/dreamWorld/boundary_r.png" />
    </div>
    <div class="message_box" @click="focus_textarea">
      <field v-model="message" 
             type="textarea"
             autosize
             autofocus
             size="100"
             class="textarea"
             ref="textarea"
             @blur="blur_textarea"
             @focus="focus_textarea"
             :formatter="formatter"/>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant'
export default {
  name: 'Content',
  data () {
    return {
      title:'为梦境起个名字吧',
      message:'在这里输入输入内容'
    }
  },
  components: {
    Field
  },
  props:{
    // title:{
    //   type:String,
    //   default:'为梦境起个名字吧'
    // }
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
      // 过滤输入的数字
      return value.replace(/\d/g, '');
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    text-align: center;
    height:calc(100vh - 2.94rem);
    background-color: #fff;
    width:5.3rem;
    margin:0 auto;
    border-top-left-radius: .19rem; 
    border-top-right-radius: .19rem; 
    padding:.6rem .74rem 0;
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
    height:calc(100vh - 2.94rem - 1.54rem);
    margin-top:.32rem;
    /*background-color: red;*/
    overflow: auto;
    color: #a0a0a0;
    font-size: .26rem;
  }
  .textarea{
    min-height: calc(100vh - 2.94rem - 1.54rem);
  }
</style>