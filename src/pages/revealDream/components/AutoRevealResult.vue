<template>
  <div class="auto_result">
    <p>
      <span class="iconfont">&#xe656;</span>
      点击你想了解的关键词进行解梦
    </p>
    <div class="title">{{dreamTitle}}</div>
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

    <!-- 弹窗 -->
    <auto-result-popup v-model="popupShow"
                       closeable
                       position="bottom"
                       round
                       :overlay="false"
                       class="auto_result_popup"
                       style="overflow: hidden">
      <div style="height:100%;overflow: hidden;position: relative;">
        <!-- 分类选择下拉栏 -->
        <classify-dropdown-menu v-if="popupShow" @firstClassifyClick="firstClassifyClick" @childClassifyClick="childClassifyClick"/>
        <!-- 查询结果 -->
        <div style="height:calc(100vh - 6.2rem)">
          <reveal-lists :lists="revealDreamList" @listClick="listClick"/>
        </div>
        <!-- 横向关键词选择处 -->
        <div class="DreamKeyWordList">
          <div nowrap>
            <span v-for="item in keyWordList"
                  @click="searchword(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </auto-result-popup>
    <!-- 具体解析弹窗 -->
    <dream-dialog style="border:2px solid #434343;width:5.4rem;" v-model="dreamDialogshow" :showConfirmButton="false" :show-cancel-button="false">
      <div class="reveal_box">
        <span class="iconfont" @click="closeRevealBox">&#xe622;</span>
        <p>梦见<span>{{dreamDialogData.title}}</span></p>
        <div class="content">
          <div v-for="(item,index) in dreamDialogData.list">{{item}}</div>
        </div>
      </div>
    </dream-dialog>
  </div>
</template>

<script>
import { Popup,Dialog } from 'vant'
import { split_dream,reveal_dream,reveal_dream_detail } from '@/assets/javaScript/_axios'
import ClassifyDropdownMenu from './ClassifyDropdownMenu'
import RevealLists from './RevealLists'
export default {
  name: 'AutoRevealResult',
  data () {
    return {
      content:'',
      words:[],
      popupShow:false,
      revealDreamList:[],
      firstClassifyId: 0,
      value:'',
      keyWordList:[],
      dreamDialogshow:false,
      dreamDialogData:{}
    }
  },
  props:{
    dreamId:{
      type:Number
    },
    dreamTitle: {
      type: String
    },
  },
  components: {
    AutoResultPopup:Popup,
    ClassifyDropdownMenu,
    RevealLists,
    dreamDialog:Dialog.Component
  },
  watch:{
    words(n){
      for(var i in this.words){
        if(n[i].wordType=='n'||n[i].wordType=='ns'||n[i].wordType=='LOC'){
          this.keyWordList.push(this.keyWordFilter(n[i].word))
        }
      }
      this.keyWordList = Array.from(new Set(this.keyWordList))
      console.log(this.keyWordList)  
    }
  },
  methods: {
    searchword(e){
      const word = this.keyWordFilter(e)
      this.popupShow = true
      this.value = word
      this.revealDream(word)
    },
    keyWordFilter(e){
      let str = e.replace(/[。|？|！|，|、|；|：|“|”|‘|’|（|）|《|》|〈|〉|【|】|『|』|「|」|﹃|﹄|〔|〕|…|—|～|﹏|￥|－ ＿|-]/g,"");
      str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
      return str;
    },
    revealDream(val,cid,full){
      reveal_dream({
        q:encodeURIComponent(val),
        cid:cid,
        full:0
      }).then(res=>{
        this.revealDreamList = res.data.result
        console.log(this.revealDreamList)
      })
    },
    firstClassifyClick(id){
      this.firstClassifyId = id;
      this.revealDream(this.value,id)
    },
    childClassifyClick(id){
      if( id == 0 ){
        revealDream(this.value,this.firstClassifyId);
        console.log("子类选全部，用父类的去查")
      }else{
        this.revealDream(this.value,id)
      }
    },
    listClick(id){
      reveal_dream_detail({
        id:id
      }).then(res=>{
        // console.log(res)
        this.dreamDialogData = res.data.result;
        this.dreamDialogshow = true;
      })
    },
    closeRevealBox(){
      this.dreamDialogshow = false;
    }
  },
  mounted() {
    if(this.dreamId != -1){
      split_dream({
        dreamId:this.dreamId
      }).then(res=>{
        this.words = res.data;
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
  .DreamKeyWordList{
    position: absolute;
    bottom: 0;
    overflow-x:auto; 
    width: 100%;
    background-image: linear-gradient(to bottom ,rgba(32,22,36,0) 0%,rgba(32,22,36,1) 60%);
  }
  .DreamKeyWordList>div{
    margin:1.6rem .2rem .7rem;
    white-space:nowrap
  }
  .DreamKeyWordList>div>span{
    padding:.12rem .23rem;
    border-radius: .24rem;
    background-color: #fce782;
    margin: 0 .06rem;
  }
  .DreamKeyWordList>div>span:last-child{
    margin-right: .3rem;
  }
  /*详情信息弹窗*/
  .reveal_box{
    padding: .58rem .46rem;
    background-color: #201624;
    position: relative;
  }
  .reveal_box .iconfont{
    position: absolute;
    right: .36rem;
    top: .36rem;
    color: #959595;
  }
  .reveal_box>p{
    font-size: .3rem;
    color: #b4a8d5;
    padding-bottom: .3rem;
  }
  .reveal_box>p>span{
    color: #fff;
  }
  .reveal_box .content{
    color: #959595;
    line-height: .44rem;
    overflow-y:auto;
    max-height: 7.2rem;
    font-size: .26rem;
  }
</style>