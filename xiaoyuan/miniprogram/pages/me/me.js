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
    zishu: "0",
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
    wx.showLoading({
      title: "加载中...",
      mask: true
    })
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
    wx.hideLoading({})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // var that = this
    // wx.cloud.init()
    // const db = wx.cloud.database()
    // if (this.data.xuanId == "0") {
    //   db.collection("quwei").orderBy('time', 'desc').get({
    //     success: function(res) {
    //       that.setData({
    //         zong: res.data
    //       })
    //     }
    //   })
    // } else if (this.data.xuanId == "1") {
    //   db.collection("youhua").where({
    //     name: that.data.userInfo.nickName
    //   }).orderBy('time', 'desc').get({
    //     success: function(res) {
    //       that.setData({
    //         zong: res.data
    //       })
    //     }
    //   })
    // } else if (this.data.xuanId == "2") {
    //   db.collection("fuwu").where({
    //     name: that.data.userInfo.nickName,
    //     zhuantai: "申请中"
    //   }).orderBy('time', 'desc').get({
    //     success: function(res) {
    //       that.setData({
    //         zong: res.data
    //       })
    //     }
    //   })
    // }
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
    if (xuan == "fuwu") {
      db.collection(xuan).where({
        name: that.data.userInfo.nickName,
        zhuantai: "申请中"
      }).orderBy('time', 'desc').get({
        success: function(res) {
          that.setData({
            zong: res.data
          })
        }
      })
    } else if (xuan == "youhua") {
      db.collection(xuan).where({
        Name: that.data.userInfo.nickName
      }).orderBy('time', 'desc').get({
        success: function(res) {
          that.setData({
            zong: res.data
          })
        }
      })
    } else if (xuan == "quwei") {
      db.collection(xuan).orderBy('time', 'desc').get({
        success: function(res) {
          that.setData({
            zong: res.data
          })
        }
      })
    } else {
      var show = that.data.show
      that.setData({
        show: true
      })
    }
  },
  areanumber: function(e) {
    this.setData({
      zishu: e.detail.value.length
    })
  },
  formSubmit: function(res) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('kui').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        kui: res.detail.value.kui,
        name: that.data.userInfo.nickName,
        time: that.data.time
      },
      success: function() {
        wx.showToast({
          title: '发布成功',
          icon: "success",
          duration: 1500
        })
      }
    })
  },
  del: function(res) {
    var that = this
    var xuanId = this.data.xuanId
    wx.showModal({
      title: "提示",
      content: "是否删除？",
      success: function(e) {
        if (e.confirm == true) {
          if (xuanId == "0") {
            wx.showToast({
              title: '请联系管理员删除',
              icon: "none"
            })
          } else if (xuanId == "1") {
            that.shan("youhua", res.currentTarget.dataset.id, xuanId);
          }
        }
      }
    })
  },
  shan: function(xuan, Id, xuanId) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection(xuan).doc(Id).remove({
      success: function() {
        if (that.data.xuanId == "0") {
          db.collection("quwei").orderBy('time', 'desc').get({
            success: function(res) {
              that.setData({
                zong: res.data
              })
            }
          })
        } else if (that.data.xuanId == "1") {
          db.collection("youhua").where({
            name: that.data.userInfo.nickName
          }).orderBy('time', 'desc').get({
            success: function(res) {
              that.setData({
                zong: res.data
              })
            }
          })
        } else if (that.data.xuanId == "2") {
          db.collection("fuwu").where({
            name: that.data.userInfo.nickName,
            zhuantai: "申请中"
          }).orderBy('time', 'desc').get({
            success: function(res) {
              that.setData({
                zong: res.data
              })
            }
          })
        }
      }
    })
  },
  sq: function(res) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database()
    wx.showModal({
      title: "提示",
      content: "是否记住号码,接单？",
      success: function (e) {
        if (e.confirm == true) {
          db.collection('fuwu').doc(res.currentTarget.dataset.id).update({
            // data 传入需要局部更新的数据
            data: {
              zhuantai: "任务中",
              changeImage: "../../images/ing.png"
            },
            success: function (res) {
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
})