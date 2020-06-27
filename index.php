<?php

  $con = mysqli_connect("localhost", "root", "", "jogo", "3308");
  $query_p1 = "SELECT nome, pontuacao FROM jogo where personagem = 'p1' order by pontuacao desc limit 7";
  $query_p2 = "SELECT nome, pontuacao FROM jogo where personagem = 'p2' order by pontuacao desc limit 7";
  $query_p3 = "SELECT nome, pontuacao FROM jogo where personagem = 'p3' order by pontuacao desc limit 7";
?>

<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilo_geral.css">
    <link rel="stylesheet" href="css/estilo_inicio_tab.css">
    <link rel="stylesheet" href="css/estilo_inicio.css">
    <link rel="stylesheet" href="css/estilo_inicio_outros.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- tela geral -->
    <div class="tela_geral" >
      <!-- class tab -->
      <ul class="tabs">
          <!-- tab 1 -->
          <li>
            <input type="radio" checked name="tabs" id="tab1">
            <label for="tab1">Início</label>
            <div id="tab-content1" class="tab-content">
              <form action="batalha.php" method="post">
                <div class="div_personagem">
                  <p class="p_tela">
                        <!-- p1-->
				                <input type="radio" name="personagem" id="p1" value="p1">
                        <label for="p1" id="p1">
                          <img src="imagem/joseph.png">
                  </p><!-- p_tela-->
                  <p class="p_tela" >
                        <!-- p2-->
				                <input type="radio" name="personagem" id="p2" value="p2" >
                        <label for="p2">
                          <img src="imagem/jotaro.png">
                        </label>
                  </p><!-- p_tela-->
                  <p class="p_tela">
                        <!-- p3-->
				                <input type="radio" name="personagem" id="p3" value="p3" >
                        <label for="p3">
                          <img src="imagem/giorno.png">
                        </label>
                  </p><!-- p_tela-->
                </div><!-- div_personagem-->
                <div class="nome_comecar">
                    <input type="text" name="nome" placeholder="Nome">
                    <button type="submit" id="jogar">Jogar</button>
                </div>  <!-- nome_comecar -->
              </form>
            </div>
          </li>
          <!-- fim tab 1 -->
          <!-- tab 2 -->
          <li>
            <input type="radio" name="tabs" id="tab2">
            <label for="tab2">Como Jogar</label>
            <div id="tab-content2" class="tab-content">
              <h1>Objetivo:</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h1>Pontuação:</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h1>Personagens:</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <!-- fim tab 2 -->
          <!-- tab 3 -->
          <li>
            <input type="radio" name="tabs" id="tab3">
            <label for="tab3">Ranking</label>
            <div id="tab-content3" class="tab-content animated fadeIn">
              <!-- personagem rank -->
              <div class="rank_personagem">
                <div class="imagem">
                  <img src="imagem/joseph.png">
                </div>
                <div class="imagem">
                  <img src="imagem/jotaro.png">
                </div>
                <div class="imagem">
                  <img src="imagem/giorno.png">
                </div>
              </div>
              <!-- fim personagem rank -->
              <!-- rank personagem 1 -->
              <div class="tabelas">
              <table class="container_rank">
	               <thead>
		                <tr>
			                <th><h1>#</h1></th>
			                <th><h1>Nome</h1></th>
			                <th><h1>Pontos</h1></th>
		                </tr>
                    <tbody>
                      <?php
                        $i=0;
                        if ($result = $con ->query($query_p1)) {
                          while ($row = $result->fetch_assoc()) {
                            $i++;
                            $nome = $row["nome"];
                            $pontuacao = $row["pontuacao"];

                            echo '<tr>
                            <td>'.$i.'</td>
                            <td>'.$nome.'</td>
                            <td>'.$pontuacao.'</td>
                            </tr>';
                          }
                          if($i < 7){
                            while($i<7){
                              $i++;
                              echo '<tr>
                              <td>'.$i.'</td>
                              <td>'.'</td>
                              <td>' .'</td>
                              </tr>';
                            }
                          }
                        }

                    ?>
                    </tbody>
	              </thead>
              </table>
              <!-- fim rank personagem 1 -->
              <!-- rank personagem 2 -->
              <table class="container_rank">
	               <thead>
		                <tr>
			                <th><h1>#</h1></th>
			                <th><h1>Nome</h1></th>
			                <th><h1>Pontos</h1></th>
		                </tr>
                    <tbody>
                      <?php
                        $i=0;
                        if ($result = $con ->query($query_p2)) {
                          while ($row = $result->fetch_assoc()) {
                            $i++;
                            $nome = $row["nome"];
                            $pontuacao = $row["pontuacao"];

                            echo '<tr>
                            <td>'.$i.'</td>
                            <td>'.$nome.'</td>
                            <td>'.$pontuacao.'</td>
                            </tr>';
                          }
                          if($i < 7){
                            while($i<7){
                              $i++;
                              echo '<tr>
                              <td>'.$i.'</td>
                              <td>'.'</td>
                              <td>' .'</td>
                              </tr>';
                            }
                          }
                        }

                    ?>
                    </tbody>
	              </thead>
              </table>
              <!-- fim rank personagem 2 -->
              <!-- rank personagem 3 -->
              <table class="container_rank">
	               <thead>
		                <tr>
			                <th><h1>#</h1></th>
			                <th><h1>Nome</h1></th>
			                <th><h1>Pontos</h1></th>
		                </tr>
                    <tbody>
                      <?php
                        $i=0;
                        if ($result = $con ->query($query_p3)) {
                          while ($row = $result->fetch_assoc()) {
                            $i++;
                            $nome = $row["nome"];
                            $pontuacao = $row["pontuacao"];

                            echo '<tr>
                            <td>'.$i.'</td>
                            <td>'.$nome.'</td>
                            <td>'.$pontuacao.'</td>
                            </tr>';
                          }
                          if($i < 7){
                            while($i<7){
                              $i++;
                              echo '<tr>
                              <td>'.$i.'</td>
                              <td>'.'</td>
                              <td>' .'</td>
                              </tr>';
                            }
                          }
                        }

                    ?>
                    </tbody>
	              </thead>
              </table>
              <!-- fim rank personagem 3 -->
              <!-- fim tabela rank -->
            </div>
          </li>
          <!-- fim tab 3 -->
          <!-- tab 4 -->
          <li>
            <input type="radio" name="tabs" id="tab4">
            <label for="tab4">Sobre</label>
            <div id="tab-content4" class="tab-content animated fadeIn">
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;Jogo desenvolvido para a disciplina de Estatística Aplicada do curso de pós-graduação em Banco de Dados
                e BI 1/2020 da Faculdade de Tecnologia Senac DF. <br>
              </h1>
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;Deselvolvido por: <br>
                <ul id="nome_alunos">
                  <li>&nbsp;&nbsp;Aline Sayuri Hashimura</li>
                  <li>&nbsp;&nbsp;Matheus Henrique Xavier Alves</li>
                </ul>
              </h1>
              <div class="gif">
              </div>
            </div>
          </li>
          <!-- fim tab 3 -->
      </ul>
      <!-- fim class tab -->
    </div>
    <!-- fim tela geral -->


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  </body>
</html>
