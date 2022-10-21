//Variaveis globais
const container = document.querySelector('#container');
const relogio = document.querySelector('#relogio');
const cartas = container.children;
let numeroDeCartas, versos;
let cliques = 0,acertos = 0,temporizador = 0,minutos=0, segundos=0;
let primeiraCarta = null, segundaCarta = null;
let tempo;

function contarTempo(){
    /**
     * Conta o tempo de jogo
     * @returns {void}
     */
    temporizador++;
    segundos++;
    if(temporizador % 60 === 0){
        minutos++;
        segundos = 0;
    }
    let digitos = -2;
    relogio.innerHTML = `${("00" + minutos.toFixed(0)).slice(digitos)}:${("00" + segundos.toFixed(0)).slice(digitos)}`;
}

function reset(){
    cliques = 0;
    acertos = 0;
    minutos = 0;
    segundos = 0;
    temporizador = 0;
    relogio.innerHTML = `00:00`;
    numeroDeCartas = null;
    limparCartas();
}

function limparCartas(){
    primeiraCarta = null;
    segundaCarta = null;
}

function rangeArray(arr){
    /**
     * Retorna um array com números de 0 a arr.length
     * @param {Array} arr - Array a ser iterado
     * @returns {Array} Array com números de 0 a arr.length
     */
    const array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(i);
    }
    return array;
}

function verificarCartas(){
    /**
     * Verifica se as cartas são iguais
     * @returns {bool} Verdadeiro se as cartas forem iguais 
     */
    const igual = primeiraCarta.classList[1] === segundaCarta.classList[1]? true : false;
    return igual;
}
function consequencias(check){
    /** 
     * Executa as consequências de acerto ou erro
     * @param {bool} check - Verdadeiro se as cartas forem iguais
     * @returns {void}
    */
    if(check){
        acertos++;
        limparCartas();
    } else {
        setTimeout(() => {
            primeiraCarta.children[0].classList.toggle('front-face-rotate');
            primeiraCarta.children[1].classList.toggle('back-face-rotate');
            primeiraCarta.addEventListener('click', virarCarta);
            segundaCarta.children[0].classList.toggle('front-face-rotate');
            segundaCarta.children[1].classList.toggle('back-face-rotate');
            segundaCarta.addEventListener('click', virarCarta);
            limparCartas();
        }, 1000);
    }
}

function adicionarCarta(iteracoes){
    /**
     * Cria e adiciona cartas ao container
     * @param {number} iteracoes - Quantidade de cartas a serem criadas
     * @returns {void}
     */
    for(let i = 0; i < iteracoes; i++){
        const carta = criarCarta();
        container.appendChild(carta);
    }
}

function criarCarta(){
    /**
     * Cria uma carta com frente e verso
     * Verso a princípio é invisível
     * @returns {HTMLDivElement} Carta
     */
    const carta = document.createElement('div');
    const front = document.createElement('span');
    const back = document.createElement('span');
    carta.classList.add('card');
    back.setAttribute('class', 'back-face face');
    front.setAttribute('class', 'front-face face');
    front.innerHTML = `<img src="media/front.png" />`;
    carta.appendChild(front);
    carta.appendChild(back);
    return carta;
}

function condicaoVitoria(){
    /**
     * Verifica se o jogador ganhou
     * @returns {bool} Verdadeiro se o jogador ganhou
     */
    const vitoria = acertos === cartas.length/2? true : false;
    return vitoria;
}

function virarCarta(){
    /**
     * Vira a carta
     * @returns {void}
     */
    // Impede que mais de duas cartas sejam viradas
    if(primeiraCarta === null || segundaCarta === null){
        const carta = this;
        carta.children[0].classList.toggle('front-face-rotate');
        carta.children[1].classList.toggle('back-face-rotate');
        if(cliques % 2 === 0){
            primeiraCarta = carta;
            //remove a possibilidade de clicar novamente na carta já virada
            primeiraCarta.removeEventListener('click', virarCarta);
        }
        else{
            segundaCarta = carta;
            //Remove a possibilidade de clicar na segunda carta virada
            segundaCarta.removeEventListener('click', virarCarta);
            consequencias(verificarCartas());
        
        }
        cliques++;
        if(condicaoVitoria()){
            //Para o temporizador
            clearInterval(tempo);
            setTimeout(() => {
                alert(`Você ganhou em ${cliques} jogadas!\nTempo de jogo: ${relogio.innerHTML} ou ${temporizador} segundos`);
                reiniciar();
            }, 500);

        }
    }
}

function reiniciar(){
    /**
     * Reinicia o jogo
     * @returns {void}     * 
     */
    let reiniciar = prompt('Deseja reiniciar?');
    while(reiniciar !== 'sim' && reiniciar !== 'não'){
        reiniciar = prompt('Deseja reiniciar?');
    }
    if(reiniciar === 'sim'){
        reset();
        iniciarJogo();
    }
}

function iniciarJogo(){
    /**
     * Inicia o jogo
     * Atribui todos os eventos
     * Inicializa o array dos versos
     * @returns {void}
     */
    // Inicia o temporizador
    tempo = setInterval(contarTempo,1000);
    container.innerHTML = '';
    while((numeroDeCartas % 2 !== 0 || numeroDeCartas < 4) || numeroDeCartas > 14 ){
        numeroDeCartas = Number(prompt('Digite um número par entre 4 e 14'));
    }
     adicionarCarta(numeroDeCartas);
     versos = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
     embaralharCartas();
    
    
    for(let i = 0; i < cartas.length; i++){
        cartas[i].addEventListener('click', virarCarta);
    }
}

function embaralharCartas(){
    /**
     * Seleciona duas cartas por vez para adicionar um verso aleatório
     * @returns {void}
     */
    const indices = rangeArray(cartas);
    const iteracoes = indices.length/2;
    for(let i = 0; i < iteracoes; i++){
        // Sorteia um índice
        const indice1 = Math.floor(Math.random() * indices.length);
        // Seleciona carta do índice e remove o índice sorteado do array
        const carta1 = cartas[indices[indice1]];
        indices.splice(indice1, 1);
        
        // Sorteia outro índice
        const indice2 = Math.floor(Math.random() * indices.length);
        // Seleciona carta do índice e remove o índice sorteado do array
        const carta2 = cartas[indices[indice2]];
        indices.splice(indice2, 1);

        // Sorteia o índice do verso da carta, guarda o verso e remove o verso sorteado do array para que não tenha repetições
        const indexVerso = Math.floor(Math.random() * versos.length);
        const imageHTML = `<img src="media/${versos[indexVerso]}" />`;
        versos.splice(indexVerso, 1);

        // Adiciona o verso da carta
        const verso1 = carta1.children[1];
        verso1.innerHTML = imageHTML;

        const verso2 = carta2.children[1];
    
        verso2.innerHTML = imageHTML;
        
        // Adiciona classe para podermos identificar as cartas iguais
        carta1.classList.add(`carta${i}`);
        carta2.classList.add(`carta${i}`);

    }
}
//Espera a pagina carregar pra iniciar jogo.
setTimeout(iniciarJogo,200);
