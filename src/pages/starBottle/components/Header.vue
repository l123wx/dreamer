<template>
  <div class="header">
    <span class="iconfont" @click="back_click">&#xe650;</span>
    星星瓶
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
    back_click() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    height: 1.28rem;
    font-style: .36rem;
    line-height: 1.28rem;
    text-align: center;
    position: relative;
  }
  .header>.iconfont{
    position: absolute;
    left:0;
    font-size:.4rem;
    padding:0 .2rem;
  }
</style>