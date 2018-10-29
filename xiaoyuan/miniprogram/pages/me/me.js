var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    zong: [],
    time: util.formatTime(new Date),
    zishu:"0",
    show: false,
    xuanId: "0",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    Xinxi: [{
        url: "../../images/quwei.png",
        name: "趣味聊天"
      },
      {
        url: "../../images/liaotian.png",
        name: "友话聊天"
      },
      {
        url: "../../images/fuwu.png",
        name: "校园服务"
      },
      {
        url: "../../images/fankui.png",
        name: "用户反馈"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var zong = this.data.zong
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection("quwei").orderBy('time', 'desc').get({
      success: function(res) {
        that.setData({
          zong: res.data
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorage({
      key: 'userInfo',
      data: this.data.userInfo,
      success: function(res) {
        console.log('异步保存成功')
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  QhuanCun: function() {
    wx.clearStorage({
      success: function(res) {
        console.log(res);
      }
    })
  },
  dianji: function(res) {
    var that = this;
    var xuanId = that.data.xuanId;
    that.setData({
      xuanId: res.currentTarget.dataset.id
    })
    if (res.currentTarget.dataset.id == "0") {
      this.chack("quwei");
    } else if (res.currentTarget.dataset.id == "1") {
      this.chack("youhua");
    } else if (res.currentTarget.dataset.id == "2") {
      this.chack("fuwu");
    }
  },
  chack: function(xuan) {
    var that = this
    var zong = this.data.zong
    wx.cloud.init()
    const db = wx.cloud.database()
    if(xuan == "fuwu"){
      db.collection(xuan).where({
        name: that.data.userInfo.nickName
      }).orderBy('time', 'desc').get({
        success: function (res) {
          that.setData({
            zong: res.data
          })
        }
      })
    }else if(xuan == "youhua"){
      db.collection(xuan).where({
        Name: that.data.userInfo.nickName
      }).orderBy('time', 'desc').get({
        success: function (res) {
          that.setData({
            zong: res.data
          })
        }
      })
    } else if(xuan == "quwei"){
      db.collection(xuan).orderBy('time', 'desc').get({
        success: function (res) {
          that.setData({
            zong: res.data
          })
        }
      })
    } else{
      var show = that.data.show
       that.setData({
         show : true         
       })
    }
  },
  areanumber: function (e) {
    this.setData({
      zishu: e.detail.value.length
    })
  },
  formSubmit:function(res){
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('kui').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        kui : res.detail.value.kui,
        name: that.data.userInfo.nickName,
        time: that.data.time
      },
      success: function () {
        wx.showToast({
          title: '发布成功',
          icon: "success",
          duration: 1500
        })
      }
    })
  },
  del:function(){
    wx.showModal({
      title: "提示",
      content: "是否删除？",
      success:function(){
         
      }
    })
  }
})