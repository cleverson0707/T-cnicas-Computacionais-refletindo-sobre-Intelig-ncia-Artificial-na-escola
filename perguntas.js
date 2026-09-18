// Banco de dados de perguntas isolado (Modularização)
export const listaPerguntas = [
    {
        texto: "Qual é o planeta mais próximo do Sol?",
        alternativas: ["Terra", "Marte", "Mercúrio", "Vênus"],
        correta: 2 // Índice da resposta correta (Mercúrio)
    },
    {
        texto: "Qual a linguagem de programação mais popular para a Web?",
        alternativas: ["Python", "Java", "C++", "JavaScript"],
        correta: 3 
    },
    {
        texto: "Quantos continentes existem na Terra?",
        alternativas: ["5", "6", "7", "8"],
        correta: 2
    }
];

// Função que utiliza Math.random() e Math.floor() para embaralhar um array (Desafio da Aleatoriedade)
export function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
