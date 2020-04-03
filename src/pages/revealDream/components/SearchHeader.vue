<template>
  <div class="header">
    <span class="iconfont" @click="backClick">&#xe650;</span>
    <div class="search">
      <form action="/">
        <van-search v-model="value" 
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    shape="round"
                    clearable
                    background="#090614">
          <template #label>
            <div class="search_label">梦见</div>
          </template>
        </van-search>
      </form>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  name: 'SearchHeader',
  data () {
    return {
      value:''
    }
  },
  components: {
    vanSearch: Search
  },
  methods: {
    onSearch(val) {
      this.$emit('SearchClick',val);
    },
    onCancel() {
      
    },
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
  }
  .header>.iconfont{
    display: inline-block;
    padding:0 .5rem;
    font-size:.4rem;
    line-height: 1.28rem;
  }
  .search{
    width: 100%;
    padding-right: .4rem;
  }
  .search_label{
    background-color:#b4a8d5;
    width:.92rem;
    margin-left:-.26rem;
    border-top-left-radius:999px;
    border-bottom-left-radius:999px;
    color: #fff;
    padding-left: 10px;
  }
  .search >>> .van-search__content{
    background-color: #201624;
  }
  .search >>> input{
    color: #959595;
  }
</style>