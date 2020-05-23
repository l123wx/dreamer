<!-- 通过页面跳转时，需要在params携带一个type的数据来判断这个页是编辑的状态还是阅读的状态 -->
<!-- read create readOthers -->
<!-- 如果是编辑的状态，还需要传一个dreamId过来 -->
<template>
  <div class="create_dream">
    <c-d-header @create_dream="create_dream" :pageType="typePage"/>
    <c-d-content :typePage="typePage" 
                 :dreamId="dreamId" 
                 ref="content" 
                 :vedioSrcLists="vedioSrcLists"
                 @deleteVedio="deleteVedio"/>

    <c-d-nav @click_btn3="chooseTimeClick" 
             @revise_dream="revise_dream"
             :typePage="typePage"
             :dreamId="dreamId"
             @clock_dream="ClockMenuShow=true"
             @move_dream="changeColumnIdShow=true"
             @recorderTransform="recorderTransform"
             @saveRecord="saveRecord"/>
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

    <!-- 隐藏&公开 弹出菜单 -->
    <clock-action-sheet v-model="ClockMenuShow" 
                  :actions="ClockActions" 
                  @select="clockOnSelect" 
                  cancel-text="取消"
                  :round="false"
                  description="隐私设置"
                  close-on-click-action/>
    
    <!-- 文章移动弹窗 -->
    <popup
      v-model="changeColumnIdShow"
      position="bottom"
      :style="{ height: '3.6rem' ,'background-color':'#201624'}"
      round>
      <div class="changeColumn">
        <p>
          移动文章到
          <span @click="move_dream">移动</span>
        </p>
        <ul>
          <li v-for="(item,index) in this.$globalData.homeDreamLists" 
              v-if="(index*1+1)!=columnId"
              @click="dreamColumnActiveIndex=(index*1+1)"
              :class="(index*1+1)==dreamColumnActiveIndex?'active':''">
            <img :src="item.previewSrc"/>
            <div >{{item.title}}</div>
          </li>
        </ul>
      </div>
    </popup>
  </div>
</template>

