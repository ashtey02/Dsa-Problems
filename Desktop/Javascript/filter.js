const nums=[1,2,3,4,5,6,7,8,9,10]
const isEven=function (num) {
    return num%2===0;
}

const evenNum=nums.filter(isEven)
console.log(evenNum)