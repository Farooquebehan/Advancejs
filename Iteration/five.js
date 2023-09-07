// const coding = ["Ruby","Js","Cpp"]

// //foreach does not return value 
// const values = coding.forEach( (item) => {
// console.log(item);
// })
// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums = myNum.filter((num) => num > 4 )
// console.log(newNums);x

// an other way 
// const newNums = myNum.filter((num) =>  {
//     return num > 4

// })
// console.log(newNums);


// const newNew = []
// myNum.forEach((num)=>{
// if (num > 4) {
// newNums.push(num)
// } 
// })
// console.log(newNums);

const books = [
      {title: 'Book one' , genre:'Fiction' , publish: 1981 , Edition: 2004},
      {title: 'Book Two' , genre:'Non-Fiction' , publish: 1992 , Edition: 2008},
      {title: 'Book Three' , genre:'History' , publish: 1999 , Edition: 2007},
      {title: 'Book Four' , genre:'Non-Fiction' , publish: 1999 , Edition: 20010},
      {title: 'Book five' , genre:'Science' , publish: 2009 , Edition: 2014},
      {title: 'Book six' , genre:'Fiction' , publish: 1987 , Edition: 2010},
      {title: 'Book seven' , genre:'History' , publish: 2011 , Edition: 2016},
      {title: 'Book Eight' , genre:'Science' , publish: 2011 , Edition: 2016},
      {title: 'Book Nine' , genre:'Non-Fiction' , publish: 1981 , Edition: 1989},
    ];

    let userBooks = books.filter((bk) => bk.genre ==='History')

     userBooks = books.filter((bk) => {
        return bk.publish >= '2002' && bk.genre ==='History'
    })

    console.log(userBooks);

























