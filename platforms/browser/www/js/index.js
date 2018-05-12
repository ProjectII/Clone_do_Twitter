
// $(function(){
// 	carregarMensagens(console.log, console.error);
// });

function montaTemplate(mensagem) {
	var template = $("#mensagem_template").html();
	console.log(mensagem);
	return template.replace('{{mensagem}}', mensagem.mensagem)
	.replace('{{nome}}',mensagem.autor.nome)
	.replace('{{login}}',mensagem.autor.login)
	.replace('{{local}}','Desconhecido')
	.replace('{{data}}',mensagem.dataCriacao);


}