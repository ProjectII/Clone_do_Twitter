
//Inicializa todos os componentes do template.
$(function () {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();

    $('#loading').modal({
        dismissible: false
    });

    Materialize.updateTextFields();
});


function showLoader() {
    $('#loading').modal("open");
}

function hideLoader() {
    $('#loading').modal("close");
}

$('#formmensagem').on('submit', function () {
    var mensagem = montarMensagem();
    // alert('a mensagem é' + mensagem);
    //console.log(montarMensagem());
    enviarMensagem(mensagem);
    return false;
});

function enviarMensagem(mensagem) {
    $.ajax({
        url:'http://service-api.herokuapp.com/mensagens',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(mensagem),
        success: function (data) {
            console.log("A requisição terminou com sucesso");
            console.log(data);
        },
        error: function(error) {
            console.log("A requisição terminou com sucesso");        
        }
    });
    console.log("codigo logo de depois do $.ajax")
}

function montarMensagem() {
    return {
        "mensagem": $('#mensagem').val(),
        "autor": {
            "login": "wagnerrodrigo",
            "nome": "wagner rodrigo"
        },
        "dataCriacao": new Date(),
        "local": null
    };


}
