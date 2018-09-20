Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanId:'0',
    iconArray: [{
        "iconUrl": 'https://blackboy.club/xiaoyuan/quwei/gushi.png',
        "iconText": '睡前故事'
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/quwei/gaoxiao.png',
        "iconText": '校园笑话'
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/quwei/haowan.png',
        "iconText": '玩物区'
      },
      {
        "iconUrl": 'https://blackboy.club/xiaoyuan/quwei/quwei.png',
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  quuwei: function(res) {
    var xuanId = this.data.xuanId;
    this.setData({
      xuanId: res.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})