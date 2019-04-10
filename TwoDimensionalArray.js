// var grades = [
// [10      , 20  ,    30  ,     40 ],
// [100      , 200  ,    300  ,     400 ],
// [103      , 204  ,    305  ,     45 ],
// [104      , 205  ,    306  ,     406 ]
//
// ];
//
// console.log(grades[0][3]);


//song play list program
var playList = [
  ['sanam re', 'Arjit Singh'],
  ['sanam re 2', 'Arjit Singh 2'],
  ['sanam re 3', 'Arjit Singh 3'],
  ['sanam re 4', 'Arjit Singh 4'],
  ['sanam re 5', 'Arjit Singh 5'],
];

function print(message)
{
  var topDiv = document.getElementById('top');
  topDiv.innerHTML = message;
}

function playSongs(songs)
{
  var listHtml = "<ol>";
  for(var i = 0; i<playList.length; i+=1)
  {
    listHtml += "<li>"+songs[i][0]+"is song by"+songs[i][1]+"</li>";
  }
  listHtml +="</ol>"
  print(listHtml);
}
playSongs(playList);


// Building a quiz challenge part one .
var correctAnswers = 0;
var question;
var answer;
var html;
var correct =[];
var wrong =[];
var questionAnswers=[
  ["Capital of india?", "delhi"],
  ["Capital of maharashtra?", "mumbai"],
  ["Capital of karnataka?", "banglore"],
  ["Capital of Rajasthan?", "jaipur"]
];

function startQuiz(questionAnswers)
{
  for(var i=0; i<questionAnswers.length; i++)
  {
    console.log("correct");
    var answers=prompt(questionAnswers[i][0]);
    if(answers.toLowerCase()=== questionAnswers[i][1])
    {
      correctAnswers +=1;
    }

  }
  var html = "you got"+ correctAnswers + "questions correct";
  //print(html);
}

startQuiz(questionAnswers);
