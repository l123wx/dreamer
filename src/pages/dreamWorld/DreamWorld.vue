<template>
  <div class='box'>
    <!-- 0:未收藏 1：已收藏 -->
    <dream-world-header :stared='stared' 
                        @admireClick="admireClick"
                        @backClick="backClick"/> 
    <!-- 留言弹窗 -->
    <dream-world-dialog v-model="admireShow"
                        :showCancelButton="false"
                        :showConfirmButton="false"
                        style="background-color:#b4a8d5;color:#fff;display: flex;flex-direction: column;">
      <template v-slot:title>
        <div style="margin:-.2rem 0 .2rem">赠送星辰并留言</div>
      </template>
      <template v-slot:default>
        <div class="leaveWord">
          <field v-model="value"
                 type="textarea" 
                 placeholder="请输入留言"
                 :autosize="true"
                 :autofocus="true"
                 :maxlength="150"
                 :show-word-limit="true"/>
        </div>
        <div class="button">
          <div @click="leaveWordCancel">取消</div>
          <div @click="leaveWordConfirm">确定</div>
        </div>
      </template>
    </dream-world-dialog>

    <dream-world-swiper :lists="lists"
                        @addDream="addDream"
                        @indexChange="indexChange"
                        @evaluate="evaluate"/>
  
  </div>
</template>
 
<script>
import DreamWorldHeader from './components/Header'
import DreamWorldSwiper from './components/Swiper'
import { Dialog,Field,Notify,Toast } from 'vant'
import { enter_dream_world,send_message,send_comment } from '@/assets/javaScript/_axios.js'
import axios from 'axios'
export default { 
  name: 'DreamWorld',
  data () {
    return {
      admireShow: false,
      value:'', //留言内容
      lists:[],
      pageNum: 1, 
      addIf: 1, //是否还能继续请求梦
      dreamIndex:0, 
      stared:0, //头部星星图标是否为已发送留言 -1:不显示 0:未收藏 1:已收藏
    }
  },
  components: {
    DreamWorldHeader,
    DreamWorldDialog: Dialog.Component,
    Field,
    DreamWorldSwiper
  },
  methods: {
    // 退出梦世界
    backClick(){
     Dialog.confirm({
        message: '退出梦就跑掉咯',
        confirmButtonText:'退出'
      }).then(() => {
        this.$router.go(-1);
        localStorage.removeItem('dreamWorldData');
      }).catch((err) => {
        console.log(err)
      });
    },
    //点击未留言的星星，弹出留言窗口
    admireClick() {
      this.admireShow = true;  
    },
    // 确定留言
    leaveWordConfirm(){
      if(this.value == ''){
        Dialog.alert({
          message: '内容不能为空！'
        }).then(() => {});
      }else{
        // 弹窗提醒
        Dialog.confirm({
          message: '确定要花费两颗星辰给对方留言吗'
        }).then(() => {
          send_message({
            dreamId:this.lists[this.dreamIndex].id,
            content:this.value,
            dreamUserId:this.lists[this.dreamIndex].userId,
          }).then(res=>{
            this.admireShow = false;
            //留言成功后更新星星状态
            this.lists[this.dreamIndex].isSendMsg = 1;
            this.checkStarType(this.dreamIndex)
            this.value = ''
            Toast.success('留言成功');
          })
        }).catch((err) => {
            console.log(err)
        });
      }
    },
    // 取消留言
    leaveWordCancel() {
      this.admireShow = false;
    },
    //滑动梦的时候，触发indexChange
    indexChange(e){
      this.dreamIndex = e;
    },
    //点击最后的继续探梦按钮
    addDream(){
      this.pageNum ++;
      if(this.addIf == 0){
        Dialog.alert({
          message: '哦豁！已经没有梦啦，下次再来吧'
        }).then(() => {});
      }else{
        this.loadDream();
      }
    },
    // 点击下面感想中的选项 index从0开始
    evaluate(index){
      console.log(index)
      // 发送评论请求
      send_comment({
        dreamId:this.lists[this.dreamIndex].id,
        type:index*1+1
      }).then(res=>{
        console.log(res.data)
        console.log(this.lists)
        //评论成功，更新数据
        if(res.status == 0)
        res.data.isSendComment = 1;
        console.log(res.data)
        Object.assign(this.lists[this.dreamIndex],res.data);
        this.lists[this.dreamIndex].chooseComment = index*1+1;
        console.log(this.lists)
      })
    },
    //检查星星的状态 index是当前梦的index
    checkStarType(index){
      if(index == this.lists.length)
        this.stared = -1;
      else{
        this.stared = this.lists[index].isSendMsg;
      }
    },
    // 请求梦的方法
    loadDream(){
      enter_dream_world({
        pageNum:this.pageNum,
        pageSize:5,
      }).then(res=>{
        console.log(res)
        if( this.lists.length ){
          const newArr = [ ...this.lists, ...res.data.list] //合并两个数组
          this.lists = newArr;
        }else{
          this.lists = res.data.list
        }
        if(res.data.nextPage == res.data.lastPage || !res.data.hasNextPage){
          this.addIf = 0;
        }
        this.checkStarType(this.dreamIndex);
        res.data.list = this.lists;
        localStorage.setItem('dreamWorldData',JSON.stringify(res.data));
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    // 加载梦数据
    if(!localStorage.getItem('dreamWorldData') || !Object.keys(JSON.parse(localStorage.getItem('dreamWorldData'))).length){
      this.loadDream()
    }else{
      this.lists = JSON.parse(localStorage.getItem('dreamWorldData')).list
      this.pageNum = JSON.parse(localStorage.getItem('dreamWorldData')).pageNum
    } 
  },
  watch:{
    dreamIndex(e){
      this.checkStarType(e)
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    background-color: #090614;
    height:100vh;
    overflow: hidden;
    touch-action: pan-y; 
  }
  .leaveWord{
    background-color: #201624;
  }
  .leaveWord>div{
    background-color: transparent;
    color:#9c9c9c;
    /*font-size: .24rem;*/
  }
  .leaveWord+div{
    background-color: #201624;
    padding:.3rem .35rem;
    display: flex;
    justify-content: flex-end;
    border:none;
  }
  .leaveWord+div>div{
    display: inline-block;
    color:#b2b2b2;
    font-size: .3rem;
  }
  .leaveWord+div>div:nth-child(2){
    color:#b4a8d5;
    margin-left: .4rem;
  }
</style>