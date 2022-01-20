<?php
    $Estado=$_REQUEST["estado"]; 
    $Salida="";
    if (file_exists('Quimica.json')) {
        $contenido = (file_get_contents('Quimica.json'));
        $json = json_decode($contenido, true) or die("Error: No se pudo crear el objeto");
        for ($i=0;$i<count($json);$i++) {
            if ($json[$i]["Estado"]==$Estado){
                $Salida= $Salida . $json[$i]["Nombre"] . " ";
            }
        }
        echo $Salida;
        // echo $xml->Elemento->Nombre['Bismuto']->Nombre;
    } else {
        exit('Error abriendo archivo.json.');
    }
?>