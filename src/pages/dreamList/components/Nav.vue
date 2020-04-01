<template>
  <div class="nav">
    <div v-if="buttonShow">
      <span class="iconfont" @click="click_btn1">&#xe672;</span>
      <span class="iconfont" @click="click_btn2">&#xe639;</span>
      <span class="iconfont" @click="click_btn3">&#xe635;</span>
    </div>
    <span class="iconfont" @click="click_write">&#xe62c;</span>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {

    }
  },
  methods: {
    click_btn1() {
      this.$emit("click_btn1");
    },
    click_btn2() {
      this.$emit("click_btn2");
    },
    click_btn3() {
      this.$emit("click_btn3");
    },
    click_write() {
      // console.log("writing!")
      this.$emit("create_dream");
    },
  },
  props:{
    buttonShow:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .nav{
    height:1.04rem;
    background-color: rgba(0, 0, 0, 0.5);
    color:#fff;
    position: relative;
  }
  .nav>div{
    display: flex;
    margin-right: 1.7rem;
  }
  .nav>div>span{
    display:inline-block;
    flex:1;
    font-size: .5rem;
    text-align: center;
    height:1.04rem;
    line-height:1.04rem;
  }

  .nav>span{
    position: absolute;
    display: inline-block;
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.14rem;
    text-align: center;
    border-radius: 50%;
    border:1px solid #fff;
    background-image: linear-gradient(to top, rgb(159,211,222) 0%, rgb(182,165,213) 100%);
    position: absolute;
    right: .4rem;
    top: -.6rem;
    font-size: .6rem;
  }
</style>

