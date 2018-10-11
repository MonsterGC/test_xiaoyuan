var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zishu: 0,
    userInfo: {},
    time: util.formatTime(new Date),
    quwei: ["石油", "化工", "环境", "机电", "电信", "建工", "经管", "理学院", "外国语", "文法", "体育", "艺术"],
    xuan: '石油'
  },
  bindChange: function(e) {
    var that = this
    var xuan = this.data.xuan
    if (e.detail.value[0] == 1) {
      that.setData({
        xuan: '化工'
      })
    } else if (e.detail.value[0] == 2) {
      that.setData({
        xuan: '环境'
      })
    } else if (e.detail.value[0] == 3) {
      that.setData({
        xuan: '机电'
      })
    } else if (e.detail.value[0] == 4) {
      that.setData({
        xuan: '电信'
      })
    } else if (e.detail.value[0] == 5) {
      that.setData({
        xuan: '建工'
      })
    } else if (e.detail.value[0] == 6) {
      that.setData({
        xuan: '经管'
      })
    } else if (e.detail.value[0] == 7) {
      that.setData({
        xuan: '理学院'
      })
    } else if (e.detail.value[0] == 8) {
      that.setData({
        xuan: '外国语'
      })
    } else if (e.detail.value[0] == 9) {
      that.setData({
        xuan: '文法'
      })
    } else if (e.detail.value[0] == 10) {
      that.setData({
        xuan: '体育'
      })
    } else if (e.detail.value[0] == 11) {
      that.setData({
        xuan: '艺术'
      })
    } else {
      that.setData({
        xuan: '石油'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: "数据加载中",
      mask: true
    })
    var that = this
    var userInfo = that.data.userInfo
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data
        })
      }
    })
  },
  formSubmit: function(e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    if (e.detail.value.youhua == "") {
      wx.showToast({
        title: "内容不能为空",
        icon: "none"
      })
    } else if (that.data.userInfo.nickName == undefined) {
      wx.switchTab({
        url: '../../pages/youhua/youhua'
      })
      wx.showToast({
        title: "出错啦！请重新进入",
        icon: "none",
        duration: 1500
      })
    } else if (that.data.userInfo.avatarUrl == undefined) {
      wx.switchTab({
        url: '../../pages/youhua/youhua'
      })
      wx.showToast({
        title: "出错啦！请重新进入",
        icon: "none",
        duration: 1500
      })
    } else {
      db.collection('youhua').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          Time: that.data.time,
          Xuan: that.data.xuan,
          Youhua: e.detail.value.youhua,
          Name: that.data.userInfo.nickName,
          Url: that.data.userInfo.avatarUrl
        },
        success: function() {
          wx.switchTab({
            url: '../../pages/youhua/youhua'
          })
          wx.showToast({
            title: '发布成功',
            icon: "success",
            duration: 1500
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading({})
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  message: function(e) {
    var that = this;
    that.setData({
      Message: e.detail.value
    })
  },
  areanumber: function(e) {
    this.setData({
      zishu: e.detail.value.length
    })
  }
})