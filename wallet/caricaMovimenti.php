<?php

    $fileMovimenti = fopen("movimenti.txt", "r");
    if ($fileMovimenti) {
        $risposta = "";
        while (($linea = fgets($fileMovimenti)) !== false) {
            // process the line read. finchè ci sono righe da leggere
            $risposta = $risposta.$linea;
        }

        echo $risposta;

        fclose($fileMovimenti);
    }
 
?>