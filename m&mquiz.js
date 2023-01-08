//Global Variables
//Variables to track each possible quiz outcome.
var questionCount = 0;
var designerScore = 0;
var Web_DeveloperScore = 0;
var AIScore = 0;
var App_DeveloperScore = 0;

//Variables for each quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");


var result = document.getElementById("result");
var restart = document.getElementById("restart");
//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", designer);
q1a2.addEventListener("click", Web_Developer);
q1a3.addEventListener("click", AI);
q1a4.addEventListener("click", App_Developer);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", designer);
q2a2.addEventListener("click", Web_Developer);
q2a3.addEventListener("click", AI);
q2a4.addEventListener("click", App_Developer);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", designer);
q3a2.addEventListener("click", Web_Developer);
q3a3.addEventListener("click", AI);
q3a4.addEventListener("click", App_Developer);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", designer);
q4a2.addEventListener("click", Web_Developer);
q4a3.addEventListener("click", AI);
q4a4.addEventListener("click", App_Developer);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", designer);
q5a2.addEventListener("click", Web_Developer);
q5a3.addEventListener("click", AI);
q5a4.addEventListener("click", App_Developer);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);

q6a1.addEventListener("click", designer);
q6a2.addEventListener("click", Web_Developer);
q6a3.addEventListener("click", AI);
q6a4.addEventListener("click", App_Developer);
q6a1.addEventListener("click", disableBtn6);
q6a2.addEventListener("click", disableBtn6);
q6a3.addEventListener("click", disableBtn6);
q6a4.addEventListener("click", disableBtn6);


restart.addEventListener("click", refresh);

//#TODO: Define quiz functions here
function disableBtn1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
}
function disableBtn2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
}
function disableBtn3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
}
function disableBtn4() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
}
function disableBtn5() {
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
}

function disableBtn6() {
  document.getElementById("q6a1").disabled = true;
  document.getElementById("q6a2").disabled = true;
  document.getElementById("q6a3").disabled = true;
  document.getElementById("q6a4").disabled = true;
}

function designer() {
  designerScore += 1;
  questionCount += 1;
  //alert("One point to bad guy!");
  if (questionCount >=6){
    updateResult();
    link();
  }
}

function Web_Developer() {
  Web_DeveloperScore += 1;
  questionCount += 1;
  //alert("One point to when the party's over!");
  if (questionCount >=6){
    updateResult();
    link();
  }
}

function AI() {
  AIScore += 1;
  questionCount += 1;
  //alert("One point to AI");
  if (questionCount >=6){
    updateResult();
    link();
  }
}

function App_Developer() {
  App_DeveloperScore += 1;
  questionCount += 1;
  //alert("One point to App_Developer!");
  if (questionCount >=6){
    updateResult();
    link();
  }
}
  
function updateResult() {
  if ((designerScore == 2 && Web_DeveloperScore == 2) && (AIScore == 2 || App_DeveloperScore == 2)) {
    result.innerHTML= "Your result is any domain"+"<a href='m&mAI.html'>"+"1.AI"+"</a>"+"<a href='m&mAppD.html"+" 2.App"+"</a>"+"<a href='m&mUI.html"+"3.UI"+"</a>"+"<a href='m&mWebD.html"+"4.Web"+"</a>";
  }
  else if ((AIScore == 2 && App_DeveloperScore == 2) && (designerScore == 2 || Web_DeveloperScore == 2)) {
    result.innerHTML= "Your result is any domain"+"<a href='m&mAI.html'>"+"1.AI"+"</a>"+"<a href='m&mAppD.html"+"2.App"+"</a>"+"<a href='m&mUI.html"+"3.UI"+"</a>"+"<a href='m&mWebD.html"+"4.Web"+"</a>";
  }
  else if (designerScore == 3 && Web_DeveloperScore == 3) {
    result.innerHTML = "Your result is... "+"<a href='m&mAI.html"+"<i>bad guy</i>"+"</a>"+" and"+" <i>when the party's over!</i>";
  }
  else if (designerScore == 3 && AIScore == 3) {
    result.innerHTML = "Your result is... <i>bad guy</i> and <i>AI!</i>";
  }
  else if (designerScore == 3 && App_DeveloperScore == 3) {
    result.innerHTML = "Your result is... <i>bad guy</i> and <i>App_Developer!</i>";
  }
  else if (Web_DeveloperScore == 3 && AIScore == 3) {
    result.innerHTML = "Your result is... <i>when the party's over</i> and <i>AI!</i>";
  }
  else if (Web_DeveloperScore == 3 && App_DeveloperScore == 3) {
    result.innerHTML = "Your result is... <i>when the party's over</i> and <i>App_Developer!</i>";
  }
  else if (AIScore == 3 && App_DeveloperScore == 3) {
//    result.innerHTML = "Your result is... <i>AI</i> and <i>App_Developer!</i>";
result.innerHTML ="<a href='m&mAppD.html'>";  
}
  else if (designerScore >=3) {
    result.innerHTML = "Your result is... "+"<a href='m&mUI.html'>"+"<i>Designing Domain!</i>" +"</a>";
  }
  else if (Web_DeveloperScore >=3) {
    result.innerHTML = "Your result is... "+"<a href='m&mWebD.html'>"+"<i>Web Development</i>"+"</a>";
  }
  else if (AIScore >=3) {
    result.innerHTML = "Your result is..." +"<a href='m&mAI.html'>"+"<i>AI!</i>"+"</a>";
  }
  else if (App_DeveloperScore >=3) {
    result.innerHTML = "Your result is... "+"<a href='m&mAppD.html'>"+"<i>App_Developer!</i>"+"</a>";
  }  
  else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh(){
  result.innerHTML = "Your result is...";
  var questionCount = 0;
  var designerScore = 0;
  var Web_DeveloperScore = 0;
  var AIScore = 0;
  var App_DeveloperScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
  
  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
  document.getElementById("q6a3").disabled = false;
  document.getElementById("q6a4").disabled = false;
  
  }
