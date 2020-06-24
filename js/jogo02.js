// Randomly create an expression
var tick = document.getElementById("tick");
var cross = document.getElementById("cross");
var restartButton = document.getElementById("restart-button");

var tryDisplay = document.getElementById("try-screen");
var workDisplay = document.getElementById("working-screen");

var finalScoreScreen = document.getElementById("final-score");
/*var progressScreen = document.getElementById("progress");*/
var progressBar = $("#progressbar");
var exprScreen = document.getElementById("expression");
var resScreen = document.getElementById("result");
var scoreScreen = document.getElementById("score");

var a, b, r, ir, chaos, isCorrect;
var score = 0;
var wrongAnswer = false;
var correctClick = 0;
// first, second, and result.

var pontuacao_final;

function fim(){
  if($.trim($( '#minutos' ).text()) < 2){
    $('#pontuacao_final').html('Trapaceou! <br/> Não fez o quiz corretamente! <br/>  ٩(ఠ益ఠ)۶');
  }
  else{
    pontuacao_final =  (($.trim($( '#pontos' ).text()) * 10) / $.trim($( '#minutos' ).text())) + score;
    $('#pontuacao_final').html('Sua pontuação é <br/>' + pontuacao_final.toFixed(1));
  }
  $("#pontuacao_final").css('color', 'black');
  $("#tela_jogo_p2").hide();
  $("#tela_final").show();
}

// Helper function to create a random member
function randomExpressionMember() {
  return Math.floor(Math.random() * 10 + 1);
}

// Create current expression
function createExpression() {
  a = randomExpressionMember();
  b = randomExpressionMember();
  // correct answer;
  r = a + b;
  // create a random result within the proximity of the number
  chaos = Math.floor(Math.random() * (Math.round(r * 0.7)) * 1.5 + Math.round(r/2) + 1);
  //console.log("chaos", chaos)
  if (chaos === r) { chaos += 1; };
  // make sure r is not the same as chaos

  // run a coin flip to see whether to display the correct or incorrect answer



  isCorrect = Math.round(Math.random()) ? true : false;
  // check whether what's displayed is true or not.
  console.log("Is Correct r displayed", isCorrect)
  return a, b, r, chaos, isCorrect; // add another variable to track if the expr should be true or not
}




function displayProgressBar() {

  //$( "#progressbar" ).animate({ width: "100%" }, 3000 );
  progressBar.width(0).animate({width: "100%"},3000,"linear",function() { fim();} );

}



function displayExpression(a, b, r, chaos, isCorrect) {
  // Input the values in the fields.
  exprScreen.textContent = a + " + " + b;

  if (isCorrect) {
    resScreen.textContent = " = " + r;
  } else {
    resScreen.textContent = " = " + chaos;
  }
  scoreScreen.textContent = "Pontos: " + score;

}


function runPlayerTurn() {
  createExpression();
  displayExpression(a, b, r, chaos, isCorrect);
  displayProgressBar();
  // take input and decide what to do next - increase the score or not. restart the game if they are wrong.

}

// Attach event listeners to buttons
$( "#tick" ).click(function() {
  $( "#progressbar" ).stop();
  $('#progressbar').css('width', '1%');
  if (isCorrect) {
    score += 1;
    runPlayerTurn();
  } else {
    // exit the game? do nothing?
    fim();
    wrongAnswer = true;//fim de jogo0
  }
});

$( "#cross" ).click(function() {
  // ATTENTION TO THIS: Cross can also be the right answer.
  $( "#progressbar" ).stop();
  $('#progressbar').css('width', '1%');
  if (!isCorrect) {
    score += 1;
    runPlayerTurn();
  } else {
    // exit the game? do nothing?
    fim();
    wrongAnswer = true;
  }
});


// testing
createExpression();
displayExpression(a, b, r, chaos);

// can create the first screen

function runGame() {
  //maybe don't need this yet.
 // while (!wrongAnswer) {
    runPlayerTurn();
 // }

  // display start?
  // runTurns until the answer is wrong.
  // reset the game if the player is wrong.
}
// Happens every move (set)
// calculate the answer. Randomize how the answer is displayed: half the times the correct answer and half the times an answer that is around that but not correct.
// Start with + then add -

// have a timer to go back each time the expression is displayed.
$( ".bt_comecar_jogo_02" ).click(function() {
  $( ".bt_comecar_jogo_02" ).hide();
  $( "#working-screen" ).show();
  runGame();
});
