/**
 *  头条笔试题练习
 * 
 *  描述：
 *  有一组不同高度的台阶，由一个整数数组表示，数组中每个数表示每个台阶的高度，
 *  下雨过后（雨足够多），台阶间会积多少水呢？
 *  例如数组为 [0,1,0,2,1,0,1,3,2,1,2,1]，表示积水6
 *
 *  分析：
 *  分两步看：1、台阶是否会积水；2、积水的话，积水深度是多少怎么计算；
 *
 *  思路：
 *  1、首尾的不会积水；
 *  2、左右两个数值都比当前值小，不会积水，但这个是积水的开始或结束；
 *  3、从第二个开始遍历，出现 2 中的值开始积水或者结束积水；
 */

const getWater = array => {
  let len = array.length;
  let hights = [];
  for (let i = 0; i < array.length; i++) {
    let left = i - 1 >= 0 ? array[i - 1] : 0;
    let right = i + 1 >= len ? 0 : array[i + 1];
    if (array[i] > left && array[i] > right) {
      hights.push(i);
    }
  }

  let water = 0;
  // 对积水区间遍历，计算积水
  for (let j = 1; j < hights.length; j++) {
    let left = hights[j - 1], leftVal = array[left];
    let right = hights[j], rightVal = array[right];
    let maxMinVal = leftVal > rightVal ? rightVal : leftVal;
    for (let n = left + 1; n < right; n++) {
      water += (maxMinVal - array[n]);
    }
  }

  return water;
}

// let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let water = getWater(array);
console.log(water);