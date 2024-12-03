

// lista de palavras
const listasdePalavras = [

        palavra001 = { nome: "IRLANDA", categoria: "PAISES" },
        palavra002 = { nome: "BRASIL", categoria: "PAISES" },
        palavra003 = { nome: "JAPAO", categoria: "PAISES" },
        palavra004 = { nome: "ALEMANHA", categoria: "PAISES" },
        palavra005 = { nome: "ARGENTINA", categoria: "PAISES" },
        palavra006 = { nome: "CACHORRO", categoria: "ANIMAL" },
        palavra007 = { nome: "GATO", categoria: "ANIMAL" },
        palavra008 = { nome: "CAVALO", categoria: "ANIMAL" },
        palavra009 = { nome: "ELEFANTE", categoria: "ANIMAL" },
        palavra010 = { nome: "LEAO", categoria: "ANIMAL" },
        palavra011 = { nome: "CARRO", categoria: "VEICULO" },
        palavra012 = { nome: "MOTO", categoria: "VEICULO" },
        palavra013 = { nome: "BICICLETA", categoria: "TRASPORTE" },
        palavra014 = { nome: "CAMINHAO", categoria: "VEICULO" },
        palavra015 = { nome: "BARCO", categoria: "VEICULO" },
        palavra016 = { nome: "ESCOVA DE DENTES", categoria: "HIGIENE" },
        palavra017 = { nome: "PASTA DE DENTE", categoria: "HIGIENE" },
        palavra018 = { nome: "SABONETE", categoria: "HIGIENE" },
        palavra019 = { nome: "SHAMPOO", categoria: "HIGIENE" },
        palavra020 = { nome: "TOALHA", categoria: "HIGIENE" },
        palavra021 = { nome: "CELULAR", categoria: "APARELHO" },
        palavra022 = { nome: "MONITOR", categoria: "APARELHO" },
        palavra023 = { nome: "RADIO", categoria: "APARELHO" },
        palavra024 = { nome: "COMPUTADOR", categoria: "APARELHO" },
        palavra025 = { nome: "TABLET", categoria: "APARELHO" },
        palavra026 = { nome: "CHILE", categoria: "PAISES" },
        palavra027 = { nome: "FRANCA", categoria: "PAISES" },
        palavra028 = { nome: "MEXICO", categoria: "PAISES" },
        palavra029 = { nome: "ITALIA", categoria: "PAISES" },
        palavra030 = { nome: "PORTUGAL", categoria: "PAISES" },
        palavra031 = { nome: "TIGRE", categoria: "ANIMAL" },
        palavra032 = { nome: "PATO", categoria: "ANIMAL" },
        palavra033 = { nome: "RAPOSA", categoria: "ANIMAL" },
        palavra034 = { nome: "GALINHA", categoria: "ANIMAL" },
        palavra035 = { nome: "URSO", categoria: "ANIMAL" },
        palavra036 = { nome: "AVIAO", categoria: "TRASPORTE" },
        palavra037 = { nome: "TREM", categoria: "TRASPORTE" },
        palavra038 = { nome: "COMPUTADOR", categoria: "APARELHO" },
        palavra039 = { nome: "ONIBUS", categoria: "TRASPORTE" },
        palavra040 = { nome: "TRATOR", categoria: "VEICULO" },
        palavra041 = { nome: "DESODORANTE", categoria: "HIGIENE" },
        palavra042 = { nome: "CREME DENTAL", categoria: "HIGIENE" },
        palavra043 = { nome: "ESCOVA DE CABELO", categoria: "HIGIENE" },
        palavra044 = { nome: "CORTADOR DE UNHA", categoria: "HIGIENE" },
        palavra045 = { nome: "LIXA DE UNHA", categoria: "HIGIENE" },
        palavra046 = { nome: "SMARTPHONE", categoria: "APARELHO" },
        palavra047 = { nome: "NOTEBOOK", categoria: "APARELHO" },
        palavra048 = { nome: "FONE DE OUVIDO", categoria: "APARELHO" },
        palavra049 = { nome: "TELEVISAO", categoria: "APARELHO" },
        palavra050 = { nome: "MICROONDAS", categoria: "ELETRODOMESTICO" }

];

// armazenamentos primários
let palavrasEscolhida;
let categoriaEscolhida;

let mostrarPalavra;
let mostrarCategoria;
let letrasChutadas; 

let tentativasRestantes;
let numeroErrados;

let jogadorNome = '';

// Inicialização dos modais usando Bootstrap 5
let modais = [];
const modalIds = ['modal1', 'modal2', 'modal3', 'modal4', 'modal5', 'resultadoModal', 'avisoModal'];

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa todos os modais
    modalIds.forEach(id => {
        modais[id] = new bootstrap.Modal(document.getElementById(id));
    });

    // Mostra o primeiro modal ao carregar a página
    modais['modal1'].show();

    // Adiciona eventos aos botões dos modais
    const proceedButton = document.getElementById('proceedButton');
    const continueButton = document.getElementById('continueButton');
    const continueButton2 = document.getElementById('continueButton2');
    const continueButton3 = document.getElementById('continueButton3');
    const botaoSim = document.getElementById('botaoSim');

    // Verifica se os elementos existem antes de adicionar event listeners
    if (proceedButton) {
        proceedButton.addEventListener('click', iniciarJogo);
    } else {
        console.log("Elemento com ID 'proceedButton' não encontrado.");
    }

    if (continueButton) {
        continueButton.addEventListener('click', () => mostrarModal('modal3'));
    } else {
        console.log("Elemento com ID 'continueButton' não encontrado.");
    }

    if (continueButton2) {
        continueButton2.addEventListener('click', () => mostrarModal('modal4'));
    } else {
        console.log("Elemento com ID 'continueButton2' não encontrado.");
    }

    if (continueButton3) {
        continueButton3.addEventListener('click', () => mostrarModal('modal5'));
    } else {
        console.log("Elemento com ID 'continueButton3' não encontrado.");
    }

    if (botaoSim) {
        botaoSim.addEventListener('click', function () {
            tocarSom('somClick'); // Toca o som de clique
            modais['modal5'].hide(); // Fecha o modal5
        });
    } else {
        console.log("Elemento com ID 'botaoSim' não encontrado.");
    }

    // Inicializa eventos para botões de fechar modais e outros botões
    const closeButtons = document.querySelectorAll('.btn-close, .btn-secondary, .btn-primary');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => tocarSom('somClick'));
    });

    // Inicializa o primeiro som
    tocarSom('somInicial');
});

