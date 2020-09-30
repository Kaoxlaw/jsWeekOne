<?php
  // vérifie un param 'name' et 'score'
  $name = null;
  $score = null;

  if(isset($GET['name'])) $name = $GET['name'];
  if(isset($GET['score'])) $score = $GET['score'];
  
  if(isset($_POST['name'])) $name = $_POST['name'];
  if(isset($_POST['score'])) $score = $_POST['score'];

  if(isset($_GET['name'])){
    print ("Got a GET Param Name, where the value is " . $name . " and a Score parameter, where the value is " . $score . ". <br><br>" );
  }

  if(isset($_POST['name'])){
    print ("Got a POST Param Name, where the value is " . $name . " and a Score parameter, where the value is " . $score . "." );
  }
  
?>