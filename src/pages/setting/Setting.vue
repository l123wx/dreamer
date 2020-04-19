<template>
  <div :class="['setting',isSafari?'isSafari':'']">
    <setting-header :title="title" @backClick="backClick" />
    <div class="content">
      <!-- 设置页首页 -->
      <setting-index v-show="settingPage==0" 
                     @accountSettings="settingPage=1"
                     @feedback="settingPage=2"
                     @about="settingPage=3"/>

      <!-- 账号设置页 -->
      <account-settings v-show="settingPage==1" 
                        @phoneClick="settingPage=11"/>
        <!-- 修改手机号码页 -->
        <setting-phone v-show="settingPage==11" />
      
      <!-- 意见反馈 -->
      <feedback v-show="settingPage==2"/>

      <!-- 关于我们 -->
      <about-us v-show="settingPage==3" />

    </div>
  </div>
</template>

<script>
import SettingHeader from './components/Header'
import SettingIndex from './components/SettingIndex'
import AccountSettings from './components/AccountSettings'
import SettingPhone from './components/SettingPhone'
import Feedback from './components/Feedback'
import aboutUs from './components/aboutUs'
export default {
  name: 'Setting',
  data () {
    return {
      settingPage:0,
      title:"设置",
      presettingPage:[],
      pageIndex:0,
      isSafari:this.$globalData.isSafari,
    }
  },
  watch:{
    settingPage(n,o){
      if(n > o){
        this.presettingPage.push(o);
      }
    }
  },
  components:{
    SettingHeader,
    SettingIndex,
    AccountSettings,
    SettingPhone,
    Feedback,
    aboutUs
  },
  methods: {
    backClick(){
      if( this.settingPage == 0 ){
        this.$router.go(-1)
      }else{
        this.settingPage = this.presettingPage.pop();
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .setting{
    background-color:#090614;
    height:100vh;
  }
  .setting.isSafari{
    height:calc(100vh - 75px);
  }
  .content{
    height:calc(100vh - 1.28rem);
    overflow: auto;
  }
  .isSafari .content{
    height:calc(100vh - 1.28rem - 75px);
  }
</style>