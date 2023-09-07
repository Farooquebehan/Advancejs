// js execution context 
// [{}] -> Global execution context
// we have refered this for Global  EC  and it is putted there
// js is single threaded everything is procesed

// Global execution context 
// functional execution conext
// Eval execution conext
//[{js code}] it is divided into two phasis 1st is memory creation phase sometimws it is creation phase
//in the memory creation we allocate the place or memory for variables , varibles are not executed   
// ---> Execution phase

let num1 = 10;
let num2 = 20;
function addNum(num1 , num2)
{
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
// Global execution context  it is allocated into this
// memory phase 
//val1 ----> undefined
//val2 ----> undefined

//addnum ---> defination
// result1 ---> undefined
// result2 ----> undefined

//Executaion phase

// val1 = 10;
// val2 = 20;
// addnum ---------> [new variable enviroment + Execution thread] ----> Memory phase 
