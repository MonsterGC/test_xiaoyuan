const app = getApp()
Page({
  data: {
    hendaoId: '0',
    userInfo: {},
    isShow: false,
    liuyan: {},
    huifuId: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    liaoZy: {},
    hendao: [{
        'id': '0',
        'name': '全部'
      }, {
        'id': '1',
        'name': '石油'
      },
      {
        'id': '2',
        'name': '化工'
      },
      {
        'id': '3',
        'name': '环境'
      },
      {
        'id': '4',
        'name': '机电'
      },
      {
        'id': '5',
        'name': '电信'
      },
      {
        'id': '6',
        'name': '建工'
      },
      {
        'id': '7',
        'name': '经管'
      },
      {
        'id': '8',
        'name': '理学院'
      },
      {
        'id': '9',
        'name': '外国语'
      },
      {
        'id': '10',
        'name': '文法'
      },
      {
        'id': '11',
        'name': '体育'
      },
      {
        'id': '12',
        'name': '艺术'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: "数据加载中",
      mask: true
    })
    wx.setNavigationBarTitle({
      title: '校园友话',
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
  Dhendao: function(res) {
    var that = this;
    var xuan = ''
    var hendaoId = that.data.hendaoId
    this.setData({
      hendaoId: res.currentTarget.dataset.id
    })
    if (res.currentTarget.dataset.id == "1") {
      xuan = "石油"
    } else if (res.currentTarget.dataset.id == "2") {
      xuan = "化工"
    } else if (res.currentTarget.dataset.id == "3") {
      xuan = "环境"
    } else if (res.currentTarget.dataset.id == "4") {
      xuan = "机电"
    } else if (res.currentTarget.dataset.id == "5") {
      xuan = "电信"
    } else if (res.currentTarget.dataset.id == "6") {
      xuan = "建工"
    } else if (res.currentTarget.dataset.id == "7") {
      xuan = "经管"
    } else if (res.currentTarget.dataset.id == "8") {
      xuan = "理学院"
    } else if (res.currentTarget.dataset.id == "9") {
      xuan = "外国语"
    } else if (res.currentTarget.dataset.id == "10") {
      xuan = "文法"
    } else if (res.currentTarget.dataset.id == "11") {
      xuan = "体育"
    } else if (res.currentTarget.dataset.id == "12") {
      xuan = "艺术"
    } else {
      xuan = ""
    }
    wx.cloud.init()
    const db = wx.cloud.database()
    var liaoZy = that.data.liaoZy;
    if (xuan == "") {
      db.collection('youhua').orderBy('Time', 'desc').get({
        success: function(res) {
          that.setData({
            liaoZy: res.data
          })
        }
      })
    } else {
      db.collection('youhua').where({
        Xuan: xuan
      }).orderBy('Time', 'desc').get({
        success: function(res) {
          that.setData({
            liaoZy: res.data
          })
        }
      })
    }
  },
  isShow: function(res) {
    var isShow = this.data.isShow
    var huifuId = this.data.huifuId
    this.setData({
      isShow: true,
      huifuId: res.currentTarget.dataset.id
    })
  },
  isHide: function() {
    var isShow = this.data.isShow
    this.setData({
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  yh: function() {
    wx.navigateTo({
      url: '../../pages/yhtie/yhtie',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    var liaoZy = that.data.liaoZy;
    var liuyan = that.data.liuyan;
    db.collection('youhua').orderBy('time', 'desc').get({
      success: function(res) {
        that.setData({
          liaoZy: res.data
        })
      }
    })

    db.collection('huifu').get({
      success: function(res) {
        that.setData({
          liuyan: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  formSubmit: function(e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var isShow = this.data.isShow
    var that = this;
    if (e.detail.value.huifu == "") {
      that.setData({
        isShow: false
      })
      wx.showToast({
        title: "留言不能为空",
        icon: "none"
      })
    } else if (that.data.userInfo.nickName==""){
      wx.showToast({
        title: "用户未授权",
        icon: "none"
      })
    }else{
      db.collection('huifu').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          Time: that.data.time,
          huifuId: that.data.huifuId,
          huifu: e.detail.value.huifu,
          huifuName: that.data.userInfo.nickName
        },
        success: function() {
          that.setData({
            isShow: false
          })
          wx.showToast({
            title: '发布成功',
            icon: "success",
            duration: 1500
          })

          db.collection('huifu').get({
            success: function(res) {
              that.setData({
                liuyan: res.data
              })
            }
          })
        }
      })
    }
  },
  Delete_HY: function(e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    var liaoZy = that.data.liaoZy;
    var liuyan = that.data.liuyan;
    wx.showModal({
      content: '是否刪除',
      success: function(res) {
        if (res.confirm == true) {
          db.collection('youhua').doc(e.currentTarget.dataset.id).remove({
            success: function(res) {
              wx.showToast({
                title: '刪除成功',
                duration: 1000
              })
              db.collection('youhua').orderBy('Time', 'desc').get({
                success: function (res) {
                  that.setData({
                    liaoZy: res.data
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },
  onReady: function() {
    wx.hideLoading({})
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  Delete: function(e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this
    var liuyan = that.data.liuyan;
    wx.showModal({
      content: '是否刪除',
      success: function(res) {
        if (res.confirm == true) {
          db.collection('huifu').doc(e.currentTarget.dataset.id).remove({
            success: function() {
              wx.showToast({
                title: '刪除成功',
                duration: 1000
              })
              db.collection('huifu').get({
                success: function (liu) {
                  that.setData({
                    liuyan: liu.data
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorage({
      key: 'userInfo',
      data: this.data.userInfo
    })
  }
})