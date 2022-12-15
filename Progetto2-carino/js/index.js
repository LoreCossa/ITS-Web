function azionaBottone(idBottone, numZona){{
    if( $(idBottone).hasClass("pulsante-off")){
        $(idBottone).removeClass("pulsante-off");
        $(idBottone).addClass("pulsante-on");

        $("#messaggio").text("Hai abilitato la Zona " + numZona);
        
        $.post(
            "./server/data.php",
            {
                zona: numZona,
                comando: "Attiva"
            },
            function(risposta){
                console.log(risposta);
            }
        );
    } else {
        $(idBottone).removeClass("pulsante-on");
        $(idBottone).addClass("pulsante-off");

        $("#messaggio").text("Hai disabilitato la Zona " + numZona);

        $.post(
            "./server/data.php",
            {
                zona: numZona,
                comando: "Disattiva"
            },
            function(risposta){
                console.log(risposta);
            }
        );
    }
}

}


$(document).ready(function(){
    $("#Zona1").click(function(){azionaBottone("#Zona1", 1);

    });
    $("#Zona2").click(function(){azionaBottone("#Zona2", 2);
        
    });
    $("#Zona3").click(function(){azionaBottone("#Zona3", 3);
        
    });
    $("#Zona4").click(function(){azionaBottone("#Zona4", 4);
        
    });
    $("#Zona5").click(function(){azionaBottone("#Zona5", 5);
        
    });
    $("#Zona6").click(function(){azionaBottone("#Zona6", 6);
       
    });
    
});


function aggiungiZona(){
    numZone = $(".zone_button").length;

    nuovoPulsante = $("<div></div>");

    $(nuovoPulsante).text("Zona " + (numZone+1) );

    $(nuovoPulsante).addClass("zone_button pulsante-off");

    $(nuovoPulsante).attr("id" , "Zona" + (numZone+1));

    $(nuovoPulsante).attr("num", numZone+1);

    $("#button-container").append($(nuovoPulsante));

    $(nuovoPulsante).click(function(event){

        azionaBottone(
            "#" + $(event.target).attr("id"),
            $(event.target).attr("num")
        );


    });
}

function distruggiZona(){

    numZone = $(".zone_button").length;
    if(numZone > 0) {
        idUltimoBottone = "#Zona" + numZone;
    
        $(idUltimoBottone).remove();
    }

}
