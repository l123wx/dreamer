<template>
  <div class="feedback">
    <field
      v-model="message"
      type="textarea"
      maxlength="250"
      autosize
      placeholder="告诉我们你的意见和建议，我们会尽快处理。"
      show-word-limit
      id="textarea"
    />
    <div class="button" @click="confirm">确定</div>
  </div>
</template>

<script>
import { add_feedback } from '@/assets/javaScript/_axios'
import { Field,Toast,Dialog } from 'vant';
export default {
  name: 'Feedback',
  data () {
    return {
      message:'',
    }
  },
  components: {
    Field
  },
  methods: {
    confirm() {
      if( this.message != '' ){
        add_feedback({
          content: this.message
        }).then(res=>{
          Toast.success({message:'感谢你的反馈！'})
        })
      }else{
        Dialog({message:'你的反馈会让我们变得更好'})
      }
    }
  }
}
</script>

<style lang="stylus">
  .feedback{
    position: relative;
    height:100%;
  }
  .feedback .van-field{
    width: 6.88rem;
    background-color: #201624;
    margin: 0 auto;
    color:#fff;
    border-radius: 0.18rem;
    padding: .2rem .32rem;
  }
  .feedback .van-cell{
    background-color: #201624;
  }
  .van-cell:not(:last-child)::after{
    border:none;
  }
  .feedback #textarea >>> textarea{
    
  }
  .feedback #textarea{
    min-height:4rem;
    color: #626262;
  }
  .feedback .button{
    height: .76rem;
    width: 6.88rem;
    background-color: #2f2533;
    text-align: center;
    line-height: .76rem;
    color:#b5b5b5;
    font-size: .3rem;
    border-radius: .17rem;
    position: absolute;
    bottom: .34rem;
    left: 50%;
    margin-left: -3.44rem; 
  }
</style>