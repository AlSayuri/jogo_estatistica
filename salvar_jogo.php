<?php

  $nome = $_POST['nome'];
  $pontuacao = $_POST['pontuacao'];
  $personagem = $_POST['personagem'];
  $con = mysqli_connect("localhost", "root", "", "jogo", "3308");

  //echo "<script type='text/javascript'>alert('.$nome.$pontuacao.$personagem.');</script>";
  // Check connection
  if (mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $sql = "insert into jogo(nome,pontuacao,personagem) values('$nome','$pontuacao','$personagem')";
  mysqli_query($con,$sql);
  mysqli_close($con);
  echo "successful";
?>
