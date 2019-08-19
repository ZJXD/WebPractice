// 十大经典排序（JavaScript 实现）
// 参考：https://segmentfault.com/a/1190000019903759
// https://segmentfault.com/a/1190000019916376
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
  // console.time('优化前冒泡排序耗时');
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
    if (isBreak) break;   // 当没有位置交换，说明已经是有序的，可以退出（优化）
  }
  // console.timeEnd('优化前冒泡排序耗时');
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


// #region 选择排序（Selection Sort）

/**
 * 思路：
 *      选择排序也是分已排序区和未排序区，每次从未排序区取最小的一个插入到已排序区的末尾
 * @param {array} array 
 */
const selectionSort = array => {
  let len = array.length,
    minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
    // console.log(array);
  }
}

// array = [2, 56, 8, 34, 3, 83, 36, 85];
// selectionSort(array);
// #endregion


// #region 归并排序（Merge Sort）
// 算法中的佼佼者，空间复杂度：O(n)，时间复杂度：O(n longn)

/**
 * 思想：
 *      归并就是分治思想，对数组一分为2，这样递归下去，
 *      分到最后左右各一个的时候进入 merge 进行比较排序
 * @param {array} array 
 */
const mergeSort = array => {
  let len = array.length;
  if (len < 2) {
    return array;
  }
  let middle = len >> 1;
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

// let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(array.join());
// array = mergeSort(array);
// console.log(array.join());
// #endregion


// #region 快速排序（Quick Sort）
// 快速排序的特点就是快，效率高，是处理大数据最快的算法之一
/**
 * 思想：
 *      1、先找到一个基准点（一般是数组中间值），遍历数组
 *      比基准值小的放左边，反之放右边
 *      2、左右两边的分别用新数组存储
 *      3、递归上述操作，直到数组长度<=1
 *  特点：
 *      快速 常用
 *  缺点：
 *      需要另外声明两个数组，浪费内存空间
 */


/**
 * 快速排序实现1
 * @param {array} array 
 */
const quickSort1 = array => {
  if (array.length <= 1) {
    return array;
  }

  // 取中位数，下面两行效果相同
  let midIndex = Math.floor(array.length / 2);
  // let midIndex = array.length >> 1;

  // 用 splice 后原路数组会把该数剔除，在下面组合数组的时候再加上
  let minArr = array.splice(midIndex, 1);
  let midValue = minArr[0];
  let left = [], right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < midValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // 下面两个对数组的组合，分别是 ES5 和 ES6 的写法
  // return quickSort1(left).concat(midValue, quickSort1(right));
  return [...quickSort1(left), midValue, ...quickSort1(right)];
}

/**
 * 快速排序（递归实现）实现2
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

// let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(array.join());
// array = quickSort(array);
// console.log(array.join());
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
  // console.time('桶排序耗时')

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

  // console.timeEnd('桶排序耗时')

  return sortArray;
}

// const arrayTemp = [533, 873, 659, 227, 996, 315, 21, 570, 368, 539, 420, 611, 228, 3, 170, 35, 169, 23, 693, 94, 947, 600, 462, 368, 704];
// console.log('原始Array：', arrayTemp.join());
// const newArray = bucketSort(arrayTemp, 200);
// console.log('桶排序后Array：', newArray.join());

// #endregion


// #region 希尔排序（Shell Sort）
/**
 * 思想：
 * 1、先将整个排序序列分割为若干个子序列
 * 2、分别进行直接插入排序
 * 3、待整个序列基本有序时，再对全体的记录依次进行直接插入
 * @param {array} array 
 */
const shellSort = array => {
  let len = array.length, temp, gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = array[i];
      let j = i - gap;
      for (; j >= 0 && array[j] > temp; j -= gap) {
        array[j + gap] = array[j]
      }
      array[j + gap] = temp;
    }
  }
  return array;
}
// const array = [35, 33, 42, 10, 14, 19, 27, 44];
// console.log('原始array:', array);
// const newArr = shellSort(array);
// console.log('newArr:', newArr);
// #endregion


// #region 堆排序（Heap Sort）
/**
 * 堆排序：
 * 1、序列生成大顶堆，交换第一个和最后一个，这样最后一个就是有序的；
 * 2、再对剩下的序列生成大顶堆，交换第一个和最后一个，最后两个就是有序的；
 * 3、继续重复
 * @param {array} array 
 */
const heapSort = array => {
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    Heapify(array, i, array.length);
  }
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    Heapify(array, 0, i);
  }

  return array;
}

/**
 * 生成大顶堆
 * @param {array} array 
 * @param {number} i 
 * @param {number} length 
 */
const Heapify = (array, i, length) => {
  let temp = array[i];

  for (let j = 2 * i + 1; j < length; j = j * 2 + 1) {
    temp = array[i];
    if (j + 1 < length && array[j] < array[j + 1]) {
      j++;
    }
    if (temp < array[j]) {
      swap(array, i, j);
      i = j;
    } else { break; }
  }
}

// const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
// console.log('原始array:', array);
// const newArr = heapSort(array);
// console.log('newArr:', newArr);
// #endregion


// #region 计数排序（Counting Sort）
const countingSort = array => {
  let len = array.length,
    result = [],
    countArr = [],
    min = (max = array[0]);

  // console.time('计数排序耗时');

  // 获取最大最小值，并对数组计数
  array.forEach(t => {
    min = t < min ? t : min;
    max = t > max ? t : max;
    countArr[t] = countArr[t] ? countArr[t] + 1 : 1;
  });
  // console.log('countArr：', countArr.join());

  // 从最小到最大，相邻的两个相加的和给后面一个，得出的是对应数的起始位置和结束位置
  for (let j = min; j < max; j++) {
    countArr[j + 1] = (countArr[j + 1] || 0) + (countArr[j] || 0);
  }
  // console.log('countArr 2：', countArr.join());

  // 根据上面获取的起始位置和结束位置重新排序
  for (let k = len - 1; k >= 0; k--) {
    result[countArr[array[k]] - 1] = array[k];
    countArr[array[k]]--;
    // console.log('result：', result.join());
  }

  // console.timeEnd('计数排序耗时');
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


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //0-9数字范围
//   temp_arr = [],
//   return_arr = [],
//   num = Math.floor(Math.random() * 5 + 1);//随机生成0-5，以此确定生成数字的位数

// for (let index in arr) { temp_arr.push(arr[index]) }//复制一份数组

// for (let i = 0; i < num; i++) {
//   var arrIndex = Math.floor(Math.random() * temp_arr.length);//随机生成一个索引
//   return_arr.push(temp_arr[arrIndex]);//放入返回数组
// }

// console.log(~~(return_arr.toString().replace(/,/g, '')));//转成字符串然后取整

// let sortArray = [];
// console.time('数组生成时间');
// for (let i = 0; i < 200000; i++) {
//   sortArray.push(Math.floor(Math.random() * 1000000));
// }
// console.timeEnd('数组生成时间');

// console.time('快排时间');
// quickSort(sortArray);
// console.timeEnd('快排时间');

// console.time('希尔排序时间');
// shellSort(sortArray);
// console.timeEnd('希尔排序时间');