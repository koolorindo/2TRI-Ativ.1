var cxPrincipal = document.querySelector("cx-principal");
var cxPerguntas = document.querySelector("cx-Perguntas");
var cxAlternativas = document.querySelector("cx-Alternativas");
var cxResultado = document.querySelector("cx-Resultado");
var txResultado = document.querySelector(tx-Resultado);
var Perguntas = [
{
    Enunciado : "A IA pode automatizar tarefas repetitivas",
    Alternativas:[
        "Vai eliminar tarefas monotonas","Vai tirar muitos empregos."
    ]
},
{
    Enunciado : "A IA pode tomar decisões baseadas em dados.",
    Alternativas:[
        "Maravilhoso","Assustador"
    ]
},{
    Enunciado : "A IA pode substituir certos empregos.",
    Alternativas:[
        "Não vejo problemas","É o fim dos empregos como conhecemos hoje"
    ]
},{
    Enunciado : "A IA pode ajudar a prever tendências de mercado.",
    Alternativas:[
        "Incrível","Sinistro"
    ]
},{
    Enunciado : "A IA pode trabalhar 24/7 sem pausas.",
    Alternativas:[
        "Surpreendente","Mão de obra barata"
    ]
}
];

var posiçaoAtual = 0;
var perguntaAtual;

mostraPrgunta();

function mostraPergunta(){

    perguntaAtual = perguntas[posiçaoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado;

}