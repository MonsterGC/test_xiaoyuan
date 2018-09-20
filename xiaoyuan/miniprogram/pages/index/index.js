//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://blackboy.club/xiaoyuan/lunbo/b_01.jpg',
      'https://blackboy.club/xiaoyuan/lunbo/b_02.jpg',
      'https://blackboy.club/xiaoyuan/lunbo/b_03.jpg'
    ],
    iconArray: [{
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/A_01.png',
        "iconText": '校园友话'
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/A_02.png',
        "iconText": '校园助手'
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/A_03.png',
        "iconText": '趣味校园',
        "Url": "../../pages/quwei/quwei"
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/A_04.png',
        "iconText": '招聘会',
        "Url": "../../pages/youhua/youhua"
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/B_01.png',
        "iconText": '考研',
        "Url": "../../pages/youhua/youhua"
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/B_02.png',
        "iconText": '公务员',
        "Url": "../../pages/youhua/youhua"
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/B_03.png',
        "iconText": '校园服务',
        "Url": "../../pages/youhua/youhua"
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/fenlei/B_04.png',
        "iconText": '联系客服',
        "Url": "#"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  tel: function() {
    wx: wx.makePhoneCall({
      phoneNumber: '13336535215',
    })
  },
  tebie: function() {
    wx.navigateTo({
      url: '../../pages/tebie/tebie',
    })
  },
  youhua: function() {
    wx.switchTab({
      url: '../../pages/youhua/youhua'
    })
  },
  zhusho:function(){
    wx.switchTab({
      url: '../../pages/zhusho/zhusho'
    })
  }
})