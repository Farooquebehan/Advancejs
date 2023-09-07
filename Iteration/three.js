//array object string are iterator

// for of 
// ["" , "" , ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

const greeting = "Hello"

for(const greet of greeting ){
  //  console.log(greet);
} 

// Map
// maps are known for unique values
// const map = new Map()
// map.set('Pak' , "pakistan")
// map.set('USA' , "United states of america" )
// map.set('UK' , "united Kingdom")

//console.log(map);
// iterating map

// for(const key of map){
//     console.log(key);
// }

// for(const [key , value] of map){
//     console.log(key, ':-', value);
// }

// const myobject = {
//     js:  "JavaScript",
//     cpp: "c++",
//     fb:"farook"  
// }

// for(const key in myobject){
//     console.log(`${key} shorcut is for ${myobject}`);
// }

// can we use for in loop in array

// const myarray = ["farook","muskan","behan","sanghar"]
// for(const key in myarray){
//     console.log(myarray[key]);

// }

// can we use for in loop in map
// ans we cant bcz map is not iteratable
// for of loop ----> for arrays and many more 
//for in loop ------>  for objects








