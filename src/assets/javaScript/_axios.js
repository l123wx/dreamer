import axios from 'axios'
import globalData from './global'
import { Toast } from 'vant';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['token'] = globalData.token;
axios.defaults.baseURL ='http://mjlr.smtboy.com'
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
      Toast.fail(err);
      switch (err.response.status){
        case 400:
            console.log('错误请求')
          break;
        case 401:
            console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      Toast.fail('连接到服务器失败');
      console.log('连接到服务器失败')
    }
    return Promise.reject(err.response)
  }
);
///////////////////////////
/////////解梦师模块////////////
/////////////////////////////
// 向解梦师发布一个解梦
export function add_reveal_dream(options){  //导出此方法
  return new Promise((resolve,reject) => {
    axios({
        url: '/dreammaster/add_reveal_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 解梦师-列表查询梦的信息
export function dream_master_message(options){  //导出此方法
  return new Promise((resolve,reject) => {
    axios({
        url: '/dreammaster/dream_master_message.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

///////////////////////////
/////////留言模块////////////
/////////////////////////////
// 已读了一个留言
export function read_message(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/message/read_message.do ',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 收到的星辰（留言）数据
export function receive_message(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/message/receive_message.do ',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 查询送出的星辰（留言）
export function select_send_message(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/message/select_send_message.do ',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 给梦留言
export function send_message(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/message/send_message.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

///////////////////////////
/////////梦境模块////////////
/////////////////////////////
// 创建梦
export function add_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/add_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 修改一个梦的栏目
export function change_single_dream_column(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/change_single_dream_column.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 删除一个梦
export function del_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/del_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 进入梦世界
export function enter_dream_world(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/enter_dream_world.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 调用外部接口获取梦分类
export function get_dream_column(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/get_dream_column.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 获取一个梦的详细信息
export function get_dream_info(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/get_dream_info.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 获得一个栏目下的所有梦
export function get_dream_list(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/get_dream_list.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 获得一个栏目下的所有梦
export function locked_dream_list(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/locked_dream_list.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 解锁或公开一个梦
export function locked_single_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/locked_single_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 调用外部接口获取梦寓意（简短）
export function reveal_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/reveal_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 调用外部接口获取梦的详细解释
export function reveal_dream_detail(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/reveal_dream_detail.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 解梦列表查询梦的信息
export function select_reveal_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/select_reveal_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 获得一个栏目下的所有梦
export function update_dream(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/update_dream.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 上传语音或者画画
export function upload_voice_or_picture(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/dream/upload_voice_or_picture.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

///////////////////////////
/////////评论模块////////////
/////////////////////////////
// 给梦发布评论
export function send_comment(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/comment/send_comment.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

 ///////////////////////////
/////////用户反馈模块////////////
/////////////////////////////
// 给梦留言
export function add_feedback(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/feedback/add_feedback.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

 ///////////////////////////
/////////用户反馈模块////////////
/////////////////////////////
// 访问登陆页面时是否自动登录
export function auto_login(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/auto_login.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 改手机号
export function change_phone(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/change_phone.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 改座右铭
export function change_user_motto(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/change_user_motto.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 改昵称
export function change_username(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/change_username.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 不用管此接口
export function check_login(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/check_login.do',
        method: 'get',
        params: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 检查手机是否被使用
export function check_user_phone(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/check_user_phone.do',
        method: 'get',
        params: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 检查用户名是否被使用
export function check_username(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/check_username.do',
        method: 'get',
        params: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 退出登陆
export function exit_login(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/exit_login.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 获得手机验证码
export function get_auth_code(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/get_auth_code.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 获取个人详细信息
export function get_user_info(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/get_user_info.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 登陆或者注册
export function log_or_reg(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/log_or_reg.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
 
// 星星兑换解梦券
export function stars_to_ticket(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/stars_to_ticket.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}

// 更改用户头像
export function upload_head_photo(options){
  return new Promise((resolve,reject) => {
    axios({
        url: '/user/upload_head_photo.do',
        method: 'post',
        data: options
    }).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
  })
}
