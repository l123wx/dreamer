import axios from 'axios'
import globalData from './global'
import { Toast } from 'vant';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['token'] = globalData.token;
// axios.defaults.baseURL ='https://abc.llwxi.cn'
axios.defaults.baseURL = 'https://mjlr.smtboy.com'
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

axios.interceptors.request.use(
  config => {
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '请稍后',
    });
    return config;
  }, err => { //请求错误处理
    Toast.fail('请求失败');
    Promise.reject(err)
  });

axios.interceptors.response.use(
  res => { //成功请求到数据
    Toast.clear();
    return res.data
  },
  err => { //响应错误处理
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          Toast.fail('错误请求')
          break;
        case 401:
          Toast.fail('未授权，请重新登录')
          break;
        case 403:
          Toast.fail('拒绝访问')
          break;
        case 404:
          Toast.fail('请求错误,未找到该资源')
          break;
        case 405:
          Toast.fail('请求方法未允许')
          break;
        case 408:
          Toast.fail('请求超时')
          break;
        case 500:
          Toast.fail('服务器端出错')
          break;
        case 501:
          Toast.fail('网络未实现')
          break;
        case 502:
          Toast.fail('网络错误')
          break;
        case 503:
          Toast.fail('服务不可用')
          break;
        case 504:
          Toast.fail('网络超时')
          break;
        case 505:
          Toast.fail('http版本不支持该请求')
          break;
        default:
          Toast.fail(`连接错误${err.response.status}`)
      }
    } else {
      Toast.fail('连接到服务器失败');
    }
    return Promise.reject(err.response)
  }
);
///////////////////////////
/////////解梦师模块////////////
/////////////////////////////
// 向解梦师发布一个解梦
export function add_reveal_dream(options) {  //导出此方法
  return axios({
    url: '/dreammaster/add_reveal_dream.do',
    method: 'post',
    data: options
  })
}

