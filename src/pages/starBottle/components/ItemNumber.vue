<template>
  <div class="item_number">
    <div class="star">
      <div>
        <img src="@/assets/images/star.png" />
        <span class="number">{{starNbm>999999?'999999+':starNbm}}</span>
      </div>
      <div>
        <div>星辰</div>
        <div @click="getStar">获取</div>
      </div>
    </div>
    <div class="tickets">
      <div>
        <img src="@/assets/images/tickets.png" />
        <span class="number">{{ticketsNbm>999999?'999999+':ticketsNbm}}</span>
      </div>
      <div>
        <div>解梦券</div>
        <div @click="getTickets">兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemNumber',
  data () {
    return {

    }
  },
  props: {
    starNbm: {
      type: Number,
      default:0
    },
    ticketsNbm: {
      type: Number,
      default:0
    }
  },
  methods: {
    getStar() {
      this.$emit('getStar');
    },
    getTickets() {
      this.$emit('getTickets');
    }    
  }
}
</script>

<style scoped>
  .item_number{
    margin:.2rem auto 0;
    height:1.2rem;
    /*width: 6.1rem;*/
    border-radius: .3rem;
    background-image: linear-gradient(to right, rgb(159,211,222) 0%, rgb(182,165,213) 70%);
    padding: .4rem .4rem .3rem;
    display: flex;
    justify-content: space-between;
  }
  .item_number>div{
    width:2.8rem;
    position: relative;
  }
  .item_number>div>div:nth-child(1){
    height:.6rem;
    font-size: .48rem;
    line-height: .6rem;
    display: flex;
  }
  .item_number>div>div:nth-child(2){
    width:100%;
    display: flex;
    justify-content: space-between;
    font-size: .24rem;
    position: absolute;
    bottom: 0;
  }
  .item_number>div>div:nth-child(2)>div:nth-child(2){
    background-color: rgba(255,255,255,0.27);
    width: .88rem;
    height: .33rem;
    line-height: .33rem;
    text-align: center;
    border-radius: .5rem;
  }
  .star>div:nth-child(2)>div{
    margin-left: .08rem;
  }
  .star>div:nth-child(1)>img{
    height:.6rem;
    position: relative;
    top: -.05rem;
    margin-right: .28rem;
  }
  .tickets>div:nth-child(1)>img{
    height:.75rem;
    position: relative;
    top: -.07rem;
    margin-right: .28rem;
  }
</style>