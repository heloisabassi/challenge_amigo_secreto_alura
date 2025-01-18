let listaDeAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarLista() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    listaDeAmigos.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceSorteado];

    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado foi: ${nomeSorteado}`;
    resultadoHTML.appendChild(itemResultado);
} 
