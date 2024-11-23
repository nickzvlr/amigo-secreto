// Inicializa uma lista vazia para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome de um amigo à lista
function adicionarAmigo() {
  // Obtém o valor do campo de entrada com o id "nome-amigo" e remove espaços extras
  let nomeAmigo = document.getElementById("nome-amigo").value.trim();

  // Verifica se o campo está vazio
  if (nomeAmigo === "") {
    alert("Digite o nome de um amigo!"); // Exibe um alerta se o campo estiver vazio
    return; // Interrompe a execução da função
  }

  // Converte o nome para letras minúsculas para padronizar
  let nomePadronizado = nomeAmigo.toLowerCase();

  // Verifica se o nome já foi adicionado à lista (ignora diferença de maiúsculas/minúsculas)
  if (amigos.map((nome) => nome.toLowerCase()).includes(nomePadronizado)) {
    alert("Nome já adicionado. Adicione outro nome ou um sobrenome!"); // Exibe um alerta
    return; // Interrompe a execução da função
  }

  // Adiciona o nome à lista de amigos
  amigos.push(nomeAmigo);

  // Atualiza a lista exibida na página
  let amigosIncluidos = document.getElementById("lista-amigos");
  if (amigosIncluidos.textContent.trim() === "") {
    // Se a lista estiver vazia, adiciona o nome diretamente
    amigosIncluidos.textContent = nomeAmigo;
  } else {
    // Caso contrário, adiciona o nome separado por vírgula
    amigosIncluidos.textContent += `, ${nomeAmigo}`;
  }

  // Limpa o campo de entrada
  document.getElementById("nome-amigo").value = "";
}

// Função para sortear os amigos
function sortear() {
  // Verifica se há pelo menos 4 amigos na lista
  if (amigos.length < 4) {
    alert("Adicione pelo menos quatro amigos para realizar o sorteio!"); // Exibe um alerta
    return; // Interrompe a execução da função
  }

  // Embaralha a lista de amigos
  embaralhar(amigos);

  // Obtém o elemento onde o resultado do sorteio será exibido
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = ""; // Limpa o conteúdo anterior

  // Gera os pares de sorteio
  for (let i = 0; i < amigos.length; i++) {
    let amigoAtual = amigos[i]; // Amigo atual da iteração
    // Define o próximo amigo como o próximo na lista ou o primeiro, se for o último
    let amigoSorteado = i + 1 === amigos.length ? amigos[0] : amigos[i + 1];
    // Exibe o resultado do sorteio no elemento
    sorteio.innerHTML += `${amigoAtual} --> ${amigoSorteado}<br>`;
  }
}

// Função para embaralhar uma lista (algoritmo Fisher-Yates)
function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    // Gera um índice aleatório baseado no comprimento restante da lista
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // Troca o elemento atual com o elemento aleatório
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

// Função para reiniciar o processo e limpar os dados
function reiniciar() {
  amigos = []; // Esvazia a lista de amigos
  // Limpa o campo de entrada e as áreas exibidas na página
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
