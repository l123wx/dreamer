<template>
  <div>
    <!-- 背景图 -->
    <img class="bg" src="@/assets/images/dreamWorld/photo.jpg" />
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      梦世界
    </div>
    <div class="center">
      <div>
        消耗两颗星辰<img src="@/assets/images/star.png" />进行一次探索
      </div>
      <div class="button" @click="toDreamWorld">进入梦世界</div>
      <div>一次探索可以找到5页游记</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { get_user_info,enter_dream_world,read_dream } from '@/assets/javaScript/_axios'
export default {
  name: 'DreamWorldIndex',
  data () {
    return {

    }
  },
  methods: {
    toDreamWorld() {
      Dialog.confirm({
        message: '确定要花费两颗星辰进行一次探索吗'
      }).then(() => {
        enter_dream_world({
          pageNum:1,
          pageSize:5,
        }).then(res=>{
          if(res.msg == "星辰数量不足"){
            Dialog({message:'星辰数量不足'})
          }else{
            this.$router.push("DreamWorld");
            this.readDream(res.data.list)
          }
        }).catch(err=>{
        })
      }).catch(() => {
        
      });
      // Dialog({message:this.$globalData.token})
    },
    backClick(){
      // 从梦世界中退出后，星辰数量发生了改变，所以需要更新一下数据
      get_user_info({
        token:this.$globalData.token
      }).then(res=>{
        localStorage.setItem('userInfo',JSON.stringify(res.data));
        this.$router.push('/home')
      })
    },
    readDream(lists){
      let dreamIds = [];
      for(var item in lists){
        dreamIds.push(lists[item].id)
      }
      read_dream({
        'dreamIds[]':dreamIds
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  .bg{
    width:100%;
    position: absolute;
    bottom:0;
  }
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .center{
    position: relative;
    color:#fff;
    text-align: center;
    padding-top: 2rem;
  }
  .center img{
    height:.4rem;
    position: relative;
    top: -.04rem;
    margin:0 .02rem;
    font-size: .3rem;
  }
  .button{
    border:2px solid #fff;
    width:3.62rem;
    height:1.05rem;
    line-height: 1.05rem;
    margin:.44rem auto;
    border-radius: .18rem;
  }
  .button+div{
    font-size: .24rem;
    color:#a6a6a6;
  }
</style>
