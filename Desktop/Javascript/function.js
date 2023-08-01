function findTarget(array,target) {
    for(i=0;i<array.length;i++){
        if(array[i]===target)return i;
        
    }
}

const myArr=[1,2,3,4,5]
const ans=findTarget(myArr,1)
console.log(ans)