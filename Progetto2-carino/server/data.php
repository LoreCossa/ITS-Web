<?php
$numero_zona = $_POST['zona'];
$nomeFile = "zona".$numero_zona.".log";
$nuovofile = fopen($nomeFile, "a");


$DateAndTime = date('m-d-Y h:i:s', time()); 
$azione = $_POST['comando'];

fwrite($nuovofile, $DateAndTime." : ".$azione."\n"); 
fclose($nuovofile);

echo "zona ".$numero_zona." ".$azione;



?>