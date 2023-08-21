const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor((arr.length) / 2)

    let arr1 = mergeSort(arr.slice(0, mid))
    let arr2 = mergeSort(arr.slice(mid, arr.length))
    let mainArr = merge(arr1, arr2)
    return mainArr
}

const merge = (arr1, arr2) => {
    let i = 0
    let j = 0
    let finalArr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            finalArr.push(arr1[i])
            i++
        }
        else {
            finalArr.push(arr2[j])
            j++
        }
    }
    for (; i < arr1.length; i++) {
        finalArr.push(arr1[i])
    }
    for (; j < arr2.length; j++) {
        finalArr.push(arr2[j])
    }

    return finalArr
}

console.log(mergeSort([ 5, 3, 10, 2, 2,100]))