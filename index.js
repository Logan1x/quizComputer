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
  console.log("\n---------------------------------------------------------------------\n");
  var que = readlineSync.question(questions[i].question);
  if(questions[i].answer.toUpperCase().includes(que.toUpperCase())){
    console.log(`Great work ${userName}, you have answered correct.`);
    console.log("your current score is : ",score=score+2)
  }
  else{
   
      console.log("You answered wrong!!!")
      console.log("your current score is : ",score=score-1)
    }
    
  
}

console.log("\n---------------------------------------------------------------------\n")

console.log(`YAY!!!!, you EARNED ${score} points. now send me the final scores.`)
