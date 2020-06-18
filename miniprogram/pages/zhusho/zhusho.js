Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502117595,624914180&fm=26&gp=0.jpg',
      'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00601-2008.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3577173310,1161811675&fm=26&gp=0.jpg'
    ],
    autoplay: true,
    interval: 2000,
    duration: 1000,
    daohanId: '0',
    daohanY: [
      {
        "daohanName": "周边",
        "daohanHD": [{
          "Url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=362165224,1394925354&fm=26&gp=0.jpg",
            "Title": "聚一聚",
            "Text": "技术、游戏",
            "Address": "茂名市官渡市场旁边",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=398893782,1183773623&fm=26&gp=0.jpg",
              "imageUrl": [
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1093528289,3833387666&fm=15&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002404113,3672656520&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=13701617,3050035410&fm=15&gp=0.jpg',
              ],
              "imageUrl2": [
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1093528289,3833387666&fm=15&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002404113,3672656520&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=13701617,3050035410&fm=15&gp=0.jpg',
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2584296037,92727797&fm=26&gp=0.jpg",
            "Title": "冲呀",
            "Text": "设计、策划、秒杀",
            "Address": "茂名市油校对面",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3530416731,3384837049&fm=26&gp=0.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=243526842,3040939463&fm=26&gp=0.jpg",
            "Title": "皇朝宾馆",
            "Text": "团队、游戏、竞技",
            "Address": "茂名官渡三路139",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1603175167,994706461&fm=26&gp=0.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2153813961,3946062446&fm=15&gp=0.jpg",
            "Title": "龙游广场",
            "Text": "魔术、挂机",
            "Address": "茂名市中心东汇城",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          }
        ]
      },
      {
        "daohanName": "友校咨询",
        "daohanHD": [{
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_01.jpg",
            "Title": "茂名娱乐广场",
            "Text": "开心、炫耀",
            "Address": "茂名市官渡市场旁边",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_02.jpg",
            "Title": "科技环游世界",
            "Text": "设计、策划、完美",
            "Address": "茂名市油校对面",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
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
            "Address": "茂名市中心东汇城",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_05.jpg",
            "Title": "味信诚",
            "Text": "表演、训练、跳舞",
            "Address": "广东石油化工学院内部",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_06.jpg",
            "Title": "交际龙额",
            "Text": "表演、训练、跳舞",
            "Address": "交际龙额广场",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/le/le_07.jpg",
            "Title": "会议室健身房",
            "Text": "训练、跳舞",
            "Address": "表演化石对面",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          }
        ]
      },
      {
        "daohanName": "工作",
        "daohanHD": [{
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_01.jpg",
            "Title": "信息工作室",
            "Text": "技术、规划、编程",
            "Address": "中专楼二楼",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_02.jpg",
            "Title": "信阳工作室",
            "Text": "设计、策划",
            "Address": "茂名市油校对面",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_03.jpg",
            "Title": "高州编程小组",
            "Text": "学习、团结、编程",
            "Address": "茂名高州高州一中",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_04.jpg",
            "Title": "课外学习小组",
            "Text": "技术、课程、魔术",
            "Address": "茂名市中心东汇城",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_05.jpg",
            "Title": "法中会堂",
            "Text": "演讲",
            "Address": "广东石油化工学院内部",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          },
          {
            "Url": "https://blackboy.club/xiaoyuan/zhusho/gj/gj_06.jpg",
            "Title": "科技会所",
            "Text": "演讲、比赛、国际",
            "Address": "综合楼对m面",
            "Image": [{
              "tell": "12312312312",
              "Title02": "欢迎光临",
              "TitleText": "本店24小时不打烊，欢迎前来购买",
              "TImage": "https://blackboy.club/xiaoyuan/zhusho/chi/chi_04.jpg",
              "imageUrl": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg"
              ],
              "imageUrl2": [
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_03.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_02.jpg",
                "https://blackboy.club/xiaoyuan/zhusho/chi/chi_01.jpg"
              ],
              "Text": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
            }]
          }
        ]
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
      title: '校园助手',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  daohan: function(res) {
    var daohanId = this.data.daohanId;
    this.setData({
      daohanId: res.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  xianxi: function(res) {
    console.log(res.currentTarget.dataset)
    wx.navigateTo({
      url: `../../pages/xianxi/xianxi?data=${JSON.stringify(res.currentTarget.dataset)}`
    })
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
  onReady: function() {
    wx.hideLoading({})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})