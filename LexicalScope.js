// var a = 1;
// function one()
// {
//   console.log(a);
//   two();
//
//   function two()
//   {
//     var b = 3;
//     console.log(b);
//     three();
//
//     function three()
//     {
//       var c = 4;
//       console.log(c);
//
//       console.log(a+b+c);
//     }
// }
//
// }
//  one();

//program 2
//global scope of function declaration is window
//this gives us current object scope
// console.log(this);

// function abc()
// {
//   console.log(this);
// }
//
// abc();

//program 3
// var john =
// {
//   name : "john",
//   age : 28,
//
    //function expression
//   calculateage : function ()
//   {
//     console.log(this);
//     return 2019 - (this.age);
//   }
// }
// john.calculateage();

//program 4
//function declaration by default scope is window
// var john =
// {
//   name : "john",
//   age : 28,
//
//   calculateage : function ()
//   {
//     console.log("Hello");
//     x();
//
//     //function declaration
//     function x()
//     {
//       console.log(this);
//     }
//   }
// }
// john.calculateage();

//program 5
// var age;
// var name;
// var john =
// {
//   name : "john",
//   age : 28,
//
//     //function expression
//   calculateage : function ()
//   {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
//
// var mark =
// {
//   name : "mark",
//   age : 28,
//
//   //  function expression
//   calculateage : function ()
//   {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
//
// john.calculateage();
// mark.calculateage();

//program 6
var age;
var name;
var john =
{
  name : "john",
  age : 29,

    //function expression
  calculateage : function ()
  {
    console.log(2019-this.age);
  }
}
john.calculateage();

var mark =
{
  name : "mark",
  age : 28,

  //  function expression
  calculateage : function ()
    {

      console.log(2019-this.age);
    }
}

console.log(mark.calculateage);
mark.calculateage = john.calculateage;
console.log(mark);
mark.calculateage();
