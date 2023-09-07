// const userLoggeIn = "@farook" "" []
// if(userLoggeIn){
//     console.log("U are wellcome");
// }else{
//     console.log("there is something wrong")
// }


//falsy values
 //false 0 , -0 , BigInt 0n, "" , null,undefined , NaN
//Truthy "0" ,'false' , " " , [] , {} , function() {}
// for checking the array empty
// const userLoggeIn = []

// if(userLoggeIn == 0){
//     console.log("array is empty");
// }
// 2 for checking the object empty
// const emptyobj = {}

// if(Object.keys(emptyobj).length === 0){
// console.log("object is empty");
// }

// Nullish coalescing Opertaor (??) ----> entire story is on these two thing  Null undefined


// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// console.log(val1);

//Terniry operator ?

 //condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ?    console.log("less than 80 ") : console.log("more than 80");