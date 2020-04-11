
let token = 'V1L32CQWKtViN2KF3fepBw=='; //tK2DARUWraEiJ02rLtWWQQ==  
if(localStorage.getItem('token')){
  token =localStorage.getItem('token')
}

const url = 'http://mjlr.smtboy.com';


// 用户的个人信息
let userInfo = {};
// if(localStorage.getItem('userInfo')){
//   userInfo = JSON.parse(localStorage.getItem('userInfo'))
// }
//首页梦境栏目数据
const homeDreamLists = {
        '0': {
          id: 0,
          src: './static/images/home/photo_1.png',
          title: '酣酣美梦',
          title_sec: '存放令人心情愉悦满足的梦',
          sentence: '人生有许多事情,正如船后的波纹,总要过后才觉得美的。',
          bgColor: 'linear-gradient(-13deg, rgb(195,228,255),rgb(252,208,226))',
          type: 'white',
          previewSrc:'./static/images/createDream/column1.png'
        },
        '1': {
          id:1,
          src: './static/images/home/photo_2.png',
          title: '梦魇',
          title_sec: '存放莫名恐惧和焦虑，甚至被惊醒的梦境',
          sentence: '迷雾、潮湿、冰冷、荒芜。',
          bgColor: 'linear-gradient(to top, rgb(14,2,39) 0%, rgb(48,12,86) 47%, rgb(81,22,132) 100%)',
          type: 'white',
          previewSrc:'./static/images/createDream/column2.png'
        },
        '2': {
          id:2,
          src: './static/images/home/photo_3.png',
          title: '混沌之初',
          title_sec: '存放各种类型的梦境',
          sentence: '梦短梦长俱是梦,年来年去是何年',
          bgColor: 'linear-gradient(to top, rgb(123,190,242) 0%, rgb(161,218,244) 47%, rgb(198,246,245) 100%)',
          type: 'white',
          previewSrc:'./static/images/createDream/column3.png'
        },
        '3': {
          id:3,
          src: './static/images/home/photo_4.png',
          title: '昨日重现',
          title_sec: '存放由思念、追忆引起的梦',
          sentence: '无名的日子的感触，攀援在我的心上',
          bgColor: 'linear-gradient(to top, rgb(248,250,252) 0%, rgb(196,210,244) 100%)',
          type: 'black',
          previewSrc:'./static/images/createDream/column4.png'
        },
        '4': {
          id:4,
          src: './static/images/home/photo_5.png',
          title: '光怪陆离',
          title_sec: '存放有奇妙经历难以描述的梦',
          sentence: '世事漫随流水，算来一梦浮生',
          bgColor: 'linear-gradient(to top, rgb(243,232,184) 0%, rgb(162,141,201) 100%)',
          type: 'white',
          previewSrc:'./static/images/createDream/column5.png'
        }
      }

//首页菜单栏目数据
const homeMenu = [
        {
          title: '梦世界',
          iconCode: '&#xe630;',
          path: 'DreamWorldIndex'
        },
        {
          title: '星星瓶',
          iconCode: '&#xe62f;',
          path: 'StarBottle'
        },
        {
          title: '解梦所',
          iconCode: '&#xe62d;',
          path: 'RevealDreamIndex'
        },
        {
          title: '系统公告',
          iconCode: '&#xe626;',
          path: 'Notice'
        },
        {
          title: '设置',
          iconCode: '&#xe62e;',
          path: 'Setting'
        }
      ]

export default{
  url,
  userInfo,
  token,   //用户token信息
  homeMenu,
  homeDreamLists
}