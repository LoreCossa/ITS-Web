$(document).ready(
    $("#psw").keypress(function(evento){
        if(evento.which == 13){
            provaAentrare();
        }
    })
);

function provaAentrare(){
    console.log("Maranza!");
    
    
    console.log( $("#user").val() );
    console.log( $("#psw").val() );
    
    
    
    $.post("./server/tiRispondoIo.php" , 
    {
        nomeUtente: $("#user").val(),
        password:   $("#psw").val()   
    },
    function(datiDalServer){
        if(datiDalServer == "Puoi entrare!"){
            window.location.href = "./pagina1.html";
        } else {
            alert("permesso negato");
            $("#user").val("");
            $("#psw").val("");
        }
    });
}
function RitornaAllaHome(){

}