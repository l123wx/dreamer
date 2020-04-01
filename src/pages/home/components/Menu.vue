<template>
  <div class="menu_box">
    <!-- 蒙版 -->
    <menu-overlay :show="show" @overlayClick="menuClose"/>
    <div :class="['menu',show?'show':'']">
      <div class="menu_head">
        <span class="iconfont menu_close_icon"
          @click="menuClose">
          &#xe622;
        </span>
      </div>
      <ul>
        <li v-for="(item,index) in menuLists" 
            :key="index"
            @click="menuListClick"
            :data-index="index">
          <span class="iconfont list_icon" v-html="item.iconCode"></span>
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuOverlay from '@/components/Overlay'
export default {
  name: 'Menu',
  components: {
    MenuOverlay
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    menuLists: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  methods: {
    menuClose() {
      this.$emit('menuClose');
    },
    menuListClick(e) {
      const index = e.target.dataset.index;
      // this.$router.push(this.menuLists[index].path);
      this.$emit('menuListClick',index);
    }
  }
}
</script>

<style scoped>
  .menu_box{
    position: absolute;
    top:0;
    height: 100vh;
    width: 100%;
  }
  .menu{
    position: absolute;
    height: 100vh;
    width:3.76rem;
    top: 0;
    left: -3.76rem;
    background-image: linear-gradient( to top, rgb(182,165,213) 0%, rgb(159,211,222) 100%);
    z-index: 6;
    transition: left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .menu.show{
    left: 0;
    box-shadow: 3.998px 0.14px 29px 0px rgba(6, 0, 1, 0.38);
  }
  .menu_head{
    padding: .34rem;
    text-align: right
  }
  .menu_close_icon{
    font-size: .48rem;
    color:#fff;
  }

  .menu>ul{
    width:100%;
  }
  .menu>ul>li{
    list-style: none;
    color: #fff;
    font-size: .3rem;
    height: .85rem;
    line-height: .85rem;
    padding-left: .56rem;
    transition: background-color .5s;
    display: flex;
  }
  .list_icon{
    display: inline-block;
    width:.44rem;
    font-size: .4rem;
    line-height: .85rem;
    margin-right: .23rem;
  }
  .menu>ul>li:active{
    background-color: rgba(255, 255, 255 ,0.4);
  }
</style>

