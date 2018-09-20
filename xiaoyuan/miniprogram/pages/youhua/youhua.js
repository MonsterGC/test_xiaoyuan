Page({

  /**
   * 页面的初始数据
   */
  data: {
    hendaoId: '0',
    hendao: [{
        'id': '0',
        'name': '全部',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": [{
                "huifuId": "0",
                "huifuName": "小陈😜",
                "huifuText": "这个比较好的喔！我们下次见面吧。可以相互撩一撩"
              },
              {
                "huifuId": "1",
                "huifuName": "小碗",
                "huifuText": "这个不好吧！我怕我太帅吓死你喔！哈哈哈😂"
              },
              {
                "huifuId": "3",
                "huifuName": "小陈😜",
                "huifuText": "可以的！我们下次见面聊吧😁"
              },
              {
                "huifuId": "4",
                "huifuName": "ZeroIce",
                "huifuText": "你们两个有点骚，我有点怀疑你们两个是不是基的😱哈哈哈"
              }
            ]
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "按照参考资料，呢爬取的原始网页源码，你看看你自己doc里的语法写对没",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "你网上查一下 python 生成器，有这个方法的，查询生成器的下一个数据",
            "huifu": [{
              "huifuId": "0",
              "huifuName": "隔壁小子",
              "huifuText": "这个还不是很懂喔，你看着办吧"
            }, {
              "huifuId": "1",
              "huifuName": "小陈😜",
              "huifuText": "+1"
            }, {
              "huifuId": "2",
              "huifuName": "小碗",
              "huifuText": "好吧！我再看看吧"
            }]
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "我觉得问题出现在页面分析上",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "就是你上面的response.doc()",
            "huifu": []
          }
        ]
      }, {
        'id': '1',
        'name': '石油',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "按照参考资料，呢爬取的原始网页源码，你看看你自己doc里的语法写对没",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "你网上查一下 python 生成器，有这个方法的，查询生成器的下一个数据",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "就是你上面的response.doc()",
            "huifu": []
          }
        ]
      },
      {
        'id': '2',
        'name': '化工',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "你网上查一下 python 生成器，有这个方法的，查询生成器的下一个数据",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "我觉得问题出现在页面分析上",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "就是你上面的response.doc()",
            "huifu": []
          }
        ]
      },
      {
        'id': '3',
        'name': '环境',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "线上报名哦 ，小可爱们，还不快来线上报名，比其他人先走一步！",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "OPPO A5手机全新机正品oppo新品a5 a3智能全面屏A1 A73 r11s a57 r15官方4G全网通正品OPPOa5限量版 超薄手机",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "证书编号：2018011606083405证书状态：有效产品名称：TD-LTE数字移动电话机3C规格型号：PBAM00 （电源适配器：AK733JH、AK733YH、AK733KX、AK733CY；输出：5...产品名称：OPPO A5CPU型号: SDM450BOPPO型号: A5机身颜色: 幻镜粉 幻镜蓝运行内存RAM: 4GB存储容量: 4 + 64GB 3 + 64GB网络模式: 双卡多模",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "我觉得问题出现在页面分析上",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "就是你上面的response.doc()",
            "huifu": []
          }
        ]
      },
      {
        'id': '4',
        'name': '机电',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "就是你上面的response.doc()",
            "huifu": []
          }
        ]
      },
      {
        'id': '5',
        'name': '电信',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "按照参考资料，呢爬取的原始网页源码，你看看你自己doc里的语法写对没",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_03.jpg",
            "liaoName": "小碗",
            "liaoText": "你网上查一下 python 生成器，有这个方法的，查询生成器的下一个数据",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "我觉得问题出现在页面分析上",
            "huifu": []
          }
        ]
      },
      {
        'id': '6',
        'name': '建工',
        'liao': [{
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
            "liaoName": "ZeroIce",
            "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
            "huifu": []
          },
          {
            "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_02.jpg",
            "liaoName": "小陈😜",
            "liaoText": "按照参考资料，呢爬取的原始网页源码，你看看你自己doc里的语法写对没",
            "huifu": []
          }
        ]
      },
      {
        'id': '7',
        'name': '经管',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "我不会告诉你 我和他官网的demo  一模一样  我的运行不了",
          "huifu": []
        }]
      },
      {
        'id': '8',
        'name': '理学院',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "此前有消息称，腾讯吃鸡游戏拿不到版号已成定局，在未来1、2个月内就会被勒令下架，且这一消息得到了腾讯游戏部门员工的佐证，工作室已经在秘密研发其他类似的大逃杀游戏。此外，该消息源还透露，对游戏的监管越来越严，腾讯和网易这样的龙头公司也未能幸免，游戏行业的至暗时刻还在后面。",
          "huifu": []
        }]
      },
      {
        'id': '9',
        'name': '外国语',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "此前有消息称，腾讯吃鸡游戏拿不到版号已成定局，在未来1、2个月内就会被勒令下架，且这一消息得到了腾讯游戏部门员工的佐证，工作室已经在秘密研发其他类似的大逃杀游戏。此外，该消息源还透露，对游戏的监管越来越严，腾讯和网易这样的龙头公司也未能幸免，游戏行业的至暗时刻还在后面。",
          "huifu": []
        }]
      },
      {
        'id': '10',
        'name': '文法',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "此前有消息称，腾讯吃鸡游戏拿不到版号已成定局，在未来1、2个月内就会被勒令下架，且这一消息得到了腾讯游戏部门员工的佐证，工作室已经在秘密研发其他类似的大逃杀游戏。此外，该消息源还透露，对游戏的监管越来越严，腾讯和网易这样的龙头公司也未能幸免，游戏行业的至暗时刻还在后面。",
          "huifu": []
        }]
      },
      {
        'id': '11',
        'name': '体育',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "此前有消息称，腾讯吃鸡游戏拿不到版号已成定局，在未来1、2个月内就会被勒令下架，且这一消息得到了腾讯游戏部门员工的佐证，工作室已经在秘密研发其他类似的大逃杀游戏。此外，该消息源还透露，对游戏的监管越来越严，腾讯和网易这样的龙头公司也未能幸免，游戏行业的至暗时刻还在后面。",
          "huifu": []
        }]
      },
      {
        'id': '12',
        'name': '艺术',
        'liao': [{
          "liaoUrl": "https://www.blackboy.club/xiaoyuan/main/main_01.jpg",
          "liaoName": "ZeroIce",
          "liaoText": "此前有消息称，腾讯吃鸡游戏拿不到版号已成定局，在未来1、2个月内就会被勒令下架，且这一消息得到了腾讯游戏部门员工的佐证，工作室已经在秘密研发其他类似的大逃杀游戏。此外，该消息源还透露，对游戏的监管越来越严，腾讯和网易这样的龙头公司也未能幸免，游戏行业的至暗时刻还在后面。",
          "huifu": []
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '校园友话',
    })
  },
  Dhendao: function(res) {
    var hendaoId = this.data.hendaoId
    this.setData({
      hendaoId: res.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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