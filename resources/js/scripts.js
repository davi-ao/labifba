/**
 * Created by davia on 13/11/2016.
 */
$(document).ready(function(){ //Garante o carregamento da página antes da execução do script.
    //Popup que pede conffirmação para exclusão de usuário

    $(".remove").click(function(e){
        //e.preventDefault();
        var conf = confirm("Tem certeza que deseja remover este item?");

        if(conf){
            $(this).parent().trigger("submit");
        }
        else{
            e.preventDefault();
        }
    }); //Seleciona todos os elementos com a classe remove. Atribui ações ao evento click


    //Conferir senhas na parte updatemyself.php (Alteração da própria senha)
    $(document).on("keyup", "#confsenha", function(){
       if($("#confsenha").val() != $("#senha").val()){
           //console.log("Senhas não correspondem!");
           $("#confsenha").css("background-color", "#f55").next().html("Senhas não correspondem!");
           $("#savalt").attr("disabled", true);
       }
       else{
           $("#confsenha").css("background-color", "#fff").next().html("");
           $("#savalt").attr("disabled", false);
       }
    });

    //Plugin para impressão do relatório
    $(document).on("click", "#print > button", function(){
        console.log("teste");
        $('#print').printThis({
            loadCSS: [
                "http://localhost/labifba/vendor/bootstrap/css/bootstrap.css",
                "http://localhost/labifba/resources/css/print.css"
            ]
        });
    });
});