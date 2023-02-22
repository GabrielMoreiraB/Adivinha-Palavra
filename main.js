



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


function preencheTeclado (array, pai){
array.forEach(function(key){
    const btn = document.createElement('button');
    btn.textContent = key;
    btn.setAttribute('id', key);
    btn.setAttribute('class', 'tecla');
    btn.addEventListener('click', function(){
        console.log('tecla: ', key)
    })
    pai.appendChild(btn)
})
}

preencheTeclado (conteudo1, tecl1);
preencheTeclado (conteudo2, tecl2);
preencheTeclado (conteudo3, tecl3);

const deleta = document.createElement('button')
deleta.textContent = '<--'
deleta.setAttribute('id', 'deleta');
deleta.setAttribute('class', 'tecla');
deleta.addEventListener('click', () => {
    console.log('deleta')
})
teclApaga.appendChild(deleta)

const enter = document.createElement('button')
enter.textContent = 'ENTER'
enter.setAttribute('id', 'enter');
enter.setAttribute('class', 'tecla');
enter.addEventListener('click', () => {
    console.log('enter')
})
teclApaga.appendChild(enter)
