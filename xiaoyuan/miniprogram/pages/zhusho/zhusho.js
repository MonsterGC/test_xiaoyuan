Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_01.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_02.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_03.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_04.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_05.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_06.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_07.jpg',
      'https://blackboy.club/xiaoyuan/zhusho/zhusho_08.jpg'
    ],
    autoplay: true,
    interval: 2000,
    duration: 1000,
    daohanId:'0',
    daohanY:[
      {
        "daohanName":"吃",
        "daohanHD":[
          {
            "Url":"https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
            "Title":"城中心烤奶店",
            "Text":"食品、健康、安全",
            "Address":"西门口"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
            "Title": "ZeroIce vick",
            "Text": "食品、制造",
            "Address": "油校对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
            "Title": "YY烘焙产业基地",
            "Text": "教程、自然、欧美、情调",
            "Address": "茂名高技校旁边"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
            "Title": "黑网线冰",
            "Text": "豆沙冰、饮料",
            "Address": "华侨城旁边"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_05.jpg",
            "Title": "烤奶吧",
            "Text": "饮料",
            "Address": "学校对面"
          }
        ]
      },
      {
        "daohanName": "喝",
        "daohanHD": [
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_01.jpg",
            "Title": "奶茶Ice",
            "Text": "奶茶",
            "Address": "学科楼旁边楼梯道"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_02.jpg",
            "Title": "球体哥们",
            "Text": "啤酒",
            "Address": "茂名烤肉对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_03.jpg",
            "Title": "阔佬大伙",
            "Text": "肥仔水",
            "Address": "校内三区宿舍"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_04.jpg",
            "Title": "饮一杯吧",
            "Text": "饮料",
            "Address": "学校大门口"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_05.jpg",
            "Title": "烤奶阔以",
            "Text": "烤奶",
            "Address": "学校对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_06.jpg",
            "Title": "三兄弟联盟",
            "Text": "可乐、啤酒、雪碧",
            "Address": "在心里"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_07.jpg",
            "Title": "索兰COokie",
            "Text": "全部饮料",
            "Address": "售卖机第二层"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_08.jpg",
            "Title": "萨达罗尼卡",
            "Text": "红酒",
            "Address": "英国总部隔壁商城"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_09.jpg",
            "Title": "兄弟怼怼",
            "Text": "茂名白酒",
            "Address": "大排档2号摊位"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/he/he_10.jpg",
            "Title": "莫名其妙爱上你",
            "Text": "交友",
            "Address": "茂名市中心陌陌广场"
          }
        ]
      },
      {
        "daohanName": "玩",
        "daohanHD": [
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/wan/wan_01.jpg",
            "Title": "网咖",
            "Text": "技术、游戏",
            "Address": "茂名市官渡市场旁边"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/wan/wan_02.jpg",
            "Title": "八达通网咖",
            "Text": "设计、策划、秒杀",
            "Address": "茂名市油校对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/wan/wan_03.jpg",
            "Title": "皇朝农民兵",
            "Text": "团队、游戏、竞技",
            "Address": "茂名官渡三路139"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/wan/wan_04.jpg",
            "Title": "龙游广场",
            "Text": "魔术、挂机",
            "Address": "茂名市中心东汇城"
          }
        ]
      },
      {
        "daohanName": "乐",
        "daohanHD": [
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_01.jpg",
            "Title": "茂名娱乐广场",
            "Text": "开心、炫耀",
            "Address": "茂名市官渡市场旁边"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_02.jpg",
            "Title": "科技环游世界",
            "Text": "设计、策划、完美",
            "Address": "茂名市油校对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_03.jpg",
            "Title": "隔壁那小子",
            "Text": "学习、团结",
            "Address": "茂名官渡三路139"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_04.jpg",
            "Title": "白卡Baikal",
            "Text": "技术、课程、魔术",
            "Address": "茂名市中心东汇城"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_05.jpg",
            "Title": "味信诚",
            "Text": "表演、训练、跳舞",
            "Address": "广东石油化工学院内部"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_06.jpg",
            "Title": "交际龙额",
            "Text": "表演、训练、跳舞",
            "Address": "交际龙额广场"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_07.jpg",
            "Title": "会议室健身房",
            "Text": "训练、跳舞",
            "Address": "表演化石对面"
          }
        ]
      },
      {
        "daohanName": "工作",
        "daohanHD": [
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_01.jpg",
            "Title": "信息工作室",
            "Text": "技术、规划、编程",
            "Address": "中专楼二楼"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_02.jpg",
            "Title": "信阳工作室",
            "Text": "设计、策划",
            "Address": "茂名市油校对面"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_03.jpg",
            "Title": "高州编程小组",
            "Text": "学习、团结、编程",
            "Address": "茂名高州高州一中"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_04.jpg",
            "Title": "课外学习小组",
            "Text": "技术、课程、魔术",
            "Address": "茂名市中心东汇城"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_05.jpg",
            "Title": "法中会堂",
            "Text": "演讲",
            "Address": "广东石油化工学院内部"
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_06.jpg",
            "Title": "科技会所",
            "Text": "演讲、比赛、国际",
            "Address": "综合楼对m面"
          }
        ]
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '校园助手',
    })
    console.log(this.data.daohanY[this.data.daohanId].daohanHD);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  daohan: function(res) {
    var daohanId = this.data.daohanId;
    this.setData({
      daohanId: res.currentTarget.dataset.id
    })
    console.log(daohanId);
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