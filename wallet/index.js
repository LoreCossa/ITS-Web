function salvaSulServer(giorno, motivo, importo){
    $.post(
        "./salvaMovimenti.php",
        {
            nuovaData: giorno,
            nuovoMotivo: motivo,
            nuovoImporto: importo
        }
    );
}

function calcolaTotale(){
    tot = 0;
    for( k=0; k<$(".valore").length; k++){
        tot +=  parseFloat($(".valore")[k].textContent);
    }
    //tot.append("€");
    $("#totale").text(tot);
}
function aggiungiMovimento(giorno, motivo, importo){
    nuovoDiv = $("<div class='movimento'></div>");
    nuovoDivGiorno = $("<div class='giorno'></div>");
    nuovoDivMotivo = $("<div class='motivo'></div>");
    nuovoDivImporto = $("<div class='importo'></div>");
    nuovoSpanImporto = $("<span class='valore'></span>");

    $(nuovoDivMotivo).text(motivo);
    //ToDo:copiar ei valori dalle altre due caselle di testo
    $(nuovoDivGiorno).text(giorno);
    $(nuovoSpanImporto).text(importo);

    nuovoDivImporto.append(nuovoSpanImporto);
    nuovoDivImporto.append("€");

    nuovoDiv.append(nuovoDivGiorno);
    nuovoDiv.append(nuovoDivMotivo);
    nuovoDiv.append(nuovoDivImporto);

    if(importo >= 0) {
        nuovoDiv.addClass("entrata")
    } else{
        nuovoDiv.addClass("uscita");
    }

    $("#area-movimenti").append(nuovoDiv);
    
    calcolaTotale();
    
}

$(document).ready(function(){
    $("#aggiungi").click(function(){
        $("#area-inserimento").css("display","block")    
    });

    $("#nuovo-giorno").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display","none");
        } else if(event.key === "Enter"){
            aggiungiMovimento(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
            
            salvaSulServer(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
          }
    });

    $("#nuovo-motivo").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display","none");
        } else if(event.key === "Enter"){
            aggiungiMovimento(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
            
            salvaSulServer(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
          }
    });

    $("#nuovo-importo").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display","none");
        } else if(event.key === "Enter"){
            aggiungiMovimento(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
            
            salvaSulServer(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
         }
    });

    $.get(
        "caricaMovimenti.php",
        function(datiDalServer){
            console.log(datiDalServer);
            nuoviMovimenti= datiDalServer.split('\n');
            for(i=0; i<nuoviMovimenti.length-1; i++){
                movimento = nuoviMovimenti[i];
                datiMovimento = movimento.split(';');

                giorno = datiMovimento[0];
                motivo = datiMovimento[1];
                importo = datiMovimento[2];
                aggiungiMovimento(giorno, motivo, importo);
            }

        }

    );
    

});