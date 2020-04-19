<template>
  <div class="setting_index">
    <div class="user_info">
      <div class="avater">
        <uploader :after-read="afterRead" :max-count="1" max-size="3145728" @oversize="oversize">
          <img :src="userInfo.headPhotoUrl" />
        </uploader>
      </div>
      <div>
        <div class="username">{{userInfo.username}}</div>
        <div class="motto1" @click="mottoType=1" v-show="!mottoType">
          <div class="input">{{userInfo.motto}}</div>
          <span class="iconfont">&#xe655;</span>
        </div>
        <div class="motto2" v-show="mottoType">
          <input maxlength="13" type="text" v-model="userInfo.motto" />
          <span class="iconfont" @click="mottoFinish">&#xe606;</span>
        </div>
      </div>
    </div>
    <ul>
      <li @click="accountSettings">
        账号设置
        <span class="iconfont">&#xe65b;</span>
        <span class="iconfont">&#xe650;</span>
      </li>
    </ul>

<!--     <ul>
      <li @click="this.$emit('click')">
        账号设置
        <span class="iconfont">&#xe65b;</span>
        <span class="iconfont">&#xe650;</span>
      </li>
    </ul> -->

    <ul>
      <li @click="feedback">
        意见反馈
        <span class="iconfont">&#xe65d;</span>
        <span class="iconfont">&#xe650;</span>
      </li>
      <li @click="about">
        关于我们
        <span class="iconfont">&#xe656;</span>
        <span class="iconfont">&#xe650;</span>
      </li>
    </ul>
    <ul>
      <li @click="logOut">
        退出登录
        <span class="iconfont">&#xe659;</span>
        <span class="iconfont">&#xe650;</span>
      </li>
    </ul>
    
    <!-- 头像裁剪弹窗 -->
    <avatar-dialog v-model="avaterDialogShow" show-cancel-button @confirm="avatarConfirm">
      <div class="avatar-dialog">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.outputsize"
          :outputType="option.outputType"
          :info="false"
          :fixedBox="option.fixedBox"
          :autoCrop="option.autoCrop"
          :canMoveBox="false"
          style="position:absolute;top:0;left:0"/>
      </div>
    </avatar-dialog>
  </div>
</template>

