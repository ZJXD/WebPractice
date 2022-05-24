function getRow(row){
  const data = JSON.parse(row.detail.dataJson)
  const elec = data.elec
  return elec + '%'
}

const data = {
  detail: {
    code: "4",
    dataJson: `{"lng":"120.208951","elec":"100","deviceCode":"868120224916103","gpsTime":"2020-07-28 14:13:39","deviceName":"GT03C-16103","lat":"30.249044","posType":"GPS","isonline":0}`,
    gmtModified: "2020-09-03 10:40:08",
    id: 2,
    manageName: "陈维昌 ",
    manageUnit: "杭州市排水有限公司",
    planBorrowTime: "2020-07-13 00:00:00",
    name: "新塘河保洁船只",
    phone: "13588720518",
    remark: "试点，20200310安装",
    riverCode: "104",
    riverName: "新塘河",
    type: 1,  },
id: "2",
moduleKey: "river_project",
name: "新塘河保洁船只",
point: {lon: 120.208951, lat: 30.249044}
}

// console.log(getRow(data))

const curTime = new Date()

function myRowStyle({ row, rowIndex }) {
  if (row.moduleKey === 'river_project' && row.detail.planBorrowTime) {
    const planTime = new Date(row.detail.planBorrowTime)
    console.log('planTime',planTime)
    if (planTime <= curTime) {
      // return 'background-color:#f00'
      const color = 'color:green'
      console.log('color',color)
      return color
    } else if (planTime <= curTime) {
      return 'color:#ff0'
    }
  } else {
    return ''
  }
}

function getRowStyle(row, rowIndex){
  const rowStyle = myRowStyle;
  if (typeof rowStyle === 'function') {
    const style = rowStyle.call(null, {
      row,
      rowIndex
    })
    console.log('style',style)
    return style;
  }
  return rowStyle || null;
}

console.log(getRowStyle(data, 1))


