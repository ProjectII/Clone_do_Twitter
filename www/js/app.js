//Inicializa todos os componentes do template.
$('#formmensagem').on('submit', function () {
    showLoader()
  var sucesso = function(){
       var params = new URLSearchParams("toast=Mensagem enviada com sucesso!");
       window.location = '/index.html?'+ params.toString();
  };
  var falha = function(){
      Materialize.toast("Sinto muito... erro ao enviar mensagem.", 1500);
      hideLoader()
  };
  enviarMensagem(montarMensagem(), sucesso, falha);
  return false;
});


$(function () {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
       
    $('#loading').modal({
      dismissible: false
    });
     Materialize.updateTextFields();
     const url = new URL(location);
     const params = new URLSearchParams(url.search);
     if (params.has("toast")) {
        Materialize.toast(params.get("toast"), 1500);
     } 
});


function showLoader() {
    $('#loading').modal("open");
}

function hideLoader() {
    $('#loading').modal("close");
}

$('#mensagem').on('input', function () {
    var mensagem = $('#mensagem').val();
    if (mensagem.length > 0 && mensagem.length <= 140) {
        // tudo certo
        $('#enviar').removeClass('disabled');
    }
    else {
        $('#enviar').addClass('disabled');
    }
});

function enviarMensagem(mensagem, sucesso, erro) {
    $.ajax({
        url: 'http://service-api.herokuapp.com/mensagens',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(mensagem),
        success: sucesso,
        error: erro
    })
}

function montarMensagem() {
    return {
        "mensagem": $('#mensagem').val(),
        "autor": {
            "login": "LucasAndWagner",
            "nome": "DuplaProjeto"
        },
        "dataCriacao": new Date(),
        "local": null
    }
}
