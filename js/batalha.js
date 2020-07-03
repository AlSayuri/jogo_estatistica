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
        question:"Com base nas informações da tabela de vendas de carros no município de Rubelita-MG entre os anos de 2014 e 2019. Calcule a média, mediana, moda e desvio padrão e marque a opção correta.",
        options:["A) Média: 325,67; Mediana: 333,5; Moda: amodal; Desvio Padrão: 55,78",
                  "B) Média: 325,67; Mediana: 323,5; Moda: amodal; Desvio Padrão: 55,72",
                  "C) Média: 325,57; Mediana: 333,5; Moda: amodal; Desvio Padrão: 55,72",
                  "D) Média: 320,67; Mediana: 327,8; Moda: amodal; Desvio Padrão: 54,78"],
        answer:"B) Média: 325,67; Mediana: 323,5; Moda: amodal; Desvio Padrão: 55,72"
      },
      {
        question:"Dadas as afirmativas abaixo responda: </br> I - Entre os anos de 2014 e 2019 houve um crescimento de mais que 300% de venda de carro. </br> II - Houve uma diminuição de 64% em vendas de carro de menos entre 2015 e 2016. </br> III - Foi de 315,85% o crescimento de vendas entre 2016 e 2019.",
        options:["A) Nenhuma das alternativas estão corretas.",
                "B) I e III estão corretas.",
                "C) Apenas a II está correta.",
                "D) Apenas a III está correta."],
        answer:"A) Nenhuma das alternativas estão corretas."
      },
      {
        question:"Dada as informações de 5 municípios brasileiros. Qual o valor da correlação entre a população rural e consumo per capita da população rural?",
        options:["A) -0,72. Não possui correlação.",
                "B) 0,82. Possui uma correlação moderada.",
                "C) -0,82. Não possui correlação.",
                "D) -0,72. Possui correlação moderada."],
        answer:"D) -0,72. Possui correlação moderada."
      },
      {
        question:"No município de Porto Barreiro-PR, há uma população total de 3454 pessoas, e 47% são mulheres. Supondo que 3/5 dos homens não possuem carro, qual a probabilidade de um homem ser escolhido aleatoriamente ter um carro?",
        options:["A) 35,80%.",
                "B) 45,34%.",
                "C) 40%.",
                "D) 30%."],
        answer:"C) 40%."
      },
      {
        question:"Com base nas informações sobre o município de Oleo-SP na tabela. Calcule o 1º Quartil e o 9º Decil. ",
        options:["A) 1º Quartil: 13,97; 9º Decil: 45,16.",
                "B) 1º Quartil: 12,77; 9º Decil: 48,16.",
                "C) 1º Quartil: 12,97; 9º Decil: 45,16.",
                "D) 1º Quartil: 13,77; 9º Decil: 44.16."],
        answer:"C) 1º Quartil: 12,97; 9º Decil: 45,16."
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
  //mostrar imagem questao
  if(index == 3){
    $("#img_questao").hide();
  }
  else{
    $("#img_questao").show();
    $("#img_questao").html("<img id ='imagem_questao' src='imagem/questoes/q"+index+".png'/>");
  }

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
        pontos_jogador = Number(pontos_jogador) + 10;
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
