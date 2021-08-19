var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

var score = 0;

console.log("\n---------------------------------------------------------------------")
console.log(`hello there ${userName}. Please answer each and every question and at the end of the quiz you will know that how much you know about computers.`)

var questions = [
  {
    question: "The brain of any computer system is  ",
    answer: "CPU", 
  },{
    question: "The binary system uses powers of  ",
    answer: "2",
  },{
    question: "Freeware is software that is available for use at no monetary cost.(True/False)  ",
    answer: "True",
  },{
    question: "The hexadecimal number system contains digits from 1 - 15.(True/False)  ",
    answer: "True",
  },{
    question: "GNU / Linux is a open source operating system.(True/False)  ",
    answer: "True",
  }
]


for(var i = 0;i < questions.length;i++){
  console.log("---------------------------------------------------------------------\n");
  var que = questions[i]

  quiz(que.question, que.answer)   
  
}

function quiz (question, answer){
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer === answer) {
    console.log('You are right');
    score++;
    console.log("Score : ",score, "\n")

  } else {
    console.log('You are wrong '+'the right answer is '+ answer);
    score--;
    console.log("Score : ",score, "\n")}
}

console.log("\n---------------------------------------------------------------------\n")

console.log(`YAY!!!!, you EARNED ${score} points. now send me the final scores.`)
