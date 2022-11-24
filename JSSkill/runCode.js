var findSubstring = function (s, words) {
  const result = []
  const wMap = {}
  const wL = words[0].length
  const wTotalLength = words.length * wL
  if (s.length < wTotalLength) {
    return result
  }

  const deduWords = []

  words.map((item) => {
    if (wMap[item]) {
      wMap[item] += 1
    } else {
      wMap[item] = 1
      deduWords.push(item)
    }
  })

  for (let index = 0; index < s.length - wTotalLength + 1; index++) {
    const tempS = s.slice(index, index + wTotalLength)
    const tempMap = {}
    let isFind = true
    for (let j = 0; j < tempS.length; j += wL) {
      const tempS_s = tempS.slice(j, j + wL)
      if (deduWords.includes(tempS_s)) {
        if (tempMap[tempS_s]) {
          tempMap[tempS_s] += 1
        } else {
          tempMap[tempS_s] = 1
        }
      } else {
        isFind = false
        break
      }
    }

    console.log(wMap, tempMap)
    if (
      isFind &&
      Object.getOwnPropertyNames(wMap).length ===
        Object.getOwnPropertyNames(tempMap).length
    ) {
      let isEqual = true
      for (const key in wMap) {
        if (wMap[key] !== tempMap[key]) {
          isEqual = false
        }
      }

      isEqual && result.push(index)
    }
  }

  return result
}

console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
)
