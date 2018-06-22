
// $(function () {
// 	carregarMensagens(console.log, console.error);
// });

function montaTemplate(mensagem) {
	var template = $("#mensagem_template").html();
	// console.log(mensagem);
	return template.replace('{{mensagem}}', mensagem.mensagem)
		.replace('{{nome}}', mensagem.autor.nome)
		.replace('{{login}}', mensagem.autor.login)
		.replace('{{local}}', 'Desconhecido')
		.replace('{{data}}', mensagem.dataCriacao);
}

function adicionarMensagem(container, mensagem) {
	$(container + ' .tweets-container').append(montaTemplate(mensagem));
}

function exibirMensagens(container) {
	$('#loading').modal("open");
	var sucesso = function (data) {
		$.each(data, function (i, mensagem) {
			adicionarMensagem(container, mensagem);
		});
		$('#loading').modal("close");
	};

	var falha = function () {
		Materialize.toast("Sinto muito .. erro ao carregar a mensagens", 1500);
		$('#loading').modal("close");
	};
	carregarMensagens(sucesso, falha);
	
}