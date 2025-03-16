
const amigos = [];

function adicionarAmigo() {
    //console.log ('O botão foi clicado')
    const input = document.getElementById('amigo');
    const nome = input.value.trim();


    if (nome && !amigos.includes(nome)){ 
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';

}else{
    alert('nome inválido ou já adicionado')
}

}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });



}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('adicione pelo menos 2 nomes de amigos para sortear');
        return

    }
    
    const sorteio = [...amigos];
    const resultado = [];

    amigos.forEach(amigo => {
        let sorteado;
        do {
            sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (sorteado===amigo);

        resultado.push({amigo,sorteado});
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    });

    exibirResultado(resultado);


  

    function exibirResultado(resultado) {
        const listaResultado = document.getElementById('resultado');
        listaResultado.innerHTML = '';


        resultado.forEach(par => {
            const li = document.createElement('li');
            li.textContent = `${par.amigo} tirou ${par.sorteado}`;
            listaResultado.appendChild(li);
        });

    }


}