<script>
const Base64 = require('js-base64').Base64
import { Dialog,Uploader,Notify } from 'vant'
// 头像裁剪组件来源：https://github.com/xyxiao001/vue-cropper
import { VueCropper }  from 'vue-cropper'
import { exit_login,change_user_motto,upload_head_photo_by_base64,get_user_info } from '@/assets/javaScript/_axios'
export default {
  name: 'SettingIndex',
  data () {
    return {
      userInfo:this.$globalData.userInfo,
      mottoType: 0, // 座右铭状态 0:展示 1：修改中
      avaterDialogShow: false,
      option: {
        img: '',//裁切图片的地址
        outputSize: 0.6,//裁剪生成图片的质量 0.1-1
        outputType: 'jpge',//裁剪生成图片的格式
        fixedBox: true,//固定截图框大小 不允许改变
        canMoveBox: false,//截图框能否拖动
        autoCrop:true,//是否默认生成截图框
      },
    }
  },
  components:{
    Uploader,
    VueCropper,
    avatarDialog: Dialog.Component,
  },
  methods: {
    // 修改完成
    mottoFinish() {
      change_user_motto({
        motto:this.userInfo.motto
      }).then(res=>{
        // let obj = JSON.parse(localStorage.getItem('userInfo'))
        // obj.motto = this.userInfo.motto;
        // localStorage.setItem('userInfo',JSON.stringify(obj));
        this.$globalData.userInfo.motto = this.userInfo.motto
        this.mottoType = 0;
      })
    },
    // 上传完文件，弹出裁剪弹窗
    afterRead(e) {
      this.option.img = e.content;
      this.avaterDialogShow = true;
      // this.avatarType = e.type;
      // console.log(e.content)
    },
    //图片大小超出5m
    oversize(){
      Dialog({message:'图片大小不得超出3M'})
    },
    // 点击裁剪弹窗的确认按钮
    avatarConfirm(){
      this.$refs.cropper.getCropData((data) => {
        //裁切生成的base64图片
        // console.log(data);
        upload_head_photo_by_base64({
          base64Data:data
        }).then(res=>{
          // console.log(res)
          if( res.msg == '头像修改成功' ){
            Notify({ type: 'success', message: '头像修改成功'});
            this.userInfo.headPhotoUrl = res.data;
            this.$globalData.userInfo = this.userInfo;
            // localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
          }
        }).catch( err=>{
          Notify({type:'fail',message:'修改失败，请重试'})
        })
      })
    },
    //账号设置
    accountSettings() {
      // console.log("accountSettings")
      this.$emit('accountSettings')
    },
    //意见反馈
    feedback() {
      // console.log("feedback")
      this.$emit('feedback')
    },
    //关于我们
    about() {
      // console.log("about")
      this.$emit('about')
    },
    // 退出登录
    logOut(){
      Dialog.confirm({
        message: '确认退出吗'
      }).then(() => {
        exit_login({})
        .then(res=>{
          localStorage.removeItem('token');
          this.$router.replace({path: '/LoginAndRegister'});
          location.reload();
        })
      }).catch(() => {
        // on cancel
      });
    }
  },
  mounted(){
    // this.userInfo = this.$globalData.userInfo;
    // console.log(this.userInfo)
    get_user_info({
      token:this.$globalData.token
    }).then(res=>{
      this.$globalData.userInfo = res.data;
      this.userInfo = res.data;
    })
  }
}
</script>

<style lang="css" scoped>
  .setting_index{

  }
  .user_info{
    height: 2.15rem;
    width: 6.9rem;
    margin: .16rem auto .86rem;
    background-color: #201624;
    border-radius: .33rem;
    display: flex;
    display: flex;
    align-items: center;
  }
  /*头像*/
  .avater{
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    margin: 0 .4rem;
    overflow: hidden;
  }
  .user_info img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border:none;
    display: inline-block;
  }
  .user_info .username{
    font-size: .36rem;
    color: #d2d2d2;
    margin-bottom: .15rem;
  }
  .motto1{
    font-size: .24rem;
    color: #707070;
    padding: 0 .4rem 0 0;
    position: relative
  }
  .motto1>.input{
    margin: .12rem 0 .08rem;
    background-color: transparent;
    max-width: 3.2rem;
    display: inline-block;
  }
  .motto1>span{
    position: absolute;
    right: 0;
    top: .05rem;
    color: #b4a8d5;
  }
  .motto2{

  }
  .motto2>input{
    border:1px solid #707070;
    border-radius: .20rem;
    background-color: transparent;
    color: #707070;
    padding: .08rem .25rem;
    line-height: .26rem;
    font-size: .24rem;
    width: 3.16rem;
  }
  .motto2>span{
    color: #767676;
    position: relative;
    top: .06rem;
    left: .14rem
  }
  ul{
    margin-bottom: .27rem;
  }
  li{
    height: .82rem;
    line-height: .82rem;
    color: #bfbfbf;
    background-color: #201624;
    position: relative;
    padding-left: 1.02rem;
    font-size: .28rem;
    transition: background-color .3s;
  }
  li:active{
    background-color: #483c4d;
  }
  li>.iconfont{
    position: absolute;
    /*font-size: */
    color: #919191;
  }
  li>.iconfont:nth-child(1){
    left: .3rem;
    font-size: .42rem;
  }
  li>.iconfont:nth-child(2){
    right: .3rem;
    display: inline-block;
    transform: rotate(180deg);
  }
  .avatar-dialog{
    width: 100%;
    position: relative;
  }
  .avatar-dialog::before{
    content: "";
    padding-top: 100%;
    display: block;
  }
</style>