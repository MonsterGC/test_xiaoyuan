const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    mobile: "",
    detailInfo: "",
    title: "校园跑腿",
    name: ['全部', '申请中', '任务中', '已完成'],
    xuanId: '0',
    userInfo: {},
    zhuUrl: "../../images/zhu_02.png",
    zong: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var userInfo = that.data.userInfo
    wx.showLoading({
      title: "数据加载中",
      mask: true
    })
    wx.setNavigationBarTitle({
      title: '校园服务',
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      wx.setStorage({
        key: 'userInfo',
        data: this.data.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorage({
          key: 'userInfo',
          data: this.data.userInfo
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
          wx.setStorage({
            key: 'userInfo',
            data: this.data.userInfo
          })
        }
      })
    }
  },
  onReady: function() {
    wx.hideLoading({})
    console.log(this.data.userInfo);
  },
  editAddress: function(event) {
    var that = this;
    var name = that.data.name
    var mobile = that.data.mobile
    var detailInfo = that.data.detailInfo
    wx.chooseAddress({
      success: function(res) {
        that.setData({
          name: res.userName,
          mobile: res.telNumber,
          detailInfo: res.provinceName + res.cityName + res.countyName + res.detailInfo
        })
      }
    })
  },
  tell: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  fuwu: function(res) {
    var that = this
    var xuanId = that.data.xuanId
    that.setData({
      xuanId: res.currentTarget.dataset.id
    })
    if (res.currentTarget.dataset.id == "1") {
      this.select("申请中");
    } else if (res.currentTarget.dataset.id == "2") {
      this.select("任务中");
    } else if (res.currentTarget.dataset.id == "3") {
      this.select("已完成");
    } else {
      wx.navigateTo({
        url: '../../pages/fuwu/fuwu',
      })
    }
  },
  select: function(selected) {
    var that = this
    var zong = that.data.zong
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('fuwu').where({
      zhuantai: selected
    }).orderBy('time', 'desc').get({
      success: function(res) {
        that.setData({
          zong: res
        })
      }
    })
  },
  change: function(res) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    if (res.currentTarget.dataset.zhuantai == "申请中") {
      wx.showModal({
        title: "提示",
        content: "是否记住号码,接单？",
        success: function(e) {
          if (e.confirm == true) {
            db.collection('fuwu').doc(res.currentTarget.dataset.id).update({
              // data 传入需要局部更新的数据
              data: {
                zhuantai: "任务中",
                changeImage: "../../images/ing.png"
              },
              success: function(res) {
                wx.navigateTo({
                  url: '../../pages/fuwu/fuwu',
                })
                wx.showToast({
                  title: '修改成功'
                }, 1500)
              }
            })
          }
        }
      })
    }
    if (res.currentTarget.dataset.zhuantai == "任务中") {
      wx.showModal({
        title: "提示",
        content: "是否已完成？",
        success: function(e) {
          if (e.confirm == true) {
            db.collection('fuwu').doc(res.currentTarget.dataset.id).update({
              // data 传入需要局部更新的数据
              data: {
                zhuantai: "已完成",
                changeImage: "../../images/wan.png"
              },
              success: function(res) {
                wx.navigateTo({
                  url: '../../pages/fuwu/fuwu'
                })
                wx.showToast({
                  title: '修改成功'
                }, 1500)
              }
            })
          }
        }
      })
    }
  },
  liao: function() {
    wx.showToast({
      title: "下次找你",
      mask: false,
      icon: "none"
    })
  },
  fabu: function() {
    wx.navigateTo({
      url: '../../pages/Ffuwu/Ffuwu',
    })
  },
  getUserInfo: function(e) {
    var that = this
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorage({
      key: 'userInfo',
      data: this.data.userInfo
    })
  },
  onShow: function() {
    var that = this
    var userInfo = that.data.userInfo;
    var zhuUrl = this.data.zhuUrl
    setTimeout(
      function() {
        that.setData({
          zhuUrl: "../../images/zhu.png"
        })
      }, 2000)
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data
        })
      }
    })

    var that = this
    var zong = that.data.zong
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('fuwu').orderBy('time', 'desc').get({
      success: function(res) {
        that.setData({
          zong: res
        })
      }
    })
  },
  zhu: function() {
    wx.showModal({
      title: '温馨提示',
      content: '校园跑腿本校学生都可以接单\n为保护大家权益\n发布任务时注意个人隐私\n接单直接通过电话联系\n任务完成发单人请点击任务完成',
      showCancel: false,
      confirmText: '已了解',
      success: function(res) {
        if (res.confirm == true) {
          wx.showToast({
            title: '非常完美\n欢迎进入本服务',
            icon: "none"
          })
        }
      }
    })
  }
})