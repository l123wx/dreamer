<template>
  <div class="auto_result">
    <p>
      <span class="iconfont">&#xe656;</span>
      点击你想了解的关键词进行解梦
    </p>
    <div class="title">一个奇妙的梦</div>
    <div class="content">
      <span v-for="(item,index) in words" 
            :key="item.index" 
            :class="[item.wordType=='n'||item.wordType=='ns'||item.wordType=='LOC'?'active':'']"
            @click="item.wordType=='n'||item.wordType=='ns'||item.wordType=='LOC'?searchword(item.word):''">
        {{item.word}}
      </span>
    </div>
    <div class="button">
      <span class="iconfont">&#xe64e;</span>
      返回解梦所
    </div>
    <auto-result-popup v-model="popupShow"
                       closeable
                       position="bottom"
                       round
                       :overlay="false"
                       class="auto_result_popup">
      <classify-dropdown-menu />
      <div style="height:calc(100vh - 6.2rem)">
        <reveal-lists />
      </div>
      <div>
        
      </div>
    </auto-result-popup>
  </div>
</template>

<script>
import { Popup } from 'vant'
import { split_dream } from '@/assets/javaScript/_axios'
import ClassifyDropdownMenu from './ClassifyDropdownMenu'
import RevealLists from './RevealLists'
export default {
  name: 'AutoRevealResult',
  data () {
    return {
      content:'',
      words:[],
      popupShow:false
    }
  },
  props:{
    dreamId:{
      type:Number
    }
  },
  components: {
    AutoResultPopup:Popup,
    ClassifyDropdownMenu,
    RevealLists
  },
  methods: {
    searchword(e){
      let str = e.replace(/[。|？|！|，|、|；|：|“|”|‘|’|（|）|《|》|〈|〉|【|】|『|』|「|」|﹃|﹄|〔|〕|…|—|～|﹏|￥|－ ＿|-]/g,"");
      str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");  
      console.log(str)
      this.popupShow = true
    }
  },
  mounted() {
    if(this.dreamId != -1){
      split_dream({
        dreamId:this.dreamId
      }).then(res=>{
        // let word = '';
        console.log(res)
        this.words = res.data;
        console.log(this.words)
        // for(var i in res.data){
        //   console.log(i)
        //   if( res.data[i].wordType=="n" || res.data[i].wordType=="ns" || res.data[i].wordType=="LOC"){
        //     word = '<span style="color:#fce782;margin:0 2px" @click="searchWorld"'>+ res.data[i].word +'</span>';
        //   }else{
        //     word = res.data[i].word;
        //   }
        //   this.content +=  word;
        //   console.log(word)
        // }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .auto_result{
    height:100%;
    overflow: hidden;
  }
  .auto_result>p{
    color: #bfbfbf;
    font-weight: lighter;
    font-size: .24rem;
    padding: .22rem .3rem;
  }
  .auto_result>p>span{
    font-size: .4rem;
    position: relative;
    font-weight: lighter;
    top:4px;
  }
  .title{
    padding: .4rem .3rem;
    color: #fff;
    font-size: .36rem;
  }
  .content{
    padding: 0 .3rem;
    height: 8rem;
    overflow: auto;
    color: #9c9c9c;
    line-height: .48rem;
  }
  .content>span{
    margin: 0 -.03rem;
  }
  .content>span.active{
    color: #fce782;
    margin:0 2px;
  }
  .button{
    height: .76rem;
    line-height: .76rem;
    border-radius: .24rem;
    width: 6.9rem;
    background-color: #b4a8d5;
    color: #fff;
    font-size: .3rem;
    text-align: center;
    margin: .4rem auto;
  }
  .button>.iconfont{
    font-size: .4rem;
  }
  .auto_result_popup{
     height: 8.2rem;
     background-color:#201624;
     padding-top:38px
  }
</style>