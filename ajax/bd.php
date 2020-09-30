<?php

$cnx = new PDO("mysql:host=localhost;dbname=dbname", "root", "pass", array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

// var_dump($cnx);

$requeteSql = "SELECT * FROM";

$pdoStatement = $cnx->query($requeteSql);

$liste = $pdoStatement->fetchAll();
print json_decode($liste);

?>