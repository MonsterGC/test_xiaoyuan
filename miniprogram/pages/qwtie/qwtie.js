var util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    zishu: 0,
    time: util.formatTime(new Date),
    quwei: ["睡前故事", "校园笑话", "玩物区", "趣味区"],
    xuan: '睡前故事'
  },
  bindChange: function(e) {
    var xuan = this.data.xuan
    if (e.detail.value[0] == 1) {
      this.setData({
        xuan: '校园笑话'
      })
    } else if (e.detail.value[0] == 2) {
      this.setData({
        xuan: '玩物区'
      })
    } else if (e.detail.value[0] == 3){
      this.setData({
        xuan: '趣味区'
      })
    }else{
      this.setData({
        xuan: '睡前故事'
      })
    }
  },
  formSubmit: function (e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    if (e.detail.value.title == ""){
      wx.showToast({
        title : "标题不能为空",
        icon: "none"
      })
    } else if (e.detail.value.quwei==""){
      wx.showToast({
        title: "内容不能为空",
        icon: "none"
      })
    }else{
      db.collection('quwei').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          time: that.data.time,
          title: e.detail.value.title,
          xuan: that.data.xuan,
          quwei: e.detail.value.quwei
        },
        success:function(){
          wx.showToast({
            title: '发布成功',
            icon: "success",
            duration: 3000
          })
          wx.navigateTo({
            url: '../../pages/quwei/quwei',
          })
        }
      })
    }
  },
  message: function (e) {
    var that = this;
    that.setData({
      Message: e.detail.value
    })
  },
  areanumber: function (e) {
    this.setData({
      zishu: e.detail.value.length
    })
  }
})