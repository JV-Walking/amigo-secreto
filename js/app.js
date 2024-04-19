
let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos');

    if (nomeAmigo === "") {
        alert('digite um nome!');
        return;

    }

    if (amigos.includes(aumentarPrimeiraLetra(nomeAmigo))) {
        alert('Não pode ter nomes exatamente iguais.');
        return;

    }

    amigos.push(aumentarPrimeiraLetra(nomeAmigo));
    amigosIncluidos.textContent = amigos;

    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    let exibirLista = document.getElementById('lista-sorteio');
    embaralha(amigos);

    if (amigos.length < 4) {
        alert('O número mínimo de participantes é de 4 pessoas!');
        return;
    }

    for (let i = 0; i < amigos.length; i++) {

    if (i == amigos.length - 1) {
            exibirLista.innerHTML = exibirLista.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';

    } else {
            exibirLista.innerHTML = exibirLista.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';

       }
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    amigos = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];

    }
}

function aumentarPrimeiraLetra(nome) {
    return nome.charAt(0).toUpperCase() + nome.substring(1);

  }