// Função para iniciar o jogo
function iniciarJogo() {
    jogadorNome = document.getElementById('nome').value.trim();
    if (!jogadorNome) {
        alert('Por favor, insira seu nome!');
        return;
    }
    modais['modal1'].hide();
    mostrarModal('modal2');

    // Escolhe uma palavra aleatória
    const indexPalavra = parseInt(Math.random() * listasdePalavras.length);
    palavrasEscolhida = listasdePalavras[indexPalavra].nome;
    categoriaEscolhida = listasdePalavras[indexPalavra].categoria;

    // Exibe " _ _ _ " ignorando os espaços
    mostrarPalavra = palavrasEscolhida.split('').map(letra => letra === ' ' ? ' ' : '_');

    // Inicializa variáveis do jogo
    letrasChutadas = [];
    tentativasRestantes = 9;
    numeroErrados = 0;

    atualizarTela();
    tocarSom('somInicial');
}

// Função para mostrar o próximo modal
function mostrarModal(modalId) {
    // Fecha todas as modais abertas
    Object.values(modais).forEach(modal => {
        if (modal && modal._isShown) {
            modal.hide();
        }
    });

    if (modais[modalId]) {
        modais[modalId].show();
    } else {
        console.warn("Número de modal inválido:", modalId);
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    const modalResultado = bootstrap.Modal.getInstance(document.getElementById('resultadoModal'));
    tocarSom('somClick');
    modalResultado.hide();
    iniciarJogo();
}

// Função para atualizar a tela
function atualizarTela() {
    document.querySelector("#p-mostraCategoria").innerText = categoriaEscolhida;
    document.querySelector(".mostrarLetras").innerText = mostrarPalavra.join(' ');
    document.querySelector(".letras-Chutadas").innerText = letrasChutadas.join(', ');
    document.querySelector(".PEPE").src = `img/forca${numeroErrados}.svg`;

    // Condições de término do jogo
    if (tentativasRestantes === 0) {
        abrirModalResultado("VOCÊ PERDEU", "A PALAVRA CORRETA ERA: " + palavrasEscolhida);
        tocarSom('somDerrota');
    } else if (!mostrarPalavra.includes('_')) {
        abrirModalResultado("VOCÊ VENCEU", "MEUS PARABÉNS " + jogadorNome + "!");
        tocarSom('somVitoria');
    }
}

// Função para abrir o modal de resultado
function abrirModalResultado(titulo, mensagem) {
    document.querySelector("#resultadoModalLabel").innerText = titulo;
    document.querySelector("#resultadoMensagem").innerText = mensagem;
    modais['resultadoModal'].show();
}

// Função para abrir o modal de aviso
function abrirModalAviso(mensagem) {
    document.querySelector("#avisoMensagem").innerText = mensagem;
    modais['avisoModal'].show();
}

// Função para processar a entrada de letras
function btcomeçar() {
    tocarSom('somClick');
    const entradaLetra = document.querySelector('.compoParaDigitar');
    const letra = entradaLetra.value.toUpperCase();

    // Validação da letra
    if (!letra.match(/[a-zà-ùç]/i)) {
        abrirModalAviso('POR FAVOR, COLOQUE UMA LETRA VÁLIDA.');
        entradaLetra.value = '';
        tocarSom('somInvalido');
        return;
    }

    if (letrasChutadas.includes(letra)) {
        abrirModalAviso('ESSA LETRA JÁ FOI INSERIDA, TENTE OUTRA.');
        entradaLetra.value = '';
        tocarSom('somLetraRepetida');
        return;
    }

    letrasChutadas.push(letra);

    // Atualiza a palavra ou decrementa tentativas
    if (palavrasEscolhida.includes(letra)) {
        for (let i = 0; i < palavrasEscolhida.length; i++) {
            if (palavrasEscolhida[i] === letra) {
                mostrarPalavra[i] = letra;
                tocarSom('somAcerto');
            }
        }
    } else {
        tentativasRestantes--;
        numeroErrados++;
        tocarSom('somErro');
    }

    entradaLetra.value = '';
    atualizarTela();
}

// Tocar som de inicialização quando o jogo começa
document.addEventListener('DOMContentLoaded', () => {
    tocarSom('somInicial');
});

// Função para tocar som
function tocarSom(idSom) {
    const som = document.getElementById(idSom);
    if (som) {
        if (idSom === 'somInicial') {
            som.volume = 0.2; // Ajusta o volume do som de inicialização
        }
        som.currentTime = 0;
        som.play().catch(error => console.log("Erro ao reproduzir som:", error));
    } else {
        console.log("Elemento de som não encontrado:", idSom);
    }
}
