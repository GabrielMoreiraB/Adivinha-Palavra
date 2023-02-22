



const tentativas = document.querySelector('.tentativa-container');

const teclado = document.querySelector('.teclado-container');

const teclApaga = document.getElementById('teclado-apaga');
const tecl1 = document.getElementById('teclado-linha1');
const tecl2 = document.getElementById('teclado-linha2');
const tecl3 = document.getElementById('teclado-linha3');

const conteudo1 = ['Q' , 'W' , 'E' , 'R' , 'T' , 'Y' , 'U' , 'I' , 'O' , 'P'];
const conteudo2 = ['A' , 'S' , 'D' , 'F' , 'G' , 'H' , 'J' , 'K' , 'L'];
const conteudo3 = ['Z' , 'X' , 'C' , 'V' , 'B' , 'N' , 'M'];

const row = 6;
const column = 5;

for(let i=0; i<row; i++ ){
    const tetativaLinha = document.createElement('div');
    tetativaLinha.setAttribute('id', i);
    tetativaLinha.setAttribute('class', 'chute-linha');
    for(let x = 0; x < column ; x++){
        const tetativaColuna = document.createElement('div');
        tetativaColuna.setAttribute('id','linha'+ i + 'coluna' + x);
        tetativaColuna.setAttribute('class', 'chute-coluna');
        tetativaLinha.appendChild(tetativaColuna);
    }
    tentativas.appendChild(tetativaLinha)
}

conteudo1.forEach(function(key){
    const btn = document.createElement('button');
    btn.setAttribute('id', key);
    btn.innerHTML = key;
    tecl1.appendChild(btn)
})