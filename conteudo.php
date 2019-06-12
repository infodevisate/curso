<?php

    if (isset($_GET['pagina'])){
        $pagina = $_GET['pagina'];

        switch($pagina){
            case 1:  (file_exists("empresa.php")? include "empresa.php": include "erro.php");
            break;
        }
    }