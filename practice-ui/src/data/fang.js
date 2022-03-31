const FANG_LIST = {
  community: [
    {
      id: 1,
      name: '七贤郡',
      // 总住户
      house_count: 2117,
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
      name: '大溪谷',
      house_count: 1950,
      area: 495000
    },
    {
      id: 4,
      name: '未来城',
      house_count: 5290,
      area: 192536
    },
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
    },
    {
      id: 8,
      name: '缦云坊',
      house_count: 2308,
      area: 124659
    }
  ],
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
    },
    {
      time: '2020-9-11',
      data: [
        {
          communityId: 1,
          avg_price: 26092,
          fang_count: 85,
          zu_cunt: 96
        },
        {
          communityId: 2,
          avg_price: 27142,
          fang_count: 67,
          zu_cunt: 37
        },
        {
          communityId: 3,
          avg_price: 24570,
          fang_count: 6,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 33137,
          fang_count: 147,
          zu_cunt: 49
        },
        {
          communityId: 5,
          avg_price: 19342,
          fang_count: 25,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28237,
          fang_count: 181,
          zu_cunt: 96
        },
        {
          communityId: 7,
          avg_price: 29833,
          fang_count: 97,
          zu_cunt: 53
        }
      ]
    },
    {
      time: '2020-9-21',
      data: [
        {
          communityId: 1,
          avg_price: 26074,
          fang_count: 106,
          zu_cunt: 95
        },
        {
          communityId: 2,
          avg_price: 26944,
          fang_count: 93,
          zu_cunt: 38
        },
        {
          communityId: 3,
          avg_price: 24681,
          fang_count: 4,
          zu_cunt: 1
        },
        {
          communityId: 4,
          avg_price: 33072,
          fang_count: 119,
          zu_cunt: 43
        },
        {
          communityId: 5,
          avg_price: 19559,
          fang_count: 13,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28237,
          fang_count: 151,
          zu_cunt: 81
        },
        {
          communityId: 7,
          avg_price: 30210,
          fang_count: 101,
          zu_cunt: 57
        }
      ]
    },
    {
      time: '2020-10-21',
      data: [
        {
          communityId: 1,
          avg_price: 26052,
          fang_count: 86,
          zu_cunt: 101
        },
        {
          communityId: 2,
          avg_price: 27336,
          fang_count: 43,
          zu_cunt: 52
        },
        {
          communityId: 3,
          avg_price: 25071,
          fang_count: 2,
          zu_cunt: 1
        },
        {
          communityId: 4,
          avg_price: 33969,
          fang_count: 70,
          zu_cunt: 55
        },
        {
          communityId: 5,
          avg_price: 20838,
          fang_count: 12,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28211,
          fang_count: 39,
          zu_cunt: 84
        },
        {
          communityId: 7,
          avg_price: 30390,
          fang_count: 49,
          zu_cunt: 64
        }
      ]
    },
    {
      time: '2020-11-21',
      data: [
        {
          communityId: 1,
          avg_price: 26101,
          fang_count: 121,
          zu_cunt: 76
        },
        {
          communityId: 2,
          avg_price: 27930,
          fang_count: 53,
          zu_cunt: 54
        },
        {
          communityId: 3,
          avg_price: 25305,
          fang_count: 7,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 34886,
          fang_count: 115,
          zu_cunt: 64
        },
        {
          communityId: 5,
          avg_price: 20599,
          fang_count: 2,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 28575,
          fang_count: 63,
          zu_cunt: 75
        },
        {
          communityId: 7,
          avg_price: 30803,
          fang_count: 76,
          zu_cunt: 48
        }
      ]
    },
    {
      time: '2020-12-25',
      data: [
        {
          communityId: 1,
          avg_price: 26515,
          fang_count: 218,
          zu_cunt: 84
        },
        {
          communityId: 2,
          avg_price: 27716,
          fang_count: 90,
          zu_cunt: 36
        },
        {
          communityId: 3,
          avg_price: 25817,
          fang_count: 15,
          zu_cunt: 1
        },
        {
          communityId: 4,
          avg_price: 35014,
          fang_count: 114,
          zu_cunt: 44
        },
        {
          communityId: 5,
          avg_price: 20349,
          fang_count: 9,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 29457,
          fang_count: 60,
          zu_cunt: 101
        },
        {
          communityId: 7,
          avg_price: 31186,
          fang_count: 46,
          zu_cunt: 42
        }
      ]
    },
    {
      time: '2021-1-25',
      data: [
        {
          communityId: 1,
          avg_price: 27442,
          fang_count: 82,
          zu_cunt: 64
        },
        {
          communityId: 2,
          avg_price: 28759,
          fang_count: 43,
          zu_cunt: 28
        },
        {
          communityId: 3,
          avg_price: 25488,
          fang_count: 7,
          zu_cunt: 1
        },
        {
          communityId: 4,
          avg_price: 31943,
          fang_count: 52,
          zu_cunt: 22
        },
        {
          communityId: 5,
          avg_price: 20256,
          fang_count: 6,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 31096,
          fang_count: 17,
          zu_cunt: 41
        },
        {
          communityId: 7,
          avg_price: 28882,
          fang_count: 55,
          zu_cunt: 37
        }
      ]
    },
    {
      time: '2021-2-25',
      data: [
        {
          communityId: 1,
          avg_price: 28130,
          fang_count: 85,
          zu_cunt: 46
        },
        {
          communityId: 2,
          avg_price: 29180,
          fang_count: 54,
          zu_cunt: 26
        },
        {
          communityId: 3,
          avg_price: 25093,
          fang_count: 8,
          zu_cunt: 2
        },
        {
          communityId: 4,
          avg_price: 33258,
          fang_count: 132,
          zu_cunt: 28
        },
        {
          communityId: 5,
          avg_price: 19836,
          fang_count: 2,
          zu_cunt: 0
        },
        {
          communityId: 6,
          avg_price: 33611,
          fang_count: 38,
          zu_cunt: 82
        },
        {
          communityId: 7,
          avg_price: 33269,
          fang_count: 38,
          zu_cunt: 29
        }
      ]
    },
    {
      time: '2021-4-25',
      data: [
        {
          communityId: 1,
          avg_price: 30024,
          fang_count: 121,
          zu_cunt: 85
        },
        {
          communityId: 2,
          avg_price: 31383,
          fang_count: 46,
          zu_cunt: 40
        },
        {
          communityId: 3,
          avg_price: 25452,
          fang_count: 8,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 37357,
          fang_count: 152,
          zu_cunt: 57
        },
        {
          communityId: 5,
          avg_price: 26080,
          fang_count: 3,
          zu_cunt: 2
        },
        {
          communityId: 6,
          avg_price: 35326,
          fang_count: 14,
          zu_cunt: 93
        },
        {
          communityId: 7,
          avg_price: 36299,
          fang_count: 26,
          zu_cunt: 57
        }
      ]
    },
    {
      time: '2021-6-25',
      data: [
        {
          communityId: 1,
          avg_price: 32329,
          fang_count: 106,
          zu_cunt: 85
        },
        {
          communityId: 2,
          avg_price: 32693,
          fang_count: 50,
          zu_cunt: 61
        },
        {
          communityId: 3,
          avg_price: 25161,
          fang_count: 2,
          zu_cunt: 0
        },
        {
          communityId: 4,
          avg_price: 37245,
          fang_count: 108,
          zu_cunt: 41
        },
        {
          communityId: 5,
          avg_price: 21391,
          fang_count: 6,
          zu_cunt: 4
        },
        {
          communityId: 6,
          avg_price: 37112,
          fang_count: 104,
          zu_cunt: 79
        },
        {
          communityId: 7,
          avg_price: 36532,
          fang_count: 25,
          zu_cunt: 53
        }
      ]
    },
    {
      time: '2021-7-25',
      data: [
        {
          communityId: 1,
          avg_price: 33028,
          fang_count: 133,
          zu_cunt: 84
        },
        {
          communityId: 2,
          avg_price: 32916,
          fang_count: 47,
          zu_cunt: 37
        },
        {
          communityId: 3,
          avg_price: 27762,
          fang_count: 42,
          zu_cunt: 7
        },
        {
          communityId: 4,
          avg_price: 37450,
          fang_count: 79,
          zu_cunt: 49
        },
        {
          communityId: 5,
          avg_price: 20792,
          fang_count: 3,
          zu_cunt: 5
        },
        {
          communityId: 6,
          avg_price: 37013,
          fang_count: 47,
          zu_cunt: 66
        },
        {
          communityId: 7,
          avg_price: 37746,
          fang_count: 12,
          zu_cunt: 64
        }
      ]
    },
    {
      time: '2021-10-22',
      data: [
        {
          communityId: 1,
          avg_price: 35091,
          fang_count: 72,
          zu_cunt: 175
        },
        {
          communityId: 2,
          avg_price: 36436,
          fang_count: 56,
          zu_cunt: 29
        },
        {
          communityId: 3,
          avg_price: 34683,
          fang_count: 0,
          zu_cunt: 18
        },
        {
          communityId: 4,
          avg_price: 40382,
          fang_count: 36,
          zu_cunt: 56
        },
        {
          communityId: 5,
          avg_price: 20911,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 40958,
          fang_count: 61,
          zu_cunt: 145
        },
        {
          communityId: 7,
          avg_price: 39211,
          fang_count: 23,
          zu_cunt: 92
        },
        {
          communityId: 8,
          avg_price: 33848,
          fang_count: 79,
          zu_cunt: 56
        }
      ]
    },
    {
      time: '2021-11-5',
      data: [
        {
          communityId: 1,
          avg_price: 34797,
          fang_count: 82,
          zu_cunt: 173
        },
        {
          communityId: 2,
          avg_price: 36108,
          fang_count: 36,
          zu_cunt: 21
        },
        {
          communityId: 3,
          avg_price: 34683,
          fang_count: 2,
          zu_cunt: 10
        },
        {
          communityId: 4,
          avg_price: 40123,
          fang_count: 41,
          zu_cunt: 65
        },
        {
          communityId: 5,
          avg_price: 20911,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 41276,
          fang_count: 22,
          zu_cunt: 162
        },
        {
          communityId: 7,
          avg_price: 39248,
          fang_count: 25,
          zu_cunt: 71
        },
        {
          communityId: 8,
          avg_price: 33967,
          fang_count: 66,
          zu_cunt: 72
        }
      ]
    },
    {
      time: '2021-12-20',
      data: [
        {
          communityId: 1,
          avg_price: 34157,
          fang_count: 80,
          zu_cunt: 149
        },
        {
          communityId: 2,
          avg_price: 36204,
          fang_count: 38,
          zu_cunt: 30
        },
        {
          communityId: 3,
          avg_price: 34683,
          fang_count: 4,
          zu_cunt: 15
        },
        {
          communityId: 4,
          avg_price: 39084,
          fang_count: 40,
          zu_cunt: 83
        },
        {
          communityId: 5,
          avg_price: 20911,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 40087,
          fang_count: 21,
          zu_cunt: 106
        },
        {
          communityId: 7,
          avg_price: 39158,
          fang_count: 13,
          zu_cunt: 39
        },
        {
          communityId: 8,
          avg_price: 35251,
          fang_count: 82,
          zu_cunt: 41
        }
      ]
    },
    {
      time: '2022-01-26',
      data: [
        {
          communityId: 1,
          avg_price: 31289,
          fang_count: 55,
          zu_cunt: 97
        },
        {
          communityId: 2,
          avg_price: 35845,
          fang_count: 26,
          zu_cunt: 22
        },
        {
          communityId: 3,
          avg_price: 36462,
          fang_count: 1,
          zu_cunt: 8
        },
        {
          communityId: 4,
          avg_price: 37229,
          fang_count: 33,
          zu_cunt: 46
        },
        {
          communityId: 5,
          avg_price: 20911,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 40291,
          fang_count: 28,
          zu_cunt: 46
        },
        {
          communityId: 7,
          avg_price: 38055,
          fang_count: 12,
          zu_cunt: 29
        },
        {
          communityId: 8,
          avg_price: 33666,
          fang_count: 45,
          zu_cunt: 19
        }
      ]
    },
    {
      time: '2022-02-21',
      data: [
        {
          communityId: 1,
          avg_price: 30762,
          fang_count: 141,
          zu_cunt: 85
        },
        {
          communityId: 2,
          avg_price: 34667,
          fang_count: 24,
          zu_cunt: 20
        },
        {
          communityId: 3,
          avg_price: 36948,
          fang_count: 15,
          zu_cunt: 2
        },
        {
          communityId: 4,
          avg_price: 38619,
          fang_count: 72,
          zu_cunt: 61
        },
        {
          communityId: 5,
          avg_price: 20911,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 40385,
          fang_count: 95,
          zu_cunt: 84
        },
        {
          communityId: 7,
          avg_price: 37574,
          fang_count: 29,
          zu_cunt: 44
        },
        {
          communityId: 8,
          avg_price: 33158,
          fang_count: 136,
          zu_cunt: 28
        }
      ]
    },
    {
      time: '2022-03-21',
      color: '#f00',
      data: [
        {
          communityId: 1,
          avg_price: 31022,
          fang_count: 94,
          zu_cunt: 66
        },
        {
          communityId: 2,
          avg_price: 34813,
          fang_count: 17,
          zu_cunt: 11
        },
        {
          communityId: 3,
          avg_price: 34937,
          fang_count: 39,
          zu_cunt: 39
        },
        {
          communityId: 4,
          avg_price: 38769,
          fang_count: 115,
          zu_cunt: 65
        },
        {
          communityId: 5,
          avg_price: 33333,
          fang_count: 0,
          zu_cunt: 1
        },
        {
          communityId: 6,
          avg_price: 40200,
          fang_count: 64,
          zu_cunt: 64
        },
        {
          communityId: 7,
          avg_price: 37926,
          fang_count: 19,
          zu_cunt: 60
        },
        {
          communityId: 8,
          avg_price: 33025,
          fang_count: 100,
          zu_cunt: 20
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
    },
    {
      time: '2020-9-11',
      data: [
        {
          communityId: 1,
          avg_price: 25615,
          fang_count: 103
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25747,
          fang_count: 60
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32757,
          fang_count: 35
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 30250,
          fang_count: 98
        },
        {
          communityId: 7,
          avg_price: 29484,
          fang_count: 41
        }
      ]
    },
    {
      time: '2020-9-21',
      data: [
        {
          communityId: 1,
          avg_price: 25615,
          fang_count: 106
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25747,
          fang_count: 57
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32757,
          fang_count: 34
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 30250,
          fang_count: 84
        },
        {
          communityId: 7,
          avg_price: 29484,
          fang_count: 40
        }
      ]
    },
    {
      time: '2020-10-21',
      data: [
        {
          communityId: 1,
          avg_price: 25799,
          fang_count: 112
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25505,
          fang_count: 62
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 32836,
          fang_count: 30
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 30467,
          fang_count: 59
        },
        {
          communityId: 7,
          avg_price: 29537,
          fang_count: 38
        }
      ]
    },
    {
      time: '2020-11-21',
      data: [
        {
          communityId: 1,
          avg_price: 26024,
          fang_count: 105
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25454,
          fang_count: 58
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 33438,
          fang_count: 27
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 30725,
          fang_count: 54
        },
        {
          communityId: 7,
          avg_price: 30131,
          fang_count: 42
        }
      ]
    },
    {
      time: '2020-12-25',
      data: [
        {
          communityId: 1,
          avg_price: 26103,
          fang_count: 84
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 25872,
          fang_count: 62
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 34365,
          fang_count: 21
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 31548,
          fang_count: 41
        },
        {
          communityId: 7,
          avg_price: 30768,
          fang_count: 29
        }
      ]
    },
    {
      time: '2021-1-25',
      data: [
        {
          communityId: 1,
          avg_price: 26260,
          fang_count: 63
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 26027,
          fang_count: 66
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 34850,
          fang_count: 20
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 32277,
          fang_count: 37
        },
        {
          communityId: 7,
          avg_price: 31058,
          fang_count: 25
        }
      ]
    },
    {
      time: '2021-2-25',
      data: [
        {
          communityId: 1,
          avg_price: 26678,
          fang_count: 51
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 26216,
          fang_count: 69
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 35323,
          fang_count: 24
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 32832,
          fang_count: 37
        },
        {
          communityId: 7,
          avg_price: 31428,
          fang_count: 30
        }
      ]
    },
    {
      time: '2021-4-25',
      data: [
        {
          communityId: 1,
          avg_price: 26678,
          fang_count: 34
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 26216,
          fang_count: 50
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 35323,
          fang_count: 32
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 32832,
          fang_count: 46
        },
        {
          communityId: 7,
          avg_price: 36299,
          fang_count: 32
        }
      ]
    },
    {
      time: '2021-4-25',
      color: '#00F',
      data: [
        {
          communityId: 1,
          avg_price: 26678,
          fang_count: 34
          // zu_cunt:56
        },
        {
          communityId: 2,
          avg_price: 26216,
          fang_count: 50
        },
        {
          communityId: 3,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 4,
          avg_price: 35323,
          fang_count: 32
        },
        {
          communityId: 5,
          avg_price: 20000,
          fang_count: null
        },
        {
          communityId: 6,
          avg_price: 32832,
          fang_count: 46
        },
        {
          communityId: 7,
          avg_price: 36299,
          fang_count: 32
        }
      ]
    }
  ]
}

export default FANG_LIST
