
const containers = {
    '#todas': carregarTodasAsMensagens,
    '#recebidas': function (sucesso, falha) { sucesso([]); },
    '#enviadas': carregarMensagensEnviadas,
    '#favoritas': listaFavoritas,
};

function montaTemplate(mensagem) {
    var template = $("#mensagem_template").html();
    console.log(mensagem);

    if (!mensagem.autor){
        mensagem.autor = {'nome':'Desconhecido', 'login':'desconhecido'}
    }

    return template.replace('{{mensagem}}', mensagem.mensagem)
        .replace('{{nome}}', mensagem.autor.nome)
        .replace('{{login}}', mensagem.autor.login)
        .replace('{{local}}', 'Desconhecido')
        .replace('{{data}}', mensagem.dataCriacao)
        .replace(new RegExp('{{indice}}', 'g'), mensagem.indice);
}


function adicionaMensagem(container, mensagem) {
    $(container + ' .tweets-container').append(montaTemplate(mensagem));
    getAvatar(mensagem.autor.login, function (avatar) {
        $('#avatar' + mensagem.indice).attr('src', avatar);
    });
}

function exibirMensagens(container, onComplete) {
    $('#loading').modal("open");

    var sucesso = function (data) {
        $(container + ' .tweets-container').html('');
        $.each(data, function (i, mensagem) {
            mensagem.indice = i;
            adicionaMensagem(container, mensagem);
        });
        $('#loading').modal("close");
        onComplete(data);
    };

    var falha = function () {
        Materialize.toast("Sinto muito... erro ao enviar mensagem.", 1500);
        $('#loading').modal("close");
    };

    var operacao = containers[container];
    operacao(sucesso, falha);
}


$(function () {

    var onComplete = function (mensagens) {
        $('.likebutton').on('click', function (e) {
            var mensagem = mensagens[$(this).attr('ref')];
            toggleFavorita(mensagem, function (row) {
                console.log('toggleFavorita', row);
            });
        });
    };

    exibirMensagens('#todas', onComplete);

    $('.aba').on('click', function () {
        exibirMensagens($(this).attr('href'), onComplete);
    });
});