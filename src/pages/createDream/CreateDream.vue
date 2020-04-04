<!-- 通过页面跳转时，需要在params携带一个type的数据来判断这个页是编辑的状态还是阅读的状态 -->
<!-- read create readOthers -->
<!-- 如果是编辑的状态，还需要传一个dreamId过来 -->
<template>
  <div class="create_dream">
    <c-d-header @create_dream="create_dream" :pageType="typePage"/>
    <c-d-content :typePage="typePage" :dreamId="dreamId"/>
    <c-d-nav @click_btn3="chooseTimeClick" 
             @revise_dream="revise_dream"
             :typePage="typePage"
             :dreamId="dreamId"
             @clock_dream="ClockMenuShow=true"
             @move_dream="move_dream"/>
    <!-- 时间选择弹窗 -->
    <popup
      v-model="timePopupShow"
      position="bottom"
      :style="{ height: '4.6rem' }">
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

    <!-- 锁定&解锁 弹出菜单 -->
    <clock-action-sheet v-model="ClockMenuShow" 
                  :actions="ClockActions" 
                  @select="clockOnSelect" 
                  cancel-text="取消"
                  :round="false"
                  close-on-click-action/>

    <popup
      v-model="changeColumnIdShow"
      position="bottom"
      :style="{ height: '3.6rem' ,'background-color':'#201624'}"
      round>
      <div class="changeColumn">
        <p>
          移动游记到
          <span>移动</span>
        </p>
        <div>
          <div>
            <img src="@/assets/images/createDream/column1.png" />
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import CDHeader from './components/Header'
import CDContent from './components/Content'
import CDNav from './components/Nav'
import { DatetimePicker,Popup,Picker,Dialog,ActionSheet,Notify  } from 'vant'
import { add_dream,locked_single_dream,get_dream_info } from '@/assets/javaScript/_axios.js'
export default {
  name: 'CreateDream',
  data () {
    return {
      columnId:this.$route.params.columnId,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      timePopupShow:false,
      changeColumnIdShow:false,
      columns: ['早', '中', '晚'],
      timeType: 0, //0:年月日 1:早中晚
      datetimeValue: '',
      typePage: '',
      dreamId: 0,

      ClockMenuShow: false,
      ClockActions: [
        { name: '锁定这个梦' },
        { name: '解锁这个梦' },
      ],
    }
  },
  components: {
    CDHeader,
    CDContent,
    CDNav,
    DatetimePicker,
    Popup,
    Picker,
    ClockActionSheet:ActionSheet,
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
      this.timePopupShow = false
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
        // console.log(message)
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
    },
    revise_dream(){
      this.typePage = 'create'
    },
    // 点击锁定一个梦的弹窗
    clockOnSelect(item){
      let type
      if(item.name=='锁定这个梦'){
        type = 0;
      }else{
        type = 1;
      }
      locked_single_dream({
        dreamId:this.dreamId,
        type:type
      }).then(res=>{
        if(res.data=="操作成功"){
          Notify({ type: 'success', message: '已'+(type==0?'锁定':'解锁') });
        }else{
          Notify({ type: 'danger', message: '操作失败，请重试'});
        }
      })
    },
    move_dream(){
      
    }
  },
  created(){
    this.typePage = this.$route.params.type;
    if(this.$route.params.type!="create"){
      this.dreamId = this.$route.params.dreamId
      console.log(this.dreamId)
      get_dream_info({
        dreamId: this.dreamId
      }).then(res=>{
        console.log(res)
        this.columnId = res.data.type
      })
    }
    console.log(this.$route.params)

  }
}
</script>

<style lang="css" scoped>
  .create_dream{
    background-color: #f2f2f2;
    position: relative;
  }
  .changeColumn>p{
    color:#959595;
    padding: .3rem .26rem;
  }
  .changeColumn>p>span{
    float:right;
    color: #b4a8d5;
  }
  .changeColumn>div{
    height: 2.1rem;
    background-color: #eee;
    padding: 0 .5rem;
  }
</style>