# Projeto #04 - Parrot Card Game

O segundo projeto com JavaScript será a implementação de um jogo da memória temático, Parrot Card Game, com aleatoriedade, efeitos e transição, responsividade e papagaios dançantes(seja lá o que isso significa, ainda não li todo o projeto durante a confecção deste Markdown).

## Requisitos:

### Geral:

+ Nenhuma biblioteca ou linguagem que compilem JS devem ser utilizadas, apenas JavaScript puro;
+ O projeto deverá ser desenvolvido utilizado Git e posto em um repositório público no GitHub;
+ A cada requisito implementado deve ser feito um commit com uma mensagem descritiva do que foi desenvolvido.

### Layout:

+ Deve ser feito um layout responsivo de Desktop e Mobile seguindo o projeto disponível no [figma].

### Distribuição de cartas:

+ Ao entrar no jogo, o usuário insere o número de cartas com que quer jogar(utilizando `prompt()`);

+ O usuário só pode inserir números pares de 4 a 14. Caso o número fuja desta regra, não será aceito e o `prompt()` deverá ser repetido até que o usuário insira um número válido;

+ Após inserir um número válido de cartas, o jogo deverá inserir as cartas virada para baixo na página, de forma que a distribuição seja aleatória.

  + Dica: para embaralhar um array, utilize o código abaixo:

    ```js
    meuArray.sort(comparador); //Após esta linha, meuArray estará embaralhado

    //Esta função pode ficar separada do código acima, onde você preferir
    function comparador() {
      return Math.random() - 0.5;
    }
    ``` 

### Clique na carta:

+ Ao clicar em uma carta, ela deverá ser virada para cima, mostrando o conteúdo da carta;

+ Caso seja a primeira carta do par, ela deverá ser virada para cima e permanecer assim até que o usuário clique em outra carta;

+ Caso seja a segunda carta virada, existem 2 situações:

  + Se as cartas forem iguais, elas deverão permanecer viradas para cima;

  + Se as cartas forem diferentes, o jogo deve aguardar 1 segundo e virar as cartas novamente para baixo;

+ Dica: se quiser fazer o efeito 3D da carta virando, você pode ver o [CSS necessário]. Só se atente que nesse exemplo a carta vira ao passar o mouse, e não ao clicar.

### Fim do jogo:

+ O jogo termina quando todas as cartas forem viradas para cima;

+ Quando o jogo terminar, um `alert()` deverá ser exibido com a mensagem "Você ganhou em X jogadas", sendo X o número de cliques que o usuário deu no jogo.


## Bônus:

+ Adicione um relógio no topo superior direito da tela, contando quantos segundos se passaram desde o início do jogo. Ao final, informe o tempo total no `alert()` de fim de jogo;

+ Ao final do jogo, pergunte com um `prompt()` se o usuário deseja jogar novamente. Se sim, comece o jogo novamente perguntando o número de cartas novamente.
  + O prompt deve receber as strings "sim" ou "não", com todas as letras minúsculas e acentuação correta.


[figma]: https://www.figma.com/file/DXO4yONaLli2MEgyIaSMGW/Parrot-Card-Game-Copy
[CSS necessário]: https://replit.com/@BootcampRespond/FlippedCards#index.html
