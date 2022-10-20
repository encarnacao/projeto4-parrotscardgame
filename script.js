const container = document.querySelector('#container');
const cartas = container.children;
const versos = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let cliques = 0;
let primeiraCarta, segundaCarta;
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
    back.innerHTML = ``;
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
 embaralharCartas();


for(let i = 0; i < cartas.length; i++){
    cartas[i].addEventListener('click', virarCarta);
    cartas[i].addEventListener('click', ()=>{
        cliques++;
        console.log(cliques);
    })
}


function embaralharCartas(){
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
    //return carta2;
}