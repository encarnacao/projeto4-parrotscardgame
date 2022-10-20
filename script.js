const container = document.querySelector('#container');
function adicionarCarta(iteracoes){
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
    back.innerHTML = `<img src="media/metalparrot.gif" />`;
    carta.appendChild(front);
    carta.appendChild(back);
    return carta;
}

function virarCarta(){
    /**
     * Vira a carta
     * @returns {void}
     */
    const carta = this;
    carta.children[0].classList.toggle('front-face-rotate');
    carta.children[1].classList.toggle('back-face-rotate');
}



let numeroDeCartas;
while((numeroDeCartas % 2 !== 0 || numeroDeCartas < 4) || numeroDeCartas > 14 ){
    numeroDeCartas = Number(prompt('Digite um número par entre 4 e 14'));
}
 adicionarCarta(numeroDeCartas);

const cartas = container.children;
for(let i = 0; i < cartas.length; i++){
    cartas[i].addEventListener('click', virarCarta);
}