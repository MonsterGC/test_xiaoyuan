Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanId: '0',
    xuan: '睡前故事',
    Ztie: [],
    iconArray: [{
      "iconUrl": '../../images/qw/1.png',
        "iconText": '睡前故事'
      },
      {
        "iconUrl": '../../images/qw/2.png',
        "iconText": '校园笑话'
      },
      {
        "iconUrl": '../../images/qw/3.png',
        "iconText": '玩物区'
      },
      {
        "iconUrl": '../../images/qw/4.png',
        "iconText": '趣味区'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '校园趣味',
    })
    wx.showLoading({
      title: "数据加载中",
      mask: true
    })
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    var Ztie = that.data.Ztie;
    db.collection('quwei').where({
        xuan: this.data.xuan
      })
      .get({
        success: function(res) {
          that.setData({
            Ztie: res.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  quuwei: function(res) {
    var xuanId = this.data.xuanId;
    var xuan2 = this.data.xuan;
    var Ztie = this.data.Ztie;
    this.setData({
      xuanId: res.currentTarget.dataset.id
    })
    var that = this;
    if (res.currentTarget.dataset.id == "1") {
      that.setData({
        xuan: "校园笑话"
      })
    } else if (res.currentTarget.dataset.id == "2") {
      that.setData({
        xuan: "玩物区"
      })
    } else if (res.currentTarget.dataset.id == "3") {
      that.setData({
        xuan: "趣味区"
      })
    } else {
      that.setData({
        xuan: "睡前故事"
      })
    }
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    var Ztie = that.data.Ztie;
    db.collection('quwei').where({
        xuan: that.data.xuan
      })
      .get({
        success: function(res) {
          that.setData({
            Ztie: res.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  qw: function() {
    wx.navigateTo({
      url: '../../pages/qwtie/qwtie',
    })
  },
  onReady: function() {
    wx.hideLoading({})
  }
})