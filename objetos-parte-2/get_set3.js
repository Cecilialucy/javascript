/*
Desafio:
Crie um objeto pessoa.
deve ter uma propriedade get chamada usuários que deve armazenar uma array de strings.
Deve ter uma propriedade get chamada usuário que deve retornar o último usúario da aaray.
Sempre que alterar o usuário (set), não deve substituir, mas sim colocar num array, se já não existir na array usuários.
Deve ter uma propriedade get usuários para recuperar o histórico de usuários.



*/

; (function () {
    let usuarios = []
    this.pessoa = {
        get usuario() {
            if (usuarios.length) {
                return usuarios[usuarios - 1]
            }
        },
        set usuario(_usuario) {
            if (usuarios.indexOf(_usuario) < 0) {
                usuarios.push(_usuario)
            }

        },
        get usuarios() {
            return [].concat(usuarios)

        }
    }
})()