// 解梦师-列表查询梦的信息
export function dream_master_message(options) {  //导出此方法
  return axios({
    url: '/dreammaster/dream_master_message.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////留言模块////////////
/////////////////////////////
// 已读了一个留言
export function read_message(options) {
  return axios({
    url: '/message/read_message.do ',
    method: 'post',
    data: options
  })
}

// 收到的星辰（留言）数据
export function receive_message(options) {
  return axios({
    url: '/message/receive_message.do ',
    method: 'post',
    data: options
  })
}

// 查询送出的星辰（留言）
export function select_send_message(options) {
  return axios({
    url: '/message/select_send_message.do ',
    method: 'post',
    data: options
  })
}

// 给梦留言
export function send_message(options) {
  return axios({
    url: '/message/send_message.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////梦境模块////////////
/////////////////////////////
// 创建梦
export function add_dream(options) {
  return axios({
    url: '/dream/add_dream.do',
    method: 'post',
    data: options
  })
}

// 修改一个梦的栏目
export function change_single_dream_column(options) {
  return axios({
    url: '/dream/change_single_dream_column.do',
    method: 'post',
    data: options
  })
}

// 删除一个梦
export function del_dream(options) {
  return axios({
    url: '/dream/del_dream.do',
    method: 'post',
    data: options
  })
}

// 进入梦世界
export function enter_dream_world(options) {
  return axios({
    url: '/dream/enter_dream_world.do',
    method: 'post',
    data: options
  })
}
//已读一个梦
export function read_dream(options) {
  return axios({
    url: '/dream/read_dream.do',
    method: 'post',
    data: options
  })
}

// 调用外部接口获取梦分类
export function get_dream_column(options) {
  return axios({
    url: '/dream/get_dream_column.do',
    method: 'post',
    data: options
  })
}

// 获取一个梦的详细信息
export function get_dream_info(options) {
  return axios({
    url: '/dream/get_dream_info.do',
    method: 'post',
    data: options
  })
}

//查询梦的语音
export function select_dream_voice(options) {
  return axios({
    url: '/dream/select_dream_voice.do',
    method: 'post',
    data: options
  })
}

// 获得一个栏目下的所有梦
export function get_dream_list(options) {
  return axios({
    url: '/dream/get_dream_list.do',
    method: 'post',
    data: options
  })
}

// 获得一个栏目下的所有梦
export function locked_dream_list(options) {
  return axios({
    url: '/dream/locked_dream_list.do',
    method: 'post',
    data: options
  })
}

// 解锁或公开一个梦
export function locked_single_dream(options) {
  return axios({
    url: '/dream/locked_single_dream.do',
    method: 'post',
    data: options
  })
}

// 调用外部接口获取梦寓意（简短）
export function reveal_dream(options) {
  return axios({
    url: '/dream/reveal_dream.do',
    method: 'post',
    data: options
  })
}

// 调用外部接口获取梦的详细解释
export function reveal_dream_detail(options) {
  return axios({
    url: '/dream/reveal_dream_detail.do',
    method: 'post',
    data: options
  })
}

//查询一个精确结果
export function search_one_answer(options) {
  return axios({
    url: '/dream/search_one_answer.do',
    method: 'post',
    data: options
  })
}

// 解梦列表查询梦的信息
export function select_reveal_dream(options) {
  return axios({
    url: '/dream/select_reveal_dream.do',
    method: 'post',
    data: options
  })
}

// 获得一个栏目下的所有梦
export function update_dream(options) {
  return axios({
    url: '/dream/update_dream.do',
    method: 'post',
    data: options
  })
}

// 上传语音或者画画
export function upload_voice_or_picture(options) {
  return axios({
    url: '/dream/upload_voice_or_picture.do',
    method: 'post',
    data: options
  })
}

//上传语音base64
export function upload_voice_by_base64(options) {
  return axios({
    url: '/dream/upload_voice_by_base64.do',
    method: 'post',
    data: options
  })
}

//给梦插入语音
export function add_voice_for_dream(options) {
  return axios({
    url: '/dream/add_voice_for_dream.do',
    method: 'post',
    data: options
  })
}

//删除梦中的语音
export function del_dream_voice(options) {
  return axios({
    url: '/dream/del_dream_voice.do',
    method: 'post',
    data: options
  })
}

// 梦境分词
export function split_dream(options) {
  return axios({
    url: '/dream/split_dream.do',
    method: 'post',
    data: options
  })
}

//语音转文字
export function voice_to_text_by_base64(options) {
  return axios({
    url: '/dream/voice_to_text_by_base64.do',
    method: 'post',
    data: options
  })
}

//获取热词
export function hot_search_keys(options) {
  return axios({
    url: '/dream/hot_search_keys.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////评论模块////////////
/////////////////////////////
// 给梦发布评论
export function send_comment(options) {
  return axios({
    url: '/comment/send_comment.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////用户反馈模块////////////
/////////////////////////////
// 给梦留言
export function add_feedback(options) {
  return axios({
    url: '/feedback/add_feedback.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////用户模块////////////
/////////////////////////////
// 访问登陆页面时是否自动登录
export function auto_login(options) {
  return axios({
    url: '/user/auto_login.do',
    method: 'post',
    data: options
  })
}

// 改手机号
export function change_phone(options) {
  return axios({
    url: '/user/change_phone.do',
    method: 'post',
    data: options
  })
}

// 改座右铭
export function change_user_motto(options) {
  return axios({
    url: '/user/change_user_motto.do',
    method: 'post',
    data: options
  })
}

// 改昵称
export function change_username(options) {
  return axios({
    url: '/user/change_username.do',
    method: 'post',
    data: options
  })
}

// 不用管此接口
export function check_login(options) {
  return axios({
    url: '/user/check_login.do',
    method: 'get',
    params: options
  })
}

// 检查手机是否被使用
export function check_user_phone(options) {
  return axios({
    url: '/user/check_user_phone.do',
    method: 'get',
    params: options
  })
}

// 检查用户名是否被使用
export function check_username(options) {
  return axios({
    url: '/user/check_username.do',
    method: 'get',
    params: options
  })
}

// 退出登陆
export function exit_login(options) {
  return axios({
    url: '/user/exit_login.do',
    method: 'post',
    data: options
  })
}

// 获得手机验证码
export function get_auth_code(options) {
  return axios({
    url: '/user/get_auth_code.do',
    method: 'post',
    data: options
  })
}

// 获取个人详细信息
export function get_user_info(options) {
  return axios({
    url: '/user/get_user_info.do',
    method: 'post',
    data: options
  })
}

// 登陆或者注册
export function log_or_reg(options) {
  return axios({
    url: '/user/log_or_reg.do',
    method: 'post',
    data: options
  })
}

// 星星兑换解梦券
export function stars_to_ticket(options) {
  return axios({
    url: '/user/stars_to_ticket.do',
    method: 'post',
    data: options
  })
}

// 更改用户头像
export function upload_head_photo(options) {
  return axios({
    url: '/user/upload_head_photo.do',
    method: 'post',
    data: options
  })
}
//上传base64格式的头像
export function upload_head_photo_by_base64(options) {
  return axios({
    url: '/user/upload_head_photo_by_base64.do',
    method: 'post',
    data: options
  })
}

// 用户是否展示指引
export function user_guide_check(options) {
  return axios({
    url: '/userGuide/check',
    method: 'post',
    data: options
  })
}


///////////////////////////
/////////解梦师模块(后台)////////////
/////////////////////////////
// 解梦师登陆
export function dream_master_login(options) {
  return axios({
    url: '/userDreamMaster/login',
    method: 'post',
    data: options
  })
}

// （后台）展示所有的解梦与未解梦
export function get_dream_master_msg(options) {
  return axios({
    url: '/dreammaster/getDreamMasterMsg',
    method: 'post',
    data: options
  })
}

// （后台）解梦/修改解梦
export function reply_dream(options) {
  return axios({
    url: '/dreammaster/replyDream.do',
    method: 'post',
    data: options
  })
}

///////////////////////////
/////////梦境审核(后台)////////////
/////////////////////////////
// 展示所有等待审核的梦境
export function get_audit_dream(options) {
  return axios({
    url: '/dream/getAuditDream',
    method: 'post',
    data: options
  })
}

// （后台）通过/不通过审核
// locked_single_dream
export function audit_single_dream(options) {
  return axios({
    url: '/dream/auditSingleDream',
    method: 'post',
    data: options
  })
}