<template>
  <div class="create_dream">
    <c-d-header @create_dream="create_dream"/>
    <c-d-content />
    <c-d-nav @click_btn3="chooseTimeClick" />
    <!-- 时间选择弹窗 -->
    <popup
      v-model="timePopupShow"
      position="bottom"
      :style="{ height: '4.6rem' }"
    >
      <datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :visible-item-count="4"
        v-show="!timeType"
        @confirm="res=>{timeType=1,datetimeValue=res.getFullYear()+'-'+(res.getMonth()+1)+'-'+res.getDate()}"
        @cancel="timePopupShow=false"
        confirm-button-text="下一步"
      />
      <picker
        show-toolbar
        :columns="columns"
        v-show="timeType"
        cancel-button-text="上一步"
        @cancel="timeType=0"
        @confirm="chooseTimeFinish"
      />
    </popup>
  </div>
</template>

<script>
import CDHeader from './components/Header'
import CDContent from './components/Content'
import CDNav from './components/Nav'
import { DatetimePicker,Popup,Picker,Dialog  } from 'vant'
import { add_dream } from '@/assets/javaScript/_axios.js'
export default {
  name: 'CreateDream',
  data () {
    return {
      columnId:this.$route.params.columnId,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      timePopupShow:false,
      columns: ['早', '中', '晚'],
      timeType: 0, //0:年月日 1:早中晚
      datetimeValue: '',
    }
  },
  components: {
    CDHeader,
    CDContent,
    CDNav,
    DatetimePicker,
    Popup,
    Picker
  },
  methods: {
    // 显示选择时间弹窗
    chooseTimeClick(){
      this.timePopupShow=true
    },
    // 处理时间
    chooseTimeFinish(e){
      console.log(e)
      let timeValue;
      if(e == '早'){
        timeValue = '10:00:00'
      }else if(e == '中'){
        timeValue = '03:00:00'
      }else if(e == '晚'){
        timeValue = '21:00:00'
      }
      this.datetimeValue = this.datetimeValue+ ' ' + timeValue;
      console.log(this.datetimeValue)
    },
    // 创建梦
    create_dream(){
      const title = this.$children[1].$data.title;
      const message = this.$children[1].$data.message
      if( title!='为梦境起个名字吧' && message!='在这里输入输入内容'){
        // 如果用户没有选择时间,以当前发布的时间为准
        if(!this.datetimeValue){
          const time = new Date();
          this.datetimeValue = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
        }
        add_dream({
          title,
          content:message,
          dreamTime:this.datetimeValue,
          pictureCount:0,
          voiceCount:0,
          type:this.columnId
        }).then(res=>{
          console.log(res)
          if(res.msg == '梦境发布成功'){
            this.$router.push({name:'RecordFinish',params:{dreamId:res.data.id}})
          }
        })
      }else if( title == '为梦境起个名字吧'){
        Dialog({ message: '给梦起个名字吧' });
      }else if( message=='在这里输入输入内容' ){
        Dialog({ message: '写点东西描述一下这个梦吧'});
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .create_dream{
    background-color: #f2f2f2;
    position: relative;
  }
</style>