// call back function has no name 
// some loops are directly injected into the array properties for instance ----> foreach loop
// call back function means that give me a function 
// function running into the array will get the value like perameter

const coding = ["behan","rajar", "bugti" , "wassan"]

// coding.forEach(function ( item ){
//     console.log(item);
// })

// we can also use arrow function 

// coding.forEach((item) =>{
//     console.log(item);
// })

// can I pass on following function 
// yes check the solution 
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index, arr) =>{
//     console.log(item,index,arr);
// })
 
// in the following operation we will get the access of the array objects using foreach()
const myCoding =[ {
    Name: "Farook",
    fname:"malook",
    city:"sanghar"

},
{
    Name: "Muskan",
    fname:"aijaz",
    city:"sanghar"

},
{
    Name: "zafar",
    fname:"gohar",
    city:"sanghar"

}
]

myCoding.forEach((item) => {
    console.log(item.Name)
})













