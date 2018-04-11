
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

$('#formmensagem').on('submit', function () {
    var sucesso = function (data) {
        console.log("deu certo!", data);
    };

    var erro = function (data) {
        console.log("deu errado!", data);
    };

    enviarMensagem(montarMensagem(), sucesso, erro);

    return false;
});

$('mensagem').on('input',function () {
    var mensagem = $('#mensagem').val();
    if (mensagem.length>0 && mensagem.length<=140) {
        // tudo certo
        $('#enviar').removeClass('disabled');
    }
    else{
        $('#enviar').addClass('disabled');
    }
});

function enviarMensagem(mensagem, sucesso, erro) {
    $.ajax({
        url:'http://service-api.herokuapp.com/mensagens',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(mensagem),
       
    })
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
    }
}
