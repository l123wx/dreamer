<template>
  <div :class="['box',isSafari?'isSafari':'']">
    <search-header @SearchClick="SearchClick"/>
    <classify-dropdown-menu  ref="ClassifyMenu" @firstClassifyClick="firstClassifyClick" @childClassifyClick="childClassifyClick"/>
    <div :style="[isSafari?'height:calc(100vh - 2.4rem - 75px)':'height:calc(100vh - 2.4rem)']">
      <reveal-lists :lists="revealDreamList" 
                    @listClick="listClick" 
                    @searchWordClick="searchWordClick" 
                    @hotKeywordClick="hotKeywordClick"/>
    </div>
    
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
import SearchHeader from './components/SearchHeader'
import ClassifyDropdownMenu from './components/ClassifyDropdownMenu'
import RevealLists from './components/RevealLists'
import { Dialog } from 'vant';
import { reveal_dream_detail,select_reveal_dream,reveal_dream } from '@/assets/javaScript/_axios'
export default {
  name: 'KeyWorldReveal',
  data () {
    return {
      dreamDialogshow: false,
      revealDreamList: [],
      dreamDialogData:{},
      value:'',
      firstClassifyId:0,
      childClassifyId:0,
      isSafari:this.$globalData.isSafari,
    }
  },
  components: {
    SearchHeader,
    ClassifyDropdownMenu,
    RevealLists,
    dreamDialog:Dialog.Component
  },
  methods: {
    closeRevealBox() {
      this.dreamDialogshow = false;
    },
    listClick(e){
      reveal_dream_detail({
        id:e
      }).then(res=>{
        // console.log(res)
        this.dreamDialogData = res.data.result;
        this.dreamDialogshow = true;
      })
    },
    SearchClick(val){
      // console.log(this)
      this.$refs.ClassifyMenu.firstActiveIndex = 0;
      this.$refs.ClassifyMenu.firstTitle = '全部父类'
      this.value = val;
      this.revealDream(val)
    },
    revealDream(val,cid,full){
      if( val != '' ){
        reveal_dream({
          q:encodeURIComponent(val),
          cid:cid,
          full:0
        }).then(res=>{
          // console.log(res)
          this.revealDreamList = res.data.result
        })
      }
    },
    firstClassifyClick(id){
      this.firstClassifyId = id;
      this.revealDream(this.value,id)
    },
    childClassifyClick(id){
      if( id == 0 ){
        revealDream(this.value,this.firstClassifyId);
        // console.log("子类选全部，用父类的去查")
      }else{
        this.revealDream(this.value,id)
      }
    },
    searchWordClick(e){
      this.revealDreamList = e;
    },
    hotKeywordClick(word){
      this.revealDream(word)
    }
  },
  mounted() {
    // reveal_dream_detail({
    //   id:0
    // }).then(res=>{
    //   console.log(res)
    // })
    // select_reveal_dream({
      
    // }).then(res=>{
    //   console.log(res)
    // })

  }
}
</script>

<style lang="css" scoped>
  .box{
    background-color: #090614;
    height: 100vh;
    overflow: hidden
  }
  .box.isSafari{
    height: calc(100vh - 75px);
  }
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