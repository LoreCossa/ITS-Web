<?php

    $file_salvataggio = fopen("movimenti.txt", "a");

    $testo_da_salvare = $_POST["nuovaData"].";";
    $testo_da_salvare = $testo_da_salvare.$_POST["nuovoMotivo"].";";
    $testo_da_salvare = $testo_da_salvare.$_POST["nuovoImporto"]."\n";

    fwrite($file_salvataggio, $testo_da_salvare);

    fclose($file_salvataggio);
?>