Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList:['庭威超帅']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  show:function(){
    wx.previewImage({
      urls: ["https://www.blackboy.club/M/yq.jpg"]
    })
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: '19924828970',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})