// imidiate invoke function expressions (iife)
// for getting the rid of global pollution we use this function 
// (function get(){
    //this is called name iife
//     console.log('muskan');
// })()

//for writting two iife in one frame we have to just use semicolon ;

// (() => {
    //this is called simple iife
// console.log('muskan1');
// })()
// for passing value 
(( name) =>{
// this is called parameterized iife
    console.log(name)
})("Muskan farook");