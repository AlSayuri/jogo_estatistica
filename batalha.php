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
    <title>Hello, world!</title>

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
          <div class="pontos_tempo">
              Tempo: <label id="minutes">00</label>:<label id="seconds">00</label>
              <br>
              Pontos: <label id="pontos">0</label>
          </div>
          <div class="nome_jogador">
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
    </div>
    <!-- fim tela geral -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="js/batalha.js"></script>
  </body>
</html>
