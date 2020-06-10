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
            <label for="tab1">tab 1</label>
            <div id="tab-content1" class="tab-content">
              <form action="" method="post">
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
                    <!--<input type="text" placeholder="Nome">

                    <button type="submit" id="jogar">Jogar</button>
                    descomentar-->
                </div>  <!-- nome_comecar -->
              </form>
            </div>
          </li>
          <!-- fim tab 1 -->
          <!-- tab 2 -->
          <li>
            <input type="radio" name="tabs" id="tab2">
            <label for="tab2">tab 2</label>
            <div id="tab-content2" class="tab-content animated fadeIn">
              bbb
            </div>
          </li>
          <!-- fim tab 2 -->
          <!-- tab 3 -->
          <li>
            <input type="radio" name="tabs" id="tab3">
            <label for="tab3">tab 3</label>
            <div id="tab-content3" class="tab-content animated fadeIn">
              ccc
            </div>
          </li>
          <!-- fim tab 3 -->
          <!-- tab 4 -->
          <li>
            <input type="radio" name="tabs" id="tab4">
            <label for="tab4">tab 4</label>
            <div id="tab-content4" class="tab-content animated fadeIn">
              dddd
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