<script>
import CDHeader from './components/Header'
import CDContent from './components/Content'
import CDNav from './components/Nav'
import { DatetimePicker,Popup,Picker,Dialog,ActionSheet,Notify  } from 'vant'
import { add_dream,
         locked_single_dream,
         get_dream_info,
         change_single_dream_column,
         update_dream,
         upload_voice_by_base64,
         add_voice_for_dream,
         select_dream_voice,
         del_dream_voice,
       } from '@/assets/javaScript/_axios.js'
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
      typePage: '',
      dreamId: 0,
      dreamData: {},
      dreamColumnActiveIndex:-1, //改变游记栏目时选中的栏目的index
      changeColumnIdShow:false,
      ClockMenuShow: false,
      ClockActions: [
        { name: '隐藏这个梦' },
        { name: '公开这个梦' },
      ],
      vedioSrcLists:[],//语音文件/src {src,type:0 新语音 ：1旧语音}
      photoSrc:this.$globalData.photoSrc,
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
      // console.log(e)
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
      // console.log(this.datetimeValue)
    },
    // 创建梦
    create_dream(){
      const title = this.$children[1].$data.title;
      const message = this.$children[1].$data.message;
      if( title!='为梦境起个名字吧' && message!='在这里输入输入内容'){
        // 如果用户没有选择时间,以当前发布的时间为准
        if(!this.datetimeValue){
          const time = new Date();
          this.datetimeValue = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
        }
        // console.log(message)
        if(this.typePage == "create"){
          add_dream({
            title,
            content:message.replace(/(\r)*\n/g,"<br/>").replace(/\s/g," "),
            dreamTime:this.datetimeValue,
            pictureCount:0,
            voiceCount:this.vedioSrcLists.length,
            type:this.columnId
          }).then(res=>{
            // console.log(res)
            if(res.status == 0){
              this.dreamId = res.data.id;
              this.$router.push({name:'RecordFinish',params:{dreamId:res.data.id,msg:res.msg}})
            }
            // 将语音上传
            for(var item in this.vedioSrcLists){
              upload_voice_by_base64({
                base64Data:this.vedioSrcLists[item].src
              }).then(res=>{
                // console.log(res)
                this.vedioSrcLists[item].src = res.data;
                add_voice_for_dream({
                  'voiceUrls[]':res.data,
                  dreamId:this.dreamId
                }).then(res=>{
                  // console.log(res)
                })
              })
            }
          })
        }else{
          update_dream({
            title,
            content:message.replace(/(\r)*\n/g,"<br/>").replace(/\s/g," "),
            dreamTime:this.datetimeValue,
            pictureCount:0,
            voiceCount:this.vedioSrcLists.length,
            dreamId:this.dreamId
          }).then(res=>{
            // console.log(res)
            if(res.status == 0){
              // 将语音上传
              for(var item in this.vedioSrcLists){
                if( this.vedioSrcLists[item].type == 0 ){
                  upload_voice_by_base64({
                    base64Data:this.vedioSrcLists[item].src
                  }).then(res=>{
                    // console.log(res)
                    this.vedioSrcLists[item].src = res.data;
                    add_voice_for_dream({
                      'voiceUrls[]':res.data,
                      dreamId:this.dreamId
                    }).then(res=>{
                      // console.log(res)
                    })
                  })
                }
              }
              Notify({ type: 'success', message: '修改成功' });
              this.typePage = 'read'
            }else{
              Notify({ type: 'danger', message: '操作失败，请重试'});
            }
          })
        }
      }else if( title == '为梦境起个名字吧'){
        Dialog({ message: '给梦起个名字吧' });
      }else if( message=='在这里输入输入内容' ){
        Dialog({ message: '写点东西描述一下这个梦吧'});
      }
    },
    revise_dream(){
      this.typePage = 'revise'
    },
    // 点击锁定一个梦的弹窗
    clockOnSelect(item){
      let type
      if(item.name=='隐藏这个梦'){
        type = 0;
      }else{
        type = 1;
      }
      locked_single_dream({
        dreamId:this.dreamId,
        type:type
      }).then(res=>{
        if(res.msg=="操作成功"){
          Notify({ type: 'success', message: '已'+(type==0?'隐藏':'公开') });
        }else if(res.msg=='正在审核'){
          Notify({ type: 'success', message: '已提交至人工审核'});
        }else{
          Notify({ type: 'danger', message: '操作失败，请重试'});
        }
      })
    },
    move_dream(){
      change_single_dream_column({
        dreamId:this.dreamId,
        type:this.dreamColumnActiveIndex
      }).then(res=>{
        // console.log(res)
        if(res.status==0){
          this.changeColumnIdShow = false;
          Notify({ type: 'success', message: '已修改' });
          this.columnId = this.dreamColumnActiveIndex;
          this.dreamColumnActiveIndex = -1;
        }else{
          Notify({ type: 'danger', message: '操作失败，请重试'});
        }
      })
    },
    // 语音转文字
    recorderTransform(e) {
      // console.log(this.$refs.content.$refs.textarea)
      this.$refs.content.$refs.textarea.focus();
      this.$refs.content.message += e;
    },
    // 新建一条语音
    saveRecord(src){
      this.vedioSrcLists.push({type:0,src})
      // console.log(this.vedioSrcLists)
    },
    // 删除一条语音
    deleteVedio(index){
      console.log(this.typePage)
      if(this.typePage == "create" || this.typePage=="revise"){
        console.log("deleteVedio")
        Dialog.confirm({
          message: '确定要删除这条语音吗'
        }).then(() => {
          if(this.vedioSrcLists[index].type == 1){//如果是之前创建过的语音
            del_dream_voice({
              voiceUrl:this.vedioSrcLists[index].src
            }).then(res=>{
              // console.log(res)
            })
          }
          this.vedioSrcLists.splice(index,1);
        }).catch(() => {
          // on cancel
        });
      }// console.log(this.vedioSrcLists[index])
    }
  },
  created(){
    this.typePage = this.$route.params.type;
    if(this.$route.params.type!="create"){
      this.dreamId = this.$route.params.dreamId
      // console.log(this.dreamId)
      get_dream_info({
        dreamId: this.dreamId
      }).then(res=>{
        // console.log(res)
        this.columnId = res.data.type;
        this.dreamData = res.data
      })
      select_dream_voice({
        dreamId: this.dreamId
      }).then(res=>{
        // console.log(res)
        for(let item in res.data){
          this.vedioSrcLists.push({type:1,src:res.data[item].voiceUrl})
        }
      })
    }
    // console.log(this.$route.params)
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
  .changeColumn>ul{
    height: 2.1rem;
    background-color: #201624;
    padding: .1rem  0;
    margin: 0 .55rem;
    overflow: auto;
    display: flex;
  }
  .changeColumn>ul::-webkit-scrollbar   
  {  
    width:0px;
    height:0px;    
  }  
  .changeColumn>ul>li{
    height: 100%;
    display: inline-block;
    padding: 0 .08rem;
  }
  .changeColumn>ul>li>img{
    height: 1.44rem;
    width: 1.44rem;
  }
  .changeColumn>ul>li>div{
    height: .66rem;
    color: #959595;
    /*background-color: #382a3e;*/
    line-height: .66rem;
    text-align: center;
    font-size: .24rem;
    transition: all .2s;
  }
  .changeColumn>ul>li.active>div{
    background-color: #382a3e;
  }
</style>