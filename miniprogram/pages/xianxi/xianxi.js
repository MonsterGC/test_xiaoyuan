Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 1500,
    duration: 1000,
    address: "",
    imagetell: "",
    imagetext: "",
    imagetimage: "",
    imagetitle02: "",
    imageurl: [],
    imageurl2: [],
    text: "",
    title: "",
    titletext: "",
    url: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: "数据加载中",
      mask: true
    })
    let data = JSON.parse(options.data)
    console.log(data)
    var address = this.data.address;
    var imagetell = this.data.imagetell;
    var imagetext = this.data.imagetext;
    var imagetimage = this.data.imagetimage;
    var imagetitle02 = this.data.imagetitle02;
    var imageurl = this.data.imageurl;
    var imageurl2 = this.data.imageurl2;
    var text = this.data.text;
    var title = this.data.title;
    var titletext = this.data.titletext;
    var url = this.data.url;
    // this.setData({
    //   address: data.address,
    //   imagetell: data.imagetell,
    //   imagetext: data.imagetext,
    //   imagetimage: data.imagetimage,
    //   imagetitle02: data.imagetitle02,
    //   imageurl: data.imageurl.split(','),
    //   imageurl2: data.imageurl2.split(','),
    //   text: data.text,
    //   title: data.title,
    //   titletext: data.titletext,
    //   url: data.url
    // })
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  tell: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.imagetell,
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

  },
  onReady: function () {
    wx.hideLoading({})
  }
})