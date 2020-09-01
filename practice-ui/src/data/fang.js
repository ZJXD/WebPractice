const FANG_LIST = {
  community: [{
    id: 1,
    name: '七贤郡',
    // 总住户
    house_count: 2058,
    // 建筑面积 ㎡
    area: 495000
  },
  {
    id: 2,
    name: '劝学里',
    house_count: 929,
    area: 133495.5
  },
  {
    id: 3,
    name: '大溪谷'
  },
  // {
  //   id: 4,
  //   name: "未来城",
  //   house_count:5290,
  //   area: 192536
  // },
  // {
  //   id: 5,
  //   name: "和光尘樾"
  // },
  {
    id: 6,
    name: '融信澜天',
    house_count: 540,
    area: 248791
  },
  {
    id: 7,
    name: '和昌府',
    house_count: 856,
    area: 124659
  }],
  // 安居客数据
  anjukeData: [
    {
      time: '2019-4-13',
      data: [
        {
          communityId: 1,
          // 均价
          avg_price: 25850,
          // 二手房套数
          fang_count: 450,
          // 出租套数
          zu_cunt: 76
        }
      ]
    },
    {
      time: '2019-7-13',
      data: [
        {
          communityId: 1,
          avg_price: 26334,
          fang_count: 232,
          zu_cunt: 31
        },
        {
          communityId: 4,
          avg_price: 30885,
          fang_count: 358,
          zu_cunt: 162
        },
        {
          communityId: 7,
          avg_price: 28733,
          fang_count: 327,
          zu_cunt: 6
        }
      ]
    },
    {
      time: '2019-10-13',
      data: [
        {
          communityId: 1,
          avg_price: 26426,
          fang_count: 133,
          zu_cunt: 9
        },
        {
          communityId: 2,
          avg_price: 22358,
          fang_count: 110,
          zu_cunt: 5
        },
        {
          communityId: 4,
          avg_price: 30854,
          fang_count: 280,
          zu_cunt: 35
        },
        {
          communityId: 7,
          avg_price: 28224,
          fang_count: 198,
          zu_cunt: 64
        }
      ]
    },
    {
      time: '2019-11-09',
      data: [
        {
          communityId: 1,
          avg_price: 26492,
          fang_count: 321,
          zu_cunt: 59
        },
        {
          communityId: 2,
          avg_price: 25489,
          fang_count: 181,
          zu_cunt: 35
        }
      ]
    },
    {
      time: '2020-1-1',
      data: [
        {
          communityId: 1,
          avg_price: 26724,
          fang_count: 15,
          zu_cunt: 77
        },
        {
          communityId: 2,
          avg_price: 25157,
          fang_count: 42,
          zu_cunt: 38
        }
      ]
    },
    {
      time: '2020-2-11',
      data: [
        {
          communityId: 1,
          avg_price: 25685,
          fang_count: 14,
          zu_cunt: 13
        }
      ]
    },
    {
      time: '2020-4-18',
      data: [
        {
          communityId: 1,
          avg_price: 26377,
          fang_count: 91,
          zu_cunt: 59
        }
      ]
    },
    {
      time: '2020-5-11',
      data: [
        {
          communityId: 1,
          avg_price: 26472,
          fang_count: 43,
          zu_cunt: 59
        },
        {
          communityId: 2,
          avg_price: 26370,
          fang_count: 18,
          zu_cunt: 29
        }
      ]
    },
    {
      time: '2020-7-27',
      data: [
        {
          communityId: 1,
          avg_price: 26558,
          fang_count: 115,
          zu_cunt: 58
        }
      ]
    },
    {
      time: '2020-8-11',
      data: [
        {
          communityId: 1,
          avg_price: 26337,
          fang_count: 91,
          zu_cunt: 56
        },
        {
          communityId: 2,
          avg_price: 27140,
          fang_count: 47,
          zu_cunt: 50
        },
        {
          communityId: 3,
          avg_price: 25164,
          fang_count: 5,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 32175,
          fang_count: 130,
          zu_cunt: 63
        },
        {
          communityId: 5,
          avg_price: 22637,
          fang_count: 13,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28200,
          fang_count: 95,
          zu_cunt: 92
        },
        {
          communityId: 7,
          avg_price: 29381,
          fang_count: 58,
          zu_cunt: 65
        }
      ]
    },
    {
      time: '2020-8-21',
      data: [
        {
          communityId: 1,
          avg_price: 26171,
          fang_count: 137,
          zu_cunt: 66
        },
        {
          communityId: 2,
          avg_price: 27043,
          fang_count: 81,
          zu_cunt: 69
        },
        {
          communityId: 3,
          avg_price: 25127,
          fang_count: 4,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 32630,
          fang_count: 68,
          zu_cunt: 58
        },
        {
          communityId: 5,
          avg_price: 20868,
          fang_count: 15,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 28347,
          fang_count: 193,
          zu_cunt: 120
        },
        {
          communityId: 7,
          avg_price: 29481,
          fang_count: 28,
          zu_cunt: 57
        }
      ]
    },
    {
      time: '2020-9-1',
      data: [
        {
          communityId: 1,
          avg_price: 26109,
          fang_count: 98,
          zu_cunt: 83
        },
        {
          communityId: 2,
          avg_price: 27042,
          fang_count: 67,
          zu_cunt: 39
        },
        {
          communityId: 3,
          avg_price: 24850,
          fang_count: 5,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 33057,
          fang_count: 96,
          zu_cunt: 41
        },
        {
          communityId: 5,
          avg_price: 19452,
          fang_count: 19,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28303,
          fang_count: 107,
          zu_cunt: 100
        },
        {
          communityId: 7,
          avg_price: 29682,
          fang_count: 78,
          zu_cunt: 46
        }
      ]
    }
  ],
  // 链家数据
  lianjiaData: [
    {
      time: '2020-8-11',
      data: [
        {
          communityId: 1,
          avg_price: 25327,
          fang_count: 102
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25678,
          fang_count: 69
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32509,
          fang_count: 35
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 29923,
          fang_count: 107
        },
        {
          communityId: 7,
          avg_price: 29279,
          fang_count: 40
        }
      ]
    },
    {
      time: '2020-8-21',
      data: [
        {
          communityId: 1,
          avg_price: 25327,
          fang_count: 108
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25679,
          fang_count: 65
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32509,
          fang_count: 34
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 29927,
          fang_count: 100
        },
        {
          communityId: 7,
          avg_price: 29272,
          fang_count: 41
        }
      ]
    },
    {
      time: '2020-9-1',
      data: [
        {
          communityId: 1,
          avg_price: 25327,
          fang_count: 103
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25679,
          fang_count: 62
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32509,
          fang_count: 34
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 29927,
          fang_count: 99
        },
        {
          communityId: 7,
          avg_price: 29272,
          fang_count: 41
        }
      ]
    }
  ]
}

export default FANG_LIST
