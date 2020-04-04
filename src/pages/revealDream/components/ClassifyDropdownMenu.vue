<template>
  <div class="dropdown">
    <dropdown-menu active-color="#b4a8d5">
      <dropdown-item :title="firstTitle">
        <div class="classify_box">
          <div v-for="item in firstClassify" 
               :key="item.id"
               :class="firstActiveIndex==item.id?'active':''"
               @click="firstClassifyClick(item.id,item.name)">{{item.name}}</div>
        </div>
      </dropdown-item>
      <dropdown-item :title="childTitle">
        <div class="classify_box">
          <div v-for="item in childClassify" 
               :key="item.id"
               :class="childActiveIndex==item.id?'active':''"
               @click="childClassifyClick(item.id,item.name)">{{item.name}}</div>
        </div>
      </dropdown-item>
    </dropdown-menu>
  </div>
</template>
<script>
import { get_dream_column } from '@/assets/javaScript/_axios'
import { DropdownMenu, DropdownItem } from 'vant';
import dreamFirstClassify from '@/assets/javaScript/dreamFirstClassify.json'
export default {
  name: 'ClassifyDropdownMenu',
  data () {
    return {
      firstTitle:'全部父类',
      childTitle:'全部子类',
      value1:'',
      value2:'',
      firstClassify:dreamFirstClassify.data.result,
      childClassify:[{fid:0,id:0,name:'全部子类'}],
      firstActiveIndex:0,
      childActiveIndex:0,
    }
  },
  components: {
    DropdownMenu,
    DropdownItem
  },
  methods: {
    firstClassifyClick(id,name){
      this.firstActiveIndex = id;
      this.firstTitle = name
      this.childActiveIndex = 0;
      this.childTitle = '全部子类'
      this.$emit('firstClassifyClick',id)
    },
    childClassifyClick(id,name){
      this.childActiveIndex=id;
      this.childTitle=name
      this.$emit('childClassifyClick',id)
    }
  },
  watch:{
    firstActiveIndex(e){
      if(e != 0){
        get_dream_column({
          fid:e
        }).then(res=>{
          let arr = res.data.reverse();
          arr.push({fid:0,id:0,name:'全部子类'});
          this.childClassify = arr.reverse();
          // console.log(this.childClassify)
        })
      }else{
        this.childClassify = [{fid:0,id:0,name:'全部子类'}];
        this.childActiveIndex = 0;
        this.childTitle = '全部子类'
      }
    }
  },
  mounted() {
    // console.log(dreamFirstClassify)
  }
}
</script>

<style lang="css" scoped>
  .dropdown >>> .van-dropdown-menu__title{
    color:#939393;
  }
  .dropdown >>> .van-dropdown-menu__title::after{
    content:'';
    border:1px solid #939393;
    width:10px;
    height:10px;
    border-top:none;
    border-right: none;
    margin-top: -.2rem;
    right: -.5rem;
  }
  .dropdown >>> .van-dropdown-menu__title--down::after{
    margin-top: -.04rem;
  }
  .dropdown >>> .van-dropdown-menu{
    background-color: transparent;
    color: #939393;
  }
  .dropdown >>> .van-ellipsis{
    position: relative;
    left: -.2rem;
  }
  .dropdown >>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
    border-width:0 0 1px;
    border-color: #434343;
  }
  .dropdown >>> .van-popup{
    overflow: hidden;
  }
  .classify_box{
    padding: .24rem 0 .04rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #201624;
  }
  .classify_box>div{
    width: 1.32rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    color:#626262;
    border-radius: .2rem;
    font-size: .24rem;
    margin: 0 .2rem .2rem
  }
  .classify_box>div.active{
    background-color: #b4a8d5;
    color:#fff;
  }
</style>