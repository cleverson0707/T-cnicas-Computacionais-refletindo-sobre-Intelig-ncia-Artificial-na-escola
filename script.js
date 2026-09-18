// Importando o banco e a função utilitária (Modularização)
import { listaPerguntas, embaralharArray } from './perguntas.js';

// Variáveis de controle de estado
let perguntasEmbaralhadas = [];
let indicePerguntaAtual = 0;
let pontuacao = 0;

// Elementos do DOM
const perguntaTexto = document.getElementById("pergunta-texto");
const alternativasContainer = document.getElementById("alternativas-container");
const telaQuiz = document.getElementById("tela-quiz");
const telaFinal = document.getElementById("tela-final");
const resultadoTexto = document.getElementById("resultado-texto");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Evento do botão de Reiniciar (Desafio Final)
btnReiniciar.addEventListener("click", iniciarJogo);

function iniciarJogo() {
    // Reseta o estado do jogo
    pontuacao = 0;
    indicePerguntaAtual = 0;
    
    // Esconde a tela final e mostra a do quiz
    telaFinal.style.display = "none";
    btnReiniciar.style.display = "none";
    telaQuiz.style.display = "block";

    // Cria uma nova lista embaralhada para a rodada
    perguntasEmbaralhadas = { ...listaPerguntas };
    embaralharArray(perguntasEmbaralhadas);

    carregarPergunta();
}

function carregarPergunta() {
    alternativasContainer.innerHTML = "";
    const perguntaAtual = perguntasEmbaralhadas[indicePerguntaAtual];
    perguntaTexto.textContent = perguntaAtual.texto;

    // Renderiza as alternativas
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.classList.add("btn-opcao");
        botao.addEventListener("click", () => verificarResposta(index));
        alternativasContainer.appendChild(botao);
    });
}

function verificarResposta(indiceSelecionado) {
    const perguntaAtual = perguntasEmbaralhadas[indicePerguntaAtual];

    if (indiceSelecionado === perguntaAtual.correta) {
        pontuacao++;
    }

    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntasEmbaralhadas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    telaQuiz.style.display = "none";
    telaFinal.style.display = "block";
    
    resultadoTexto.textContent = `Você acertou ${pontuacao} de ${perguntasEmbaralhadas.length} perguntas!`;
    
    // Faz o botão sumido reaparecer na tela final
    btnReiniciar.style.display = "inline-block";
}

// Inicia o quiz automaticamente ao carregar a página
iniciarJogo();
