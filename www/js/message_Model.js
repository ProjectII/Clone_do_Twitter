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
// enviarMensagem(montarMensagem(), sucesso, erro);