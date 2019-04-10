// var correctAnswer = 0;
// var total=5;
//  var answer1 = prompt("What is capital of India?");
//  if(answer1.toUpperCase()=='DELHI')
//  {
//   console.log("Your answer is correct");
//    correctAnswer +=1;
//  }
//
//  var answer2 = prompt("What is Firstcapital of India?");
//  if(answer2.toUpperCase()=='KOLKATA')
// {
//   console.log("Your answer is correct");
//   correctAnswer +=1;
// }
//
// var answer3 = prompt("City of Orange?");
// if(answer3.toUpperCase()=='NAGPUR')
// {
//    console.log("Your answer is correct");
//    correctAnswer +=1;
//  }
//
//  var answer4 = prompt("What iS CITY OF Banana?");
//  if(answer4.toUpperCase()=='BHOPAL')
// {
//   console.log("Your answer is correct");
//    correctAnswer +=1;
//  }
//
//  var answer5 = prompt("What iS City of pink?");
//  if(answer5.toUpperCase()=='JAIPUR')
//  {
//    console.log("Your answer is correct");
//    correctAnswer +=1;
//  }
//
//  console.log("You had got " +correctAnswer+ " out of 5");
//
//  var percent=(100/total)*correctAnswer;
//
//  if(correctAnswer === 5)
//  {
//   console.log("You win gold medal,percentage="+percent);
//  }
//  else if(correctAnswer >= 3)
//  {
//    console.log("You win silver,percentage="+percent);
//  }
//  else if(correctAnswer >= 1)
//  {
//    console.log("You win bronze,percentage="+percent);
//  }
//  else
//  {
//    console.log("You have to study hard,percentage="+percent);
// }

//for loop print 1 to 10 numbers
// for(var i=0; i<=10; i++)
// {
//   document.write(i + " ");
// }
// console.log(i);

//While loop
// var i=1;
// while(i<=10)
// {
//   console.log(i);
//   i++;
// }
// var i = true;
// var randomNumber = Math.random(Math.random()*6);
// while(i)
// {
//   if (randomNumber == 4)
//   {
//     console.log("welcome");
//     i = false;
//   }
// }

//do while
// var i = 2;
// do
// {
//   console.log(i);
// } while (i<2)

// Program --> Get a random number between 1 to 1000
// print the number and make the computer guess the number
// print the number of attempts computer take to print the number

// var upper = 10000;
// var randomNumber = Math.random(upper);
// var attempt = 0;
// var guess;
//
// function getRandomNumber (upper)
// {
//   return Math.floor(Math.random()* upper)+1;
// }
//
// while(guess !== randomNumber)
// {
//   guess = getRandomNumber(upper);
//   attempt +=1;
// }
// document.write("The random number is:" + randomNumber + " ");
// document.write("The number of attempts required to guess randomNumber" + attempt + " attempts to get it");

//function programming
// function greeting()
// {
//   var person = 'VAISHALI';
//   alert(person);
// }
//
// var person = 'ashu';
// greeting();
// alert(person);
// greeting();

//addition of number using function
// function additionNumbers (firstNumber, secondNumber)
// {
//   var sum = firstNumber + secondNumber;
//   return sum;
// }
//
// var result = additionNumbers (10 , 30);
// document.write(result);

//print  A B C with the use of function

// function print(msg)
// {
//   document.write(msg);
// }
// print ("A");
// document.write("<br>");
// print ("B");
// document.write("<br>");
// print ("C");

//Generate colors randomly
// html = '';
// var green;
// var blue;
// var rgbColor;
// var red;
// for(var i=0; i<10; i++)
// {
//   red = Math.floor(Math.random()*256);
//   blue = Math.floor(Math.random()*256);
//   green = Math.floor(Math.random()*256);
//   rgbColor = 'rgb('+ red + ',' + blue + ',' + green +')';
//   html += '<div style = "background-color:' + rgbColor + '"> hello </div>';
// }
// document.write(html);

//Generate colors randomly using function
// var html = '';
// var rgbColor;
// for(var i=0; i<10; i++)
// {
//   rgbColor = 'rgb('+ genColor() + ',' + genColor() + ',' + genColor() +')';
//   html += '<div style = "background-color:'+ rgbColor +'"> Hello </div>';
// }
// document.write(html);
//
// function genColor()
// {
//   var randomNumber = Math.floor(Math.random()*256);
//   return randomNumber;
// }

//Array method
var a = ["Vaishali" , "Ashwini" , "Jeevan"];
console.log(a.length);
console.log(a[0]);

// a.push(1);
// console.log(a);
// console.log(a.push(1));

// a.pop();
// console.log(a);

// a.unshift("G1")
// console.log(a);
// console.log(a.unshift(7));
// console.log(a);

a.shift();
console.log(a);
