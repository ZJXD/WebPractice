// 解构
let [a,b,c] = [1,2,3]
console.log(a,b,c)

let [d=1] = []
console.log(d)

let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5,7]

arr2.map(item=>{
  if(!arr1.find(s=>s===item)){
    console.log('找到不同')
  }
})


let arr3 = [{id:1},{id:2},{id:3}]
const index = arr3.findIndex(item=>item.id === 2)
arr3.splice(index,1)
console.log(arr3)

const [a,...arrt] = [1,2,3,4]
console.log(arrt)

console.log([1,2,3,4].toString())
