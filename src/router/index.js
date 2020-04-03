import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import LoginAndRegister from '@/pages/loginAndRegister/LoginAndRegister'
import Home from '@/pages/home/Home'
import DreamList from '@/pages/dreamList/DreamList'
import StarBottle from '@/pages/starBottle/StarBottle'
import DreamWorld from '@/pages/dreamWorld/DreamWorld'
import DreamWorldIndex from '@/pages/dreamWorld/DreamWorldIndex'
import CreateDream from '@/pages/createDream/CreateDream'
import ReadDream from '@/pages/readDream/ReadDream'
import RecordFinish from '@/pages/createDream/RecordFinish'
import Setting from '@/pages/setting/Setting'
import RevealDreamIndex from '@/pages/revealDream/RevealDreamIndex'
import KeyWorldReveal from '@/pages/revealDream/KeyWorldReveal'
import AutoRevealDream from '@/pages/revealDream/AutoRevealDream'
import DreamRevealerIndex from '@/pages/revealDream/DreamRevealerIndex'
import RevealDreamLetter from '@/pages/revealDream/RevealDreamLetter'
import DreamRevealerIng from '@/pages/revealDream/DreamRevealerIng'


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
    path: '/ReadDream',
    name: 'ReadDream',
    component: ReadDream
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
  }]
})
