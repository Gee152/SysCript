const aplicacao = new Vue ({
    el: '#main',
    data: {
        txtEncriptografa: '',
        txtDencriptografa: '',
        msgErro: '',
        resultadoTexto: '',
        restutadoTitulo:''
    },
    methods: {
        criptografar (){
            if(this.txtEncriptografa.lenght > 0) {
                this.restutadoTitulo = 'Texto criptografado'
            }   this.resultadoTexto = btoa(this.txtEncriptografa)
            this.msgErro = 'Digite um texto para criptografar';
        }
    },

    verificaBase64 (text){
        const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
        return regex(text);
    }
});