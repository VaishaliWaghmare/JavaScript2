// var i = 5;
// for(var i=0; i<10; i++)
// {
//   console.log("w");
// }
// console.log(i);

// let i = 5;
// for(let i=0; i<10; i++)
// {
//   console.log("w");
// }
// console.log(i);

// let x = 5;
// {
//   let x=10;
//   console.log(x);
// }
// console.log(x);

//local scope and global scope
// function()
// {
//   var y = 10;
//   console.log(y);
// }
// console.log(y);

// var x = 10;
// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// let x = 10;
// {
//   var x = 20;
//   console.log(x);
// }
// console.log(x);
//let does not redefine variable vALUE globally when let define as block scope. let is a block scope
//let and var in global scope are same.
//var is a global scope. it redefine , let is not redefine.

//let is not consider as global scope in window. window is a global object. var is a global variable.
// let x = 20;
// var x = 10;
// console.log(window.x);

//we can not declare same variable in block scope
{
let x = 10;
let x = 20;
console.log(x);
}

//we can't declare let like this:
let x = 10;
let x = 20;
console.log(x);

//we can declare var like this:
var x = 10;
var x = 20;
console.log(x);
