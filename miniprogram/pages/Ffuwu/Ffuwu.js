var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zishu: 0,
    time: util.formatTime(new Date),
    userInfo: {}
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading({})
  },
  formSubmit: function(e) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    if (e.detail.value.shangjin == "") {
      wx.showToast({
        title: "赏金不能为空",
        icon: "none"
      })
    } else if (e.detail.value.wuzhong == "") {
      wx.showToast({
        title: "物重是多少",
        icon: "none"
      })
    } else if (e.detail.value.phone == "") {
      wx.showToast({
        title: "电话不能为空",
        icon: "none"
      })
    } else if (e.detail.value.wuzhong != "大件" && e.detail.value.wuzhong != "中件" && e.detail.value.wuzhong != "小件") {
      wx.showToast({
        title: "物重只能在范围内选",
        icon: "none"
      })
    } else if (e.detail.value.beizhu == "") {
      wx.showToast({
        title: "备注需要写喔",
        icon: "none"
      })
    } else {
        db.collection('fuwu').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            time: that.data.time,
            shangjin: parseInt(e.detail.value.shangjin),
            wuzhong: e.detail.value.wuzhong,
            beizhu: e.detail.value.beizhu,
            name: that.data.userInfo.nickName,
            url: that.data.userInfo.avatarUrl,
            zhuantai: "申请中",
            phone: e.detail.value.phone,
            changeImage: "../../images/sq.png"
          },
          success: function() {
            wx.navigateTo({
              url: '../../pages/fuwu/fuwu',
            })
            wx.showToast({
              title: '发布成功',
              icon: "success",
              duration: 3000
            })
          }
        })
      }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  areanumber: function(e) {
    this.setData({
      zishu: e.detail.value.length
    })
  }
})