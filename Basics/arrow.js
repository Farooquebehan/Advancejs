// const user ={
//     username : "farook",
//     price : "900",

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website `) 
//       console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// // user.welcomeMessage()
// console.log(this);
// function chai(){
//     const username = "farook"
//     console.log(this.username);
// }
// chai()

// const  chai = () =>{
//     const username = "farook"
//     console.log(this.username);
// }
// const addtwo = (num1 , num2) =>{
//     return num1 + num2
    
// }
// console.log(addtwo(3,5));
// // implicit return
// const addtwo = (num1 , num2  ) => num1 + num2
// console.log(addtwo(3,5));
// const addtwo = (num1 , num2 ) => (num1 + num2)
// console.log(addtwo(3,5))

//if we return a object 
const addtwo = (num1 ,num2 ) =>({username: "farook"}) 
 console.log(addtwo(2,3));
