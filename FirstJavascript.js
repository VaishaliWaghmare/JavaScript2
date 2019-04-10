// alert('ok')
// console.log("hello")
// document.write("<h1> This is my first Java Script</h1>");
// var name=prompt("Enter your name");
// var age=prompt("Enter your age");
// console.log("name");
// document.write("<br>");
// var a=parseInt(age);
// console.log(a);
// document.write("My name is "+name+ " My age is "+ age);
//
// // var city=prompt("Enter your city name")
//
// // document.write(name);
// document.write(a);
// // document.write(city);
// var x=10;
// x=x+10;
// document.write(x);
// x+=20;
// document.write(x);
// x%=10;
// document.write(x);
//
//
// var name="vaishali";
// var x=name.length;
// document.write(x);
// var upperCase=name.toUpperCase();
// document.write(upperCase);
// var lowerCase=name.toLowerCase();
// document.write(lowerCase);
//
// var a=100;
// var b=100;
// console.log(a+b);
//
// var int=parseInt(prompt("Enter a number"));
// console.log(int);
// alert(int);
//
// var first=parseInt(prompt("Enter first number"));
// var second=parseInt(prompt("Enter second number"));
// document.write("Addition of two number is:"+(first+second));

// var noun=prompt("Enter noun");
// var verb=prompt("Enter verb");
// var adjective=prompt("Enter adjective");
// document.write(noun + " " + verb + " " + adjective + " girl");

// var age = prompt("Please Enter your Age?");
// var name = prompt("Please Enter your Name ?");
// console.log("My age is "+age+" My name is "+name);


// math class with functions

// var a = Math.random(); //SHOW RANDOM Value between 0-1
// console.log(a);

// var a = Math.random()*6+1;
// var b=Math.round(a);
// console.log(b);

// console.log(Math.round(Math.random()*10+1));

// console.log(Math.ceil(78.3)); // 79
//
// console.log(Math.floor(78.9)); //78

// var name=prompt("Enter your name");
// if(name.toUpperCase()==="VAISHALI")
// {
//   console.log(name);
// }

//print number 1 to 10 nd num >=5 den print msg
// var num=prompt("Enter number between 1 to 10");
// if(num>5 && num<=10)
// {
//   console.log("Welcome to javascript");
// }

// var randomNum=Math.floor("Math.random()*6+1")

// var age=prompt("Enter your age");
// var language=prompt("Enter your language");
// if(age>=18 && language.toUpperCase()=='ENGLISH')
// {
//   console.log("Welcome to javascript");
// }
// else
// {
//   console.log("Please enter correct input");
// }

//print random value between 1 to 10
// // var num=Math.floor(Math.random()*10+1);
// // var num=prompt("Enter number betwen 0 to 10");
// if(num > 0 || num <= 10)
// {
//   console.log("Welcome");
// }

//random number in range of 5 to 10
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// var topNumber=parseInt(num1);
// var bottomNumber=parseInt(num2);
// var randomNum=Math.floor(Math.random()*(topNumber-bottomNumber+1))+bottomNumber;
// {
//   console.log(randomNum);
// }

//program
// var userAns = prompt("Which is programming language name afterbgem?");
// if(userAns.toUpperCase()=='RUBY')
// {
//   console.log("That's correct");
// }
// else
// {
//   console.log("That's not correct");
// }

/* The random number guessing game generates a number between 1 and 6
and gives playes two attemot to guess anumber */

  // var randomNumber = Math.floor(Math.random()*10)+1;
  // var guess = prompt("i am thinking a number between 1 to 10. What is it?");
  // if (parseInt(guess)===randomNumber)
  // {
  //   document.write("<p> you guess the number!</p>");
  // }
  // else
  // {
  //   document.write('<p>Sorry.The number was'+ randomNumber+'</p>');
  // }

  // var correctGuess = false;
  // var randomNumber = Math.floor(Math.random()*6)+1;
  // var guess = prompt("i'm thinking of a number between 1 to 6. What is it?");
  // if(parseInt(guess)== randomNumber)
  // {
  //   correctGuess = true;
  // }
  // if(correctGuess == true)
  // {
  //   document.write("Sorry");
  // }

//quize Question
  // correctAnswer = 0;
  // var answer1 = prompt("What is capital of India?");
  // if(answer1.toUpperCase()=='DELHI')
  // {
  //   console.log("Your answer is correct");
  //   correctAnswer +=1;
  // }
  //
  // var answer2 = prompt("What is Firstcapital of India?");
  // if(answer2.toUpperCase()=='KOLKATA')
  // {
  //   console.log("Your answer is correct");
  //   correctAnswer +=1;
  // }
  //
  // var answer3 = prompt("City of Orange?");
  // if(answer3.toUpperCase()=='NAGPUR')
  // {
  //   console.log("Your answer is correct");
  //   correctAnswer +=1;
  // }
  //
  // var answer4 = prompt("What iS CITY OF Banana?");
  // if(answer4.toUpperCase()=='BHOPAL')
  // {
  //   console.log("Your answer is correct");
  //   correctAnswer +=1;
  // }
  //
  // var answer5 = prompt("What iS City of pink?");
  // if(answer5.toUpperCase()=='JAIPUR')
  // {
  //   console.log("Your answer is correct");
  //   correctAnswer +=1;
  // }
  //
  // console.log("You had got " +correctAnswer+ " out of 5");
  //
  // if(correctAnswer === 5)
  // {
  //   console.log("You win gold medal");
  // }
  // else if(correctAnswer >= 3)
  // {
  //   console.log("You win silver");
  // }
  // else if(correctAnswer >= 1)
  // {
  //   console.log("You win bronze");
  // }
  // else
  // {
  //   console.log("You have to study hard");
  // }

//functions
function randomNumFunction()
{
var number1 = prompt("Enter first number");
var number2 = prompt("Enter second number");
var no1 = parseInt(number1);
var no2 = parseInt(number2);

//call getRandomValues function with passing values no1 and no2
//get the returned values from getRandomValues function and store in randomNumber
//variable
debugger;
  var randomNumber=getRandomValues(no1,no2);
  console.log(randomNumber);

  randomNumber=getRandomValues(no1,no2);
  console.log(randomNumber);

  randomNumber=getRandomValues(no1,no2);
  console.log(randomNumber);

  randomNumber=getRandomValues(no1,no2);
  console.log(randomNumber);


}

function getRandomValues(no1,no2)
{
  debugger;
  var val=Math.floor(Math.random()*(no1-no2+1))+no2;
  return val;
}

console.log(randomNumFunction());
