<template>
  <div class="read_dream">
    <r-d-header />
    <r-d-content />
    <r-d-nav @click_btn3="" />
  </div>
</template>

<script>
import RDHeader from './components/Header'
import RDContent from './components/Content'
import RDNav from './components/Nav'
import { DatetimePicker,Popup,Picker,Dialog  } from 'vant'
import { add_dream } from '@/assets/javaScript/_axios.js'
export default {
  name: 'ReadDream',
  data () {
    return {
      // columnId:this.$route.params.columnId,
    }
  },
  components: {
    RDHeader,
    RDContent,
    RDNav
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
  .read_dream{
    background-color: #f2f2f2;
    position: relative;
    height: 100vh;
  }
</style>