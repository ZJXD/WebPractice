// 参考：https://segmentfault.com/a/1190000019903759

// #region 桶排序算法实现
/**
 * 桶排序
 * @param {array} array 要排序的数组
 * @param {int} bucketSize 每个桶的区间大小，默认为5
 */
const bucketSort = (array, bucketSize = 5) => {
  if (array.lenght === 0) {
    return array;
  }
  console.time('桶排序耗时')

  let minValue = array[0];
  let maxValue = array[0];
  array.forEach(a => {
    if (a < minValue) {
      minValue = a;
    } else if (a > maxValue) {
      maxValue = a;
    }
  });

  // 桶初始化
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let n = 0; n < buckets.length; n++) {
    buckets[n] = [];
  }

  // 利用函数映射将数据分配到各个桶中
  for (let b = 0; b < array.length; b++) {
    buckets[Math.floor((array[b] - minValue) / bucketSize)].push(array[b]);
  }

  let sortArray = [];
  for (let i = 0; i < buckets.length; i++) {
    // 调取快速排序，对每个桶排序
    quickSort(buckets[i]);
    // sortArray = sortArray.concat(buckets[i]);
    for (let j = 0; j < buckets[i].length; j++) {
      sortArray.push(buckets[i][j]);
    }
  }

  console.timeEnd('桶排序耗时')

  return sortArray;
}

/**
 * 快速排序（递归实现）
 * 首先对数组找基准分区，分为小于和大于的两部分
 * 再对这两个部分继续递归分区直至分不出为止
 * @param {Array} array 
 * @param {int} left 
 * @param {int} right 
 */
const quickSort = (array, left, right) => {
  let len = array.length, partitionIndex;
  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : len - 1;
  if (left < right) {
    partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

// 分区操作
const partition = (array, left, right) => {
  let pivot = right,
    index = left;
  for (let i = left; i < right; i++) {
    if (array[i] < array[pivot]) {
      swap(array, index, i);
      index++;
    }
  }
  swap(array, right, index);
  return index;
}

// 数据交换
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const arrayTemp = [533, 873, 659, 227, 996, 315, 21, 570, 368, 539, 420, 611, 228, 3, 170, 35, 169, 23, 693, 94, 947, 600, 462, 368, 704];
console.log('原始Array：', arrayTemp.join());
const newArray = bucketSort(arrayTemp, 200);
console.log('桶排序后Array：', newArray.join());

// #endregion

// #region 算法

// #endregion