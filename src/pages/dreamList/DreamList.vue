<template>
  <div :class="['box',isSafari?'isSafari':'',colorType]" :style="{'background-image':bgColor}">
    <dream-list-header :dreamtitle="title" />
    <dream-list-scroll :showType="showType" 
                       :ifLoadMore="false" 
                       @onRefresh="onRefresh" 
                       :isRefresh="true">
      <scroll-content :showType="showType" :lists="lists" />
    </dream-list-scroll>

    <dream-list-nav @click_btn1="sortClick"
                    @click_btn2="clockDream"
                    @click_btn3="viewClick"
                    @create_dream="create_dream"
                    :buttonShow="(lists && lists.length != 0)"/>
    
    <!-- 视图弹出菜单 -->
    <view-action-sheet v-model="ViewMenuShow" 
                  :actions="ViewActions" 
                  @select="viewOnSelect" 
                  cancel-text="取消"
                  :round="false"
                  description="视图形式"
                  close-on-click-action/>
    <!-- 排序方式弹出菜单 -->
    <sort-action-sheet v-model="SortMenuShow" 
                  :actions="SortActions" 
                  @select="sortOnSelect" 
                  cancel-text="取消"
                  :round="false"
                  description="排序方式"
                  close-on-click-action/>

    <!-- 隐藏&公开 弹出菜单 -->
    <clock-action-sheet v-model="ClockMenuShow" 
                  :actions="ClockActions" 
                  @select="clockOnSelect" 
                  cancel-text="取消"
                  :round="false"
                  description="隐私设置"
                  close-on-click-action/>
  </div>
</template>

<script>
let that;
import DreamListHeader from './components/Header'
import DreamListNav from './components/Nav'
import DreamListScroll from '@/components/Scroll'
import { Notify,ActionSheet,Dialog } from 'vant';
import ScrollContent from './components/Content' 
import { locked_dream_list,get_dream_list } from '@/assets/javaScript/_axios.js'
export default {
  name: 'DreamList',
  components: {
    DreamListHeader,
    DreamListNav,
    DreamListScroll,
    ViewActionSheet:ActionSheet,
    SortActionSheet:ActionSheet,
    ClockActionSheet:ActionSheet,
    ScrollContent
  },
  data () {
    that = this;
    return {
      isSafari:this.$globalData.isSafari,
      columnId: 0,
      lists:[],
      bgColor: '',
      title: '',
      colorType: '',
      showType: 0,//视图形式 0：卡片视图 1：列表视图
      ViewMenuShow: false,
      SortMenuShow: false,
      ClockMenuShow: false,
      ViewActions: [
        { name: '卡片视图' },
        { name: '列表视图' }
      ],
      SortActions: [
        { name: '按时间正序排序' },
        { name: '按时间倒序排序' },
      ],
      ClockActions: [
        { name: '全部隐藏' },
        { name: '全部公开' },
      ],
    }
  },
  methods: {
    sortOnSelect(item) { //排序菜单点击
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      // this.show = false;
      // Toast(item.name);
      if(item.name == "按时间倒序排序"){
        const newArr = this.lists.sort((a, b) => a.dreamTime > b.dreamTime ? 1 : -1)
        this.lists = newArr;
      }else{
        const newArr = this.lists.sort((a, b) => a.dreamTime < b.dreamTime ? 1 : -1)
        this.lists = newArr;
      }
      Notify({type: 'success',message: '已'+item.name});
    },
    viewOnSelect(item) { //视图设置
      if(item.name == "卡片视图"){
        this.showType = 0
      }else{
        this.showType = 1
      }
      Notify({ type: 'success', message: '已经切换为'+item.name});
    },
    // 隐藏与公开菜单选择
    clockOnSelect(item){
      if(item.name == "全部隐藏"){
        // console.log("全部锁定")
        Dialog.confirm({
          message: '确定要隐藏全部的梦吗',
         }).then(res=>{
            locked_dream_list({
              columnId:that.columnId,
              type:0
            }).then(res=>{ //隐藏修改成功
              //更新数据
              get_dream_list({ 
                columnId: that.columnId
              }).then(res=>{
                that.lists = res.data;
                // console.log(res)
                //成功提醒
                Notify({type:'success',message: '已将所有的梦隐藏'});
              })
            })
         })
      }else{
        // console.log("全部公开")
        Dialog.confirm({
          message: '确定要公开全部的梦吗',
        }).then(res=>{
          locked_dream_list({
            columnId:that.columnId,
            type:1
          }).then(res=>{ //公开修改成功
            //更新数据
            get_dream_list({ 
              columnId: that.columnId
            }).then(res=>{
              that.lists = res.data;
              // console.log(res)
              //成功提醒
              Notify({type: 'success',message: '已将所有的梦公开',});
            })
          })
        })
      }
    },
    sortClick() { //排序按钮
       this.SortMenuShow = true;
    },
    clockDream() { //锁定&公开按钮
      this.ClockMenuShow = true;
    },
    viewClick() { //视图切换按钮
       this.ViewMenuShow = true;
    },
    // 点击创建梦的按钮
    create_dream(){
      this.$router.push({name:'CreateDream',params:{columnId:this.columnId,type:'create'}})
    },
    // 刷新
    onRefresh(){
      get_dream_list({
        columnId:this.columnId
      }).then(res=>{
        // console.log(res)
        if(res.success == true){
          if( res.data == '该栏目下还没有发布梦境'){
            res.data = []
          }
          this.lists = res.data;
          let obj = JSON.parse(localStorage.getItem('dreamListData'));
          obj.lists = res.data;
          localStorage.setItem('dreamListData',JSON.stringify(obj));
          this.$children[1].isRefresh = false;
        }
      })
    }
  },
  mounted(){
    // console.log(Object.keys(this.$route.params).length)
    if( Object.keys(this.$route.params).length ){
      const routerData = this.$route.params
      this.bgColor = routerData.bgColor;
      this.title = routerData.title;
      this.colorType = routerData.colorType;
      this.lists = routerData.lists;
      this.columnId = routerData.index+1;
      localStorage.setItem('dreamListData',JSON.stringify({
        bgColor:this.$route.params.bgColor,
        title:this.$route.params.title,
        colorType:this.$route.params.colorType,
        lists:this.$route.params.lists,
        columnId:this.$route.params.index+1
      }));
    }else{
      const data = JSON.parse(localStorage.getItem('dreamListData'));
      this.bgColor = data.bgColor;
      this.title = data.title;
      this.colorType = data.colorType;
      this.lists = data.lists;
      this.columnId = data.columnId;
    }
    this.onRefresh();
  }
}
</script>

<style scoped>
  .box{
    height:100vh;
  }
  .box.isSafari{
    height:calc(100vh - 75px);
  }
  .scroll{
    height: calc(100vh - 1.04rem - 1.28rem);
  }
  .isSafari .scroll{
    height: calc(100vh - 1.04rem - 1.28rem - 75px);
  }
  .white{
    color:#fff;
  }
  .black{
    color:#4d5181;
  }
</style>