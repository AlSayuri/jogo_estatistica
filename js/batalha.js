var $progressValue = 0;
var resultList=[];
var personagem = $.trim($( '#personagem' ).text());
var pontos_jogador = $.trim($( '#pontos' ).text());
var pontos_adversario;
var pontos_adversario_array = [0.5, 1, 1.5];

var index;
var bolinha;
var adversario; // 0=errou, 1=acertou
var texto_resultado_rodada =" ";

const quizdata=[
      {
        question:"Characterized by skill at understanding and profiting by circumstances",
        options:["Prescient", "Analyst", "Diminution", "Shrewd"],
        answer:"Shrewd",
        category:1
      },
      {
        question:"To refuse to acknowledge as one's own or as connected with oneself",
        options:["Prevalent", "Disown", "Squalid", "Employee"],
        answer:"Disown",
        category:2
      },
      {
        question:"Not having the abilities desired or necessary for any purpose",
        options:["Incompetent", "Impoverish", "Coxswain", "Devious"],
        answer:"Incompetent",
        category:3
      },
      {
        question:"Lizard that changes color in different situations",
        options:["Scruple", "Depredation", "Chameleon", "Whimsical"],
        answer:"Chameleon",
        category:1
      },
      {
        question:"Having the title of an office without the obligations",
        options:["Reciprocal", "Unsullied", "Titular", "Inflated"],
        answer:"Titular",
        category:2
      }
    ];


/*** Return list of options ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question){
  $(".question").html("<h1>"+question+"</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index){
  var currentQuest=questions[index];
  renderQuestion(currentQuest.question);
  renderOptions(currentQuest.options);
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}


/** Insert progress bar in html **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div id="bolinha_'+(i+1)+'" class="my-progress-indicator progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
  $("#tela_informacao").css('display', 'none');
}

/*** change progress bar when next button is clicked ***/
function changeProgressValue(){
  $progressValue+= 25;
  if ($progressValue >= 101) {

  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}
function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question,
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct,
      category:questions[presentIndex].category
    }
    resultList.push(result);

    resultado(correct,presentIndex,clicked);

    console.log("result");
    console.log(result);

}

function resultado(correct,presentIndex,clicked ){
      //mudar cor bolinha e menssagem por rodada
      $("#tela_informacao").css('display', 'block');
      $("#ok").show();
      index = presentIndex+1;
      bolinha = '#bolinha_'+index;
      adversario = Math.floor(Math.random() * 2); // 0=errou, 1=acertou
      texto_resultado_rodada =" ";

      if(correct == clicked){
        $(bolinha).css({"background-color":"#2ECC71"});
        texto_resultado_rodada = "Acertou a resposta!";
        pontos_jogador = Number(pontos_jogador) + 2;
      }
      else{
        $(bolinha).css({"background-color":"#EC7063"});
        texto_resultado_rodada = "Errou a resposta!";
      }

      if(adversario == 1){
        pontos_adversario = pontos_adversario_array[Math.floor(Math.random() * pontos_adversario_array.length)];;
        if(pontos_jogador >= pontos_adversario){
          pontos_jogador = pontos_jogador - pontos_adversario;
        }
        else if(pontos_jogador == 0){
          pontos_adversario = 0;
        }
        else{
          pontos_adversario = pontos_adversario - pontos_jogador;
        }
        texto_resultado_rodada = texto_resultado_rodada + "<br> Adversário acertou. <br> Perde "+ pontos_adversario +" ponto.";
      }
      else{
        texto_resultado_rodada = texto_resultado_rodada + "<br> Adversário errou.";
      }
      $('#pontos').text(pontos_jogador);
      $('#resposta_rodada').html(texto_resultado_rodada);
}

function mudar_imagens(presentIndex){
  //mudar background
  if (presentIndex == 0|| presentIndex == 2 || presentIndex == 4 ){
    $('#tela_batalha').css("background", "url('imagem/fundo_batalha_"+presentIndex+".png') no-repeat center");
    $('#tela_batalha').css("background-size", "cover");
  }
  //mudar personagem jogador
  if (presentIndex == 0){
    $('#jogador_imagem').css("background", "url('imagem/"+ personagem + "/" + personagem + ".png') no-repeat center ");
    $('#jogador_imagem').css("background-size", "auto 300px");
  }
  //mudar adversario
  $('#adversario_imagem').css("background", "url('imagem/"+ personagem + "/adversario_0"+presentIndex+".png') no-repeat center ");
  $('#adversario_imagem').css("background-size", "auto 300px");
}

$(document).ready(function() {
  $("#tela_jogo_p1").hide();
  $("#tela_jogo_p2").hide();
  $("#tela_jogo_p3").hide();
  $("#tela_final").hide();
  var presentIndex=0;
  var clicked=0;

  var questions=quizdata;
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);
  mudar_imagens(presentIndex);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();

    if(questions.length==(presentIndex)){
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

  });


  $( "#ok" ).click(function() {
    $("#tela_informacao").css('display', 'none');
    $("#quizBox").show();
    $(this).addClass("hidden");
    //ir para tela final
    if(presentIndex == 4){//fim do quiz
        $('#minutos').text($.trim($( '#minutes' ).text()));
        $("#tela_batalha").hide();
        $("#tela_jogo_" + personagem).show();
    }
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
    mudar_imagens(presentIndex);
  });

  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);
    $("#next").addClass("hidden");
    $("#quizBox").hide();
  });

});



/* tempo */
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime(){
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds%60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}
function pad(val)  {
  var valString = val + "";
  if(valString.length < 2){
    return "0" + valString;
  }
  else{
    return valString;
  }
}
