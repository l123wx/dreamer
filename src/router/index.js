import Vue from 'vue'
import Router from 'vue-router'
// 欢迎页
import Index from '@/pages/index/Index'
// 登陆页
import LoginAndRegister from '@/pages/loginAndRegister/LoginAndRegister'
// 主页
import Home from '@/pages/home/Home'
// 梦境列表页
import DreamList from '@/pages/dreamList/DreamList'
// 创建&查看梦境页
import CreateDream from '@/pages/createDream/CreateDream'
//梦境创建完成页
import RecordFinish from '@/pages/createDream/RecordFinish'
// 星星瓶页
import StarBottle from '@/pages/starBottle/StarBottle'
// 梦世界
import DreamWorld from '@/pages/dreamWorld/DreamWorld'
import DreamWorldIndex from '@/pages/dreamWorld/DreamWorldIndex'
// 设置页
import Setting from '@/pages/setting/Setting'
// 解梦页
import RevealDreamIndex from '@/pages/revealDream/RevealDreamIndex'
import KeyWorldReveal from '@/pages/revealDream/KeyWorldReveal'
import AutoRevealDream from '@/pages/revealDream/AutoRevealDream'
import DreamRevealerIndex from '@/pages/revealDream/DreamRevealerIndex'
import RevealDreamLetter from '@/pages/revealDream/RevealDreamLetter'
import DreamRevealerIng from '@/pages/revealDream/DreamRevealerIng'
//系统公告
import Notice from '@/pages/notice/Notice'
import NoticeDetails from '@/pages/notice/NoticeDetails'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/loginAndRegister',
    name: 'LoginAndRegister',
    component: LoginAndRegister
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/DreamList',
    name: 'DreamList',
    component: DreamList
  }, {
    path: '/RecordFinish',
    name: 'RecordFinish',
    component: RecordFinish
  }, {
    path: '/StarBottle',
    name: 'StarBottle',
    component: StarBottle
  }, {
    path: '/DreamWorld',
    name: 'DreamWorld',
    component: DreamWorld
  }, {
    path: '/DreamWorldIndex',
    name: 'DreamWorldIndex',
    component: DreamWorldIndex
  }, {
    path: '/CreateDream',
    name: 'CreateDream',
    component: CreateDream
  }, {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  }, {
    path: '/RevealDreamIndex',
    name: 'RevealDreamIndex',
    component: RevealDreamIndex
  }, {
    path: '/KeyWorldReveal',
    name: 'KeyWorldReveal',
    component: KeyWorldReveal
  }, {
    path: '/AutoRevealDream',
    name: 'AutoRevealDream',
    component: AutoRevealDream
  }, {
    path: '/DreamRevealerIndex',
    name: 'DreamRevealerIndex',
    component: DreamRevealerIndex
  }, {
    path: '/RevealDreamLetter',
    name: 'RevealDreamLetter',
    component: RevealDreamLetter
  }, {
    path: '/DreamRevealerIng',
    name: 'DreamRevealerIng',
    component: DreamRevealerIng
  }, {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  }, {
    path: '/NoticeDetails',
    name: 'NoticeDetails',
    component: NoticeDetails
  }]
})
