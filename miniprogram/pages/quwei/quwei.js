Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanId: '0',
    xuan: '睡前故事',
    Ztie: [],
    iconArray: [{
      "iconUrl": 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3900591194,3278483295&fm=26&gp=0.jpg',
        "iconText": '睡前故事'
      },
      {
        "iconUrl": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3671521614,2219232999&fm=26&gp=0.jpg',
        "iconText": '校园笑话'
      },
      {
        "iconUrl": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1611447025,3567138254&fm=26&gp=0.jpg',
        "iconText": '玩物区'
      },
      {
        "iconUrl": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2255534372,3721444615&fm=26&gp=0.jpg',
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