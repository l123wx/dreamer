<template>
  <div class="box">
    <div class="list" v-for="(item,index) in lists" :key="index" @click="listClick(item.id)">
      <div><span>梦见</span>{{item.title}}</div>
      <p>{{item.des}}</p>
    </div>
    <div v-show="lists == null" class="list notFound">未查询到相关信息
    </div>
    <div>
      <div>热门搜索</div>
      <span  v-for="(item,index) in searchWords" :key="index" @click="hotKeywordClick(item)">{{item}}</span>
    </div>
    <div class="list" style="background-color:transparent;"></div>
  </div>
</template>

<script>
import { hot_search_keys,reveal_dream } from '@/assets/javaScript/_axios'
export default {
  name: 'RevealLists',
  data () {
    return {
      searchWords:[
        '被狗咬',
        '棺材',
        '发大水',
        '蛇',
        '怀孕',
        '生孩子',
        '鱼'
      ]
    }
  },
  props:{
    lists:{
      type:Array
    }
  },
  methods: {
    listClick(id){
      this.$emit('listClick',id);
    },
    hotKeywordClick(word){
      this.$emit("hotKeywordClick",word);
    },
    revealDream(val,cid,full){
      reveal_dream({
        q:encodeURIComponent(val),
        cid:cid,
        full:0
      }).then(res=>{
        this.$emit('searchWordClick',res.data.result)
      })
    },
  },
  mounted(){
    // hot_search_keys({

    // }).then(res=>{
    //   console.log(res)
    // })
  }
}
</script>

<style lang="css" scoped>
  .box{
    max-height: 100%;
    overflow: auto !important;
  }
  .list{
    /*height: 1.37rem;*/
    background-color: #201624;
    margin-bottom: .2rem;
    padding: .35rem .28rem;
    font-size: .26rem;
    line-height: .3rem;
  }
  .list>div{
    color: #b4a8d5;
    margin-bottom: .17rem;
  }
  .list>div>span{
    display: inline-block;
    width: .75rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    padding:1px 0 0;
    border-radius: 100px;
    background-color: #b4a8d5;
    color: #fff;
    vertical-align: top;
    font-size: .21rem;
    position: relative;
    top: -.05rem;
    margin-right: .08rem;
  }
  .list p{
    color: #dadada;
  }
  .notFound{
    text-align: center;
    color: #909090;
    background-color: transparent;
  }
  .notFound+div{
    padding: .2rem .5rem .6rem;
    text-align: left;
    color: #909090;
  }
  .notFound+div>div{
    margin-bottom: .4rem;
  }
  .notFound+div>span{
    padding: .08rem .25rem;
    margin-right: .1rem;
    margin-bottom: .2rem;
    width: auto;
    background-color: #b4a8d5;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    display: inline-block;
    border-radius: 100px;
    color: #fff;
  }
</style>