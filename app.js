function adicionarAmigo() {
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    // Validações
    if (nomeAmigo === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        campoAmigo.value = '';
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nomeAmigo);
    
    // Exibe o nome na página
    listaAmigos.innerHTML = ''; // Limpa a lista existente antes de reconstruí-la
    amigos.forEach(amigo => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });

    // Limpa o campo de entrada
    campoAmigo.value = '';
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos para sortear!');
        return;
    }

    // Embaralha a lista de amigos usando o algoritmo Fisher-Yates
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Limpa os resultados anteriores
    resultado.innerHTML = '';

    // Exibe o resultado do sorteio
    for (let i = 0; i < amigos.length; i++) {
        const sorteador = amigos[i];
        const sorteado = amigos[(i + 1) % amigos.length]; // O módulo garante que o último sorteie o primeiro
        const novoResultado = document.createElement('li');
        novoResultado.textContent = `${sorteador} -> ${sorteado}`;
        resultado.appendChild(novoResultado);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
