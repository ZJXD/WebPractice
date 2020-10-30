/**
 * 算法题-1
 * 来源：https://mp.weixin.qq.com/s/ZAla1xp9bj7cIIhxuuzE9w
 */

 /**
  * 股票最大利润-1
  */

  function getMaxProfit(arr){
    const length = arr.length
    let maxProfit = 0
    let startDay = 0
    let endDay = 0
    for(let i = 0;i<length;i++){
      for(let j = i+1;j<length;j++){
        const profit = arr[j] - arr[i]
        if(profit > maxProfit){
          maxProfit = profit
          startDay = i
          endDay = j
        }
      }
    }

    console.log(`最大利润：${maxProfit}，交易时间：第${startDay+1}天以${arr[startDay]}买入，第${endDay+1}天以${arr[endDay]}卖出`)
  }

  getMaxProfit([7,1,5,3,6,4])
  getMaxProfit([7,6,4,3,1])

  /**
   * 股票最大利润-2
   * 低买高卖
   */

   // 实现思路，寻找拐点（最低、最高拐点），多次买卖
  function getMaxProfitRe(arr){
    const length = arr.length
    const minPoints = []
    const maxPoints = []
    for(let i = 0;i<length;i++){
      if(i===0){
        // 起始是买入的点，需要低点
      arr[i]<arr[i+1] && minPoints.push(i)
      }else if(i === length -1 ){
        // 最后是卖出点，需要高点
        arr[i]>arr[i-1] && maxPoints.push(i)
      }else{
        arr[i]>arr[i-1]&& arr[i]>arr[i+1]&&maxPoints.push(i)
        arr[i]<arr[i-1]&&arr[i]<arr[i+1]&&minPoints.push(i)
      }
    }

    const transactionCount = Math.min(minPoints.length,maxPoints.length)
    let maxProfit = 0
    for(let m = 0;m < transactionCount;m++){
    maxProfit += (arr[maxPoints[m]] - arr[minPoints[m]])
    }

    console.log(`最大拐点：${maxPoints.join(',')}，最小拐点：${minPoints.join(',')}，最大利润是：${maxProfit}`)
  }

  getMaxProfitRe([7,1,5,3,6,4])
  getMaxProfitRe([1,2,3,4,5])
  getMaxProfitRe([7,6,4,3,1])


  /**
   * 合并两个有序链表
   */

   function mergeList(list1,list2){
     let start = 0
     list2.map(item=>{
      start = insertList(list1,item,start)
     })

     console.log('合并后：',list1)
   }
   // 插入有序列表，并返回当前标识，作为下一个起点
  function insertList(list,value,start = 0){
    for(let i = start;i < list.length;i++){
      if(i===list.length-1 && value >= list[i]){
        list.splice(i+1,0,value)
        return i + 1
      }else if(value >= list[i] && value < list[i+1]){
        list.splice(i+1,0,value)
        return i + 1
      }
    }
  }

mergeList([1,2,4],[1,3,4])

/**
 * 最大和子序列
 */

//  getMaxCountList(arr){

//  }

/**
 * 无重复的最长子字符串
 */

 function getNorepeatSubstr(str){
  //  const strList = str.split('')

  // 有问题
  //  const repeatCount = []
  //  for(let i = 0;i<strList.length;i++){
  //    const endIndex = strList.indexOf(strList[i],i+1)
  //    repeatCount.push(endIndex>0?(endIndex-i):0)
  //  }
  //  console.log('每个位置的最长子串长度：',repeatCount)

  // 双层变量找出最长（笨方法）
  // const allSubStr = []
  // let maxLength = 0
  // for(let i = 0;i<strList.length;i++){
  //   const subStr = [strList[i]]
  //   for(let j = i + 1;j<strList.length;j++){
  //     if(subStr.indexOf(strList[j]) === -1){
  //       subStr.push(strList[j])
  //     } else{break}
  //   }
  //   subStr.length > maxLength && (maxLength = subStr.length)
  //   allSubStr.push(subStr)
  //   // 当剩余字符串小于已知最大字符串，跳出循环
  //   if(i + maxLength >= strList.length) break
  // }
  // console.log('所有子串：',allSubStr)

  // 一次遍历即可的方法
  let curStr = ''
  let max = 0
  for(let i =0;i<str.length;i++){
    const index = curStr.indexOf(str[i])
    if(index<0){
      curStr += str[i]
    }else {
      curStr = curStr.substring(index +1) + str[i]
    }

    max = Math.max(max,curStr.length)
  }

  console.log('最大连续不重复子串长度：',max)
 }

 getNorepeatSubstr('daoriomrrt')
 getNorepeatSubstr('abcabcbb')
 getNorepeatSubstr('bbbbb')
 getNorepeatSubstr('pwwkew')
