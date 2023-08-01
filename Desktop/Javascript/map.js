const numbers=[3,4,5,67,8,9];

const square= function (number) {
    return number*number;
}

const sqNum=numbers.map(square)
console.log(sqNum)