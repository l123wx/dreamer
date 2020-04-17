<template>
  <div class="auto_content">
    <div class="head">
      <span>请选择一个梦境</span>
      <span>
        <span v-show="!sortType" @click="upSortClick" class="iconfont">&#xe63f;</span>
        <span v-show="sortType" @click="downSortClick" class="iconfont">&#xe63e;</span>
      </span>
    </div>
    <ul class="lists">
      <li v-for="item in lists" 
          :class="[listActiveIndex==item.id?'active':'']" 
          @click="listClick(item.id,item.title)"
          :data-id="item.id">
        <div>
          <span v-show="listActiveIndex==item.id" class="iconfont">&#xe651;</span>
          <span v-show="listActiveIndex!=item.id" class="iconfont">&#xe653;</span>
        </div>
        <p>{{item.title}}</p>
        <!-- <span></span> -->
      </li>
    </ul>
    <div class="button" @click="startReveal">
      <span class="iconfont">&#xe62d;</span>
      开始解梦
    </div>
  </div>
</template>

<script>
import { select_reveal_dream } from '@/assets/javaScript/_axios'
export default {
  name: 'AutoRevealContent',
  data () {
    return {
      sortType:0, 
      listActiveIndex:-1,
      lists:[]
    }
  },
  methods: {
    upSortClick(){
      const newArr = this.lists.sort((a, b) => a.dreamTime > b.dreamTime ? 1 : -1)
      this.lists = newArr;
      this.sortType = 1;
    },
    downSortClick(){
      const newArr = this.lists.sort((a, b) => a.dreamTime < b.dreamTime ? 1 : -1)
      this.lists = newArr;
      this.sortType = 0;
    },
    startReveal(){
      this.$emit('startReveal')
    },
    // 当每条栏目背点击时触发
    listClick(id,title) {
      this.listActiveIndex = id;
      this.$emit('listClick',id,title)
    }
  },
  mounted() {
    select_reveal_dream({

    }).then(res=>{
      // console.log(res);
      this.lists = res.data;
    })
  }
}
</script>

<style lang="css" scoped>
  .auto_content{
    height: 100%;
    overflow: hidden;
  }
  .auto_content .head{
    padding: .36rem .3rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: .3rem;
  }
  .auto_content .head .iconfont{
    font-size: .56rem;
    position: relative;
    top: -.16rem;
  }
  .auto_content .lists{
    color: #fff;
    height: calc(100vh - 4.6rem);
    overflow: auto;
  }
  .auto_content .lists>li{
    height: .74rem;
    line-height: .74rem;
    padding: 0 .3rem;
  }
  .auto_content .lists>li.active{
    color: #b4a8d5;
  }
  .auto_content .lists>li>div{
    display: inline-block;
    margin-right: .1rem;
  }
  .auto_content .lists>li>div .iconfont{
    font-size: .48rem;
  }
  .auto_content .lists>li>p{
    display: inline-block;
    vertical-align: top;
    max-width: 5.4rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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
</style>