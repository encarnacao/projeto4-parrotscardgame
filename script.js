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
    back.classList.add('hide');
    back.setAttribute('id', 'back');
    front.setAttribute('id', 'front');
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
    carta.children[0].classList.toggle('hide');
    carta.children[1].classList.toggle('hide');
}



//const iter = Number(prompt("Digite o número de cartas que deseja adicionar"));
adicionarCarta(4);

const cartas = container.children;
for(let i = 0; i < cartas.length; i++){
    cartas[i].addEventListener('click', virarCarta);
}