// var arr = ["a", "b", "c"];
// arr.push("d");
// console.log(arr);
//
// console.log(arr.pop());
// console.log(arr);
//
// var arr2 = ["g", "a"];
// console.log(arr.concat(arr2));
// console.log(arr2);
//
// console.log(arr.join("!"));
//
// console.log(arr.reverse());
// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr);
//
// console.log(arr.unshift("p"));
// console.log(arr);
//
// console.log(arr.slice(1,3));


//two dimensional Array
var correctAnswer = 0;
var a = [
  ["What is a capital of india?", "DELHI"],
  ["What is city of orange", "NAGPUR"]
];
var answer;
function questionAnswer()
{
  for (var i=0; i < a.lenght; i++)
  {
    answer = prompt(a[i][0]);
    if(answer.toUpperCase()== a[i][1])
    {
      correctAnswer +=1;
    }
  }
}
questionAnswer();
var wrongAnswer = a.lenght-correctAnswer;
document.write("You have given" +correctAnswer+ "Correct answer");
document.write("You have given" +wrongAnswer+ "wrong answer");

if(correctAnswer==2)
{
  document.write("You win gold")
}
if(correctAnswer >=1)
{
  document.write("You win silver");
}
else
{
  document.write("You need to study hard");
}
