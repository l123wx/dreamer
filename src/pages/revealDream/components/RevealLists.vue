<template>
  <div class="box">
    <div class="list" v-for="(item,index) in lists" :key="index" @click="listClick(item.id)">
      <div><span>梦见</span>{{item.title}}</div>
      <p>{{item.des}}</p>
    </div>
    <div v-show="!lists" class="list notFound">未查询到相关信息</div>
    <div class="list" style="background-color:transparent;"></div>
  </div>
</template>

<script>
export default {
  name: 'RevealLists',
  data () {
    return {

    }
  },
  props:{
    lists:{
      type:Array
    }
  },
  methods: {
    listClick(id){
      this.$emit('listClick',id);
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    max-height: 100%;
    overflow: auto !important;
  }
  .list{
    /*height: 1.37rem;*/
    background-color: #201624;
    margin-bottom: .2rem;
    padding: .35rem .28rem;
    font-size: .26rem;
    line-height: .3rem;
  }
  .list>div{
    color: #b4a8d5;
    margin-bottom: .17rem;
  }
  .list>div>span{
    display: inline-block;
    width: .75rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    padding:1px 0 0;
    border-radius: 100px;
    background-color: #b4a8d5;
    color: #fff;
    vertical-align: top;
    font-size: .21rem;
    position: relative;
    top: -.05rem;
    margin-right: .08rem;
  }
  .list p{
    color: #dadada;
  }
  .notFound{
    text-align: center;
    color: #909090;
  }
</style>