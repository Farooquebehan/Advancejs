const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`${acc} and ${currval}`)
//     return acc + currval
// },0)

// lets try arrow function

// const myTotal = myNums.reduce((acc , curval) => acc + curval ,0)
//console.log(myTotal);
const shoppingCart = [
    {
        itemName: "js",
        price: 999
    },
    {
        itemName: "Html",
        price: 99
    },
    {
        itemName: "css",
        price: 889
    },
    {
        itemName: "React.js",
        price: 299
    },

]
const priceToPay =  shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);
