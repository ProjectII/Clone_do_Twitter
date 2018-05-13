
// const messagesURL = 'http://service-api.herokuapp.com/messages';


// function getMessages() {
//     return $.getJSON(messagesURL);
//
// }


function carregarMensagens(sucesso, falha) {
	$.ajax({
		url:'http://service-api.herokuapp.com/mensagens'+'?&_sort=dataCriacao&_order=DESC',
		type:'get',
		dataType:'json',
		success:sucesso,
		error:falha

	});
}