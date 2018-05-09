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