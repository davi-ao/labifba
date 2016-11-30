<?php
/**
 * Created by IntelliJ IDEA.
 * User: davia
 * Date: 22/11/2016
 * Time: 17:00
 */

include "connect.php";
//session_start();

$link = mysqli_connect($host, $user, $password, $database);

$descs = mysqli_real_escape_string($link, trim($_POST["descs"]));
$idsoft = mysqli_real_escape_string($link, trim($_POST["idsoft"]));

if (!$link) {
    echo "Erro: Não foi possível conectar ao MySQL." . PHP_EOL;
    echo "Número do erro: " . mysqli_connect_errno() . PHP_EOL;
    echo "Erro: " . mysqli_connect_error() . PHP_EOL;
    exit;
} else {
    $query = "UPDATE software SET `Descricao` = '$descs' WHERE idSoftware = $idsoft";
    $result = mysqli_query($link, $query);

    if(!$result){
        //echo mysqli_error($link);
        header("Location: http://localhost/labifba/?page=labs&updts=false");
    }
    else{
        header("Location: http://localhost/labifba/?page=labs&updts=true");
        //echo mysqli_error($link);
    }
}

mysqli_close($link);