
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilo_geral.css">
    <link rel="stylesheet" href="css/batalha.css">
    <link rel="stylesheet" href="css/estilo_quiz.css">
    <link rel="stylesheet" href="css/jogo01.css">
    <link rel="stylesheet" href="css/jogo02.css">
    <link rel="stylesheet" href="css/jogo03.css">
    <link rel="stylesheet" href="css/tela_final.css">
    <title>Jogo Estatística</title>

  </head>
  <body>
    <!-- tela geral -->
    <div class="tela_geral">
      <!-- tela batalha -->
      <div id="tela_batalha" class="tela_batalha">
        <!-- tela jogador -->
        <div class="jogador">
          <p id="personagem" hidden>
            <?php echo $_POST['personagem'];?>
          </p>
          <label id="minutos" hidden></label>
          <div class="pontos_tempo">
              Tempo: <label id="minutes">00</label>:<label id="seconds">00</label>
              <br>
              Pontos: <label id="pontos">0</label>
          </div>
          <div class="nome_jogador" id="nome_jogador">
            <label>
              <?php echo $_POST['nome'];?>
            </label>
          </div>
          <div id="jogador_imagem">
          </div>
        </div>
        <!-- fim tela jogador -->
        <!-- tela quiz -->
        <div class="quiz">
          <div class="quizArea">
            <div class="multipleChoiceQues">
              <div class="my-progress">
                <progress class="my-progress-bar" min="0" max="100" value="0" step="9" aria-labelledby="my-progress-completion"></progress>
                <p id="my-progress-completion" class="js-my-progress-completion sr-only" aria-live="polite">0% complete</p>
              </div>
              <div id="img_questao">
              </div>
              <div class="quizBox" id="quizBox">
                <div class="question">
                </div>
                <div  class="answerOptions" >
                </div>
                <div class="buttonArea">
                  <button id="next"  class="hidden">Next</button>
                  <button id="submit"  class="hidden">Submit</button>
                </div>
              </div>
            </div>
            <div class="tela_informacao" id="tela_informacao" >
              <p id="resposta_rodada"></p>
              <button id="ok">Ok</button>
            </div>
          </div>
        </div>
        <!-- fim tela quiz -->
        <!-- tela adversário -->
        <div class="adversario">
          <div class="nome_adversario">
              <label> Adversário </label>
          </div>
          <div id="adversario_imagem">
          </div>
        </div>
        <!-- fim tela adversário -->
      </div>
      <!-- fim tela batalha -->
      <!-- tela final/resultado -->
      <div id="tela_final" class="tela_final">
          <h1>
            <span>F</span><span>I</span><span>M</span>
            <span> </span>
            <span>D</span><span>E</span>
            <span> </span>
            <span>J</span><span>O</span><span>G</span><span>O</span><span>!</span>
          </h1>
          <h2>
            <p id="pontuacao_final">Sua Pontuação é</p>
          </h2>
          <a href="index.php">
            <button class="bt_inicio">Início</button>
          </a>
      </div>
      <!-- fim tela final/resultado -->
      <!-- tela jogo01/p1 -->
      <div class="tela_jogo" id="tela_jogo_p1" class="hidden">
        <div class="infos fadeIn animated">
          <h1>Memory<br>Blocks</h1>
          <h3 class="status">-</h3>
          <button class="bt_comecar_jogo_01"><p id="bt_comecar_01">Começar</p></button>
        </div>
        <div class="blocks fadeIn animated">
          <div class="row block-row">
            <div class="block block1" onclick="game.userSendInput('1')">1</div>
            <div class="block block2" onclick="game.userSendInput('2')">2</div>
          </div>
          <div class="row block-row">
            <div class="block block3" onclick="game.userSendInput('3')">3</div>
            <div class="block block4" onclick="game.userSendInput('4')">4</div>
          </div>
          <div class="row">
            <div class="inputStatus"></div>
          </div>
        </div>
      </div>
      <!-- fim tela jogo01/p1 -->
      <!-- tela tela jogo02/p2 -->
      <div class="container-fluid text-center" id="tela_jogo_p2" class="hidden">
        <div class="informacao_jogo">
            <p>Veja se a expressão matemática corresponde com o resultado.</p>
            <button class="bt_comecar_jogo_02"><p id="bt_comecar_02">Começar</p></button>
        </div>
        <div id="display" class="well col-xs-6">
          <div id="working-screen">
            <div id="progressbar"></div>
            <p id="expression">0 + 0</p>
            <p id="result">= 0</p>
            <div id="controls">
              <button id="tick"><div class="bt"><span>&#10003;</span></div></button>
              <button id="cross"><div class="bt"><span>&#88;</span></div></button>
            </div>
            <div id="score">
               <p>Pontos: </p>
             </div>
           </div> <!-- end of working screen -->
         </div>
       </div> <!-- end of fluid container -->
      <!-- fim tela jogo02/p2 -->
      <!-- tela tela jogo03/p3 -->
      <div id="tela_jogo_p3" class="hidden">
        <div id="container">
      	   <div id="game"></div>
      	   <div id="score"><label id="score_jogo_03">0</label></div>
      	   <div id="instructions">Clique (ou pressione a barra de espaço) para empilhar os blocos</div>
      	   <div class="game-ready">
      		     <div id="start-button">Começar</div>
      		     <div></div>
      	   </div>
        </div>
      </div>
      <!-- fim tela jogo03/p3 -->
    </div>
    <!-- fim tela geral -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="js/batalha.js"></script>
    <script src="js/jogo01.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script src="js/jogo02.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js'></script>
    <script src="js/jogo03.js"></script>
  </body>
</html>
