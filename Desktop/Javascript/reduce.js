const userCart=[
    {productID:1,productName:"Mobile",Price: 13000},
{productID:2,productName:"Pant",Price: 3000},
{productID:3,productName:"Shoe",Price: 4000},
]
const totalAmount= userCart.reduce((totalP,currP)=>{
return totalP +currP.Price;
},0);

console.log(totalAmount)