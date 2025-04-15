// Comando para fazer o login - => flecha função
const usuario = [{username: '' , login: ''}]

function logar(){
    const nome = input_username.value
    const senha = input_senha.value

    const user = usuario.find(user => user.username === nome)
    const confirmar = usuario.find(confirmar => confirmar.login === senha)

    if(!user){
        div_mensagem.innerHTML = `Cadastro não encontrado<br>`
    }else if(confirmar){
        div_mensagem.innerHTML = `Login sendo efetuado<br>`
    }else{
        div_mensagem.innerHTML = `Senha incorreta<br>`
    }

}

function registrar(){
    const nome = input_username.value
    const senha = input_senha.value
    div_mensagem.innerHTML = ``
    const novoUser = usuario.find(novo => novo.username === nome)

    if(novoUser){
        div_mensagem.innerHTML = `Cadastro já efetuado com esse nome de usuário <br>`
    }else{
        div_mensagem.innerHTML = `Cadastro sendo realizado <br>`
        usuario.push({username:nome, login:senha})
        div_mensagem.innerHTML += `Cadastro realizado do ${nome}<br>`
    }
}

// Site principal

