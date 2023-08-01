const myArr=["hello","cat","dog","lion"]
function isLength3(string){
    return string.length===3;
}

const ans=myArr.find(isLength3);
console.log(ans);