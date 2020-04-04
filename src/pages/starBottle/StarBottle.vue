<template>
  <div class="box">
    <star-bottle-header />
    <star-bottle-item-number @getTickets="getTickets" 
                             @getStar="getStar"
                             :starNbm="starNbm"
                             :ticketsNbm="ticketsNbm"/>
    <star-bottle-content :getLists="getLists" :sendLists="sendLists" @onRefresh="onRefresh"/>

    <star-bottle-popup v-model="getStarPopup"
                       position="bottom"
                       closeable
                       round
                       class="get_Star_popup">
      <div class="title">获取星辰</div>
      <div class="center">
        <div class="getStar_task">
          <div>
            <div>每日登陆</div>
            <div>+2星辰</div>
          </div>
          <div class="active">已签到</div>
        </div>
        <div class="getStar_task">
          <div>
            <div>发布梦境游记</div>
            <div>+2星辰</div>
          </div>
          <div @click="toCreateDream">去发布</div>
        </div>
      </div>
    </star-bottle-popup>
    <!-- 兑换解梦券 -->
    <star-bottle-popup v-model="getTicketsPopup"
                       position="bottom"
                       closeable
                       round
                       class="get_tickets_popup">
      <div class="title">兑换解梦券</div>
      <div class="center">
        <div class="tip">
          兑换<span>1</span>张解梦券
        </div>
        <div class="starNum">
          <div>需支付：<span>1000星辰</span></div>
          <div>我的：{{starNbm}}星辰</div>
        </div>
      </div>
      <div class="button" @click="exchangeTickets">兑换</div>
    </star-bottle-popup>
  </div>
</template>

<script>
import StarBottleHeader from './components/Header'
import StarBottleItemNumber from './components/ItemNumber'
import StarBottleContent from './components/Content'
import { stars_to_ticket,get_user_info,receive_message,select_send_message } from '@/assets/javaScript/_axios'
import { Popup,Dialog } from 'vant'
export default {
  name: 'StarBottle',
  components: {
    StarBottleHeader,
    StarBottleItemNumber,
    StarBottleContent,
    StarBottlePopup:Popup
  },
  data () {
    return {
      getStarPopup: false,
      getTicketsPopup: false,
      starNbm:0,
      ticketsNbm:0,
      sendLists:[],
      getLists:[]
    }
  },
  methods: {
    getTickets() {
      this.getTicketsPopup = true
    },
    getStar() {
      this.getStarPopup = true
    },
    // 兑换解梦券
    exchangeTickets(){
      Dialog.confirm({
        message: '确定要花费1000星辰兑换1张解梦券吗'
      }).then(() => {
        stars_to_ticket({
        }).then(res=>{
          if(res.msg == '星辰不足，无法兑换'){
            Dialog({ message: res.msg });
          }else{
            Dialog({ message: '兑换成功' });
            this.$globalData.userInfo = res.data;
            this.ticketsNbm = res.data.ticketCount;
            this.starNbm = res.data.starsCount;            
          }
        })
      }).catch(() => {
        // on cancel
      });
    },
    toCreateDream() {
      this.$router.push('/home');
    },
    loadReceiveMessage(e){
      receive_message({
      }).then(res=>{
        // console.log(res)
        this.getLists = res.data;
        if(e){
          e.$children[0].isRefresh = false;
          e.$children[1].isRefresh = false;
        }
      })
    },
    loadSendMessage(e){
      select_send_message({})
      .then(res=>{
        // console.log(res)
        this.sendLists = res.data;
        if(e){
          e.$children[0].isRefresh = false;
          e.$children[1].isRefresh = false;
        }
      })
    },
    onRefresh(e){
      this.loadReceiveMessage(e);
      this.loadSendMessage(e)
    }
  },
  mounted() {
    this.starNbm = this.$globalData.userInfo.starsCount;
    this.ticketsNbm = this.$globalData.userInfo.ticketCount;
    this.loadReceiveMessage();
    this.loadSendMessage();
  }
}
</script>

<style scoped>
  .box{
    height: 100vh;
    overflow: hidden;
    background-color: #090614;
    color:#fff;
    padding: 0 .32rem;
  }
  .get_Star_popup,.get_tickets_popup{
    height:5rem;
    background-color:#201624;
  }
  .title{
    padding: .4rem .35rem;
    font-size: .24rem;
    color: #959595;
  }
  .center{
    padding:.3rem .66rem;
  }
  .get_tickets_popup .tip{
    font-size: .26rem;
    color: #bfbfbf;
  }
  .get_tickets_popup .tip>span{
    display: inline-block;
    border-bottom: 1px solid #b4a8d5;
    color: #b4a8d5;
    margin:0 .1rem;
    position: relative;
    top:-.02rem;
  }
  .get_tickets_popup .starNum{
    display: flex;
    justify-content: space-between;
    font-size: .3rem;
    margin-top: .6rem;
  }
  .get_tickets_popup .starNum span{
    color: #b4a8d5;
  }
  .get_tickets_popup .starNum>div:nth-child(2){
    color:#626262;
    font-size: .21rem;
  }
  .get_tickets_popup .button{
    height:.76rem;
    /*width:6.88rem;*/
    background-color: #b4a8d5;
    line-height: .76rem;
    color:#fff;
    border-radius: .17rem;
    text-align: center;
    margin: .5rem .35rem;
    font-size: .3rem;
  }
  /*获取星辰*/
  .getStar_task{
    display: flex;
    justify-content: space-between;
    font-size: .24rem;
    margin: .20rem 0 .5rem;
  }
  .getStar_task>div{
    height: .72rem;
    vertical-align: top;
  }
  .getStar_task>div>div:nth-child(2){
    color: #b4a8d5;
    margin-top: .2rem;
  }
  .getStar_task>div+div{
    width: 1.36rem;
    height:.48rem;
    line-height: .48rem;
    background-color: #b3acd7;
    text-align:center;
    border-radius: .22rem;
    margin-top: .12rem;
  }
  .getStar_task>div+div.active{
    color: #534e4e;
    line-height: .72rem;
    background-color: transparent;
    margin-top: 0;
  }
</style>