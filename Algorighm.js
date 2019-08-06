// 十大经典排序（JavaScript 实现）
// 参考：https://segmentfault.com/a/1190000019903759
// https://github.com/biaochenxuying/blog/issues/42

// #region 冒泡排序（Bubble Sort）
/**
 * 思想：
 *    * 冒泡排序只会操作相邻的两个数；
 *    * 每次比较相邻的两个元素，看是否满足大小关系，不满足就互换；  
 *    * 一次冒泡至少让一个元素移动到它应该的位置，重复n次，就完成了n个数的排序
 * 特点：
 *    * 优点：排序算法的基础，简单实用易于理解
 *    * 缺点：比较次数多，效率低
 * @param {array} array 
 */
const bubbleSort = array => {
  console.time('优化前冒泡排序耗时');
  const length = array.length;
  if (length <= 1) {
    return;
  }
  for (let i = 0; i < length; i++) {
    let isBreak = true;
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isBreak = false;
      }
    }
    if (isBreak) break;   // 当没有位置交换，说明已经是有序的，可以退出
  }
  console.timeEnd('优化前冒泡排序耗时');
}

// const arr = [7, 8, 4, 5, 6, 3, 2, 1];
// console.log('排序前：', arr);
// bubbleSort(arr);
// console.log('排序后：', arr);
// #endregion


// #region 插入排序（Insertion Sort）
// 插入排序分为：直接插入排序、优化后的折半插入、希尔排序

/**
 * 直接插入：
 * 通过构建有序序列，对于未排序的数据，在已排序序列中从后向前扫描，找到合适的位置
 * @param {array} array 
 */
const insertionSort = array => {
  let len = array.length;
  if (len <= 0) {
    return;
  }

  let preIndex, current;
  // 第一个元素认为已经排序
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    if (preIndex + 1 != 1) {
      array[preIndex + 1] = current;
      console.log('array:', array);
    }
  }
}

/**
 * 折半插入：
 * 每次比较的是有序序列的中间数值
 * @param {array} array 
 */
const binaryInsertionSort = array => {
  const len = array.length;
  if (len <= 0) {
    return;
  }
  let current, i, j, low, high, m;
  for (i = 1; i < len; i++) {
    low = 0;
    high = i - 1;
    current = array[i];
    // 折半查找
    while (low <= high) {
      m = (low + high) >> 1;
      // 高低区切换
      if (array[i] >= array[m]) {
        low = m + 1
      } else {
        high = m - 1;
      }
    }
    // 插入位置之后的元素全部位移一位
    for (j = i; j > low; j--) {
      array[j] = array[j - 1];
    }
    array[low] = current;
    console.log('array:', array);
  }
}

// const arr = [5, 4, 3, 2, 1];
// binaryInsertionSort(arr);
// #endregion


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

// const arrayTemp = [533, 873, 659, 227, 996, 315, 21, 570, 368, 539, 420, 611, 228, 3, 170, 35, 169, 23, 693, 94, 947, 600, 462, 368, 704];
// console.log('原始Array：', arrayTemp.join());
// const newArray = bucketSort(arrayTemp, 200);
// console.log('桶排序后Array：', newArray.join());

// #endregion


// #region 计数排序（Counting Sort）
const countingSort = array => {
  let len = array.length,
    result = [],
    countArr = [],
    min = (max = array[0]);

  console.time('计数排序耗时');

  // 获取最大最小值，并对数组计数
  array.forEach(t => {
    min = t < min ? t : min;
    max = t > max ? t : max;
    countArr[t] = countArr[t] ? countArr[t] + 1 : 1;
  });
  console.log('countArr：', countArr.join());

  // 从最小到最大，相邻的两个相加的和给后面一个，得出的是对应数的起始位置和结束位置
  for (let j = min; j < max; j++) {
    countArr[j + 1] = (countArr[j + 1] || 0) + (countArr[j] || 0);
  }
  console.log('countArr 2：', countArr.join());

  // 根据上面获取的起始位置和结束位置重新排序
  for (let k = len - 1; k >= 0; k--) {
    result[countArr[array[k]] - 1] = array[k];
    countArr[array[k]]--;
    // console.log('result：', result.join());
  }

  console.timeEnd('计数排序耗时');
  return result;
}

// const array = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
// console.log('原始 array: ', array.join());
// const newArr = countingSort(array);
// console.log('newArr: ', newArr.join());
// #endregion


// #region 基数排序（Radix Sort）
/**
 * 基数排序实现
 * @param {array} array 要排序的数组
 * @param {int} max 最大位数
 */
const radixSort = (array, max) => {
  console.time('基数排序耗时');

  const buckets = [];
  let unit = 10, base = 1;
  for (let i = 0; i < max; i++ , base *= 10, unit *= 10) {
    for (let j = 0; j < array.length; j++) {
      let index = ~~((array[j] % unit) / base);   // 依次过滤出个位、十位等
      if (buckets[index] == null) {
        buckets[index] = [];
      }
      buckets[index].push(array[j]);
    }
    let pos = 0, value;
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[j] != null) {
        while ((value = buckets[j].shift()) != null) {
          array[pos++] = value;   // 将数据从桶中拿出，用于后面高阶排序
        }
      }
    }
  }

  console.timeEnd('基数排序耗时');
  return array
}

// const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// const array = [533, 873, 659, 227, 996, 315, 21, 570, 368, 539, 420, 611, 228, 3, 170, 35, 169, 23, 693, 94, 947, 600, 462, 368, 704];
// console.log('原始array:', array);
// const newArr = radixSort(array, 3);
// console.log('newArr:', newArr);
// #endregion