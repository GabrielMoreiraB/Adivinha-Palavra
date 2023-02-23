



const tentativas = document.querySelector('.tentativa-container');

const teclado = document.querySelector('.teclado-container');

const teclApaga = document.getElementById('teclado-apaga');
const tecl1 = document.getElementById('teclado-linha1');
const tecl2 = document.getElementById('teclado-linha2');
const tecl3 = document.getElementById('teclado-linha3');

const rows = 6;
let linhaAtual = 0;
const columns = 5;
let colunaAtual = 0;
const palavra = 'VASCO';
let palpite = [];
let mapaPalavra = [];

for (let i = 0; i < palavra.length; i++) {
    mapaPalavra[palavra[i]] = i;
}
//console.log(mapaPalavra)
//console.log(mapaPalavra['p'])

const conteudo1 = ['Q' , 'W' , 'E' , 'R' , 'T' , 'Y' , 'U' , 'I' , 'O' , 'P'];
const conteudo2 = ['A' , 'S' , 'D' , 'F' , 'G' , 'H' , 'J' , 'K' , 'L'];
const conteudo3 = ['Z' , 'X' , 'C' , 'V' , 'B' , 'N' , 'M'];



for(let i=0; i<rows; i++ ){
    const tetativaLinha = document.createElement('div');
    tetativaLinha.setAttribute('id', i);
    tetativaLinha.setAttribute('class', 'chute-linha');
    for(let x = 0; x < columns ; x++){
        const tetativaColuna = document.createElement('div');
        tetativaColuna.setAttribute('id','linha'+ i + 'coluna' + x);
        tetativaColuna.setAttribute('class', i === 0 ?  'chute-coluna focus' : 'chute-coluna');
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
        addLetraItem(key)
    })
    pai.appendChild(btn)
})
}

function addLetraItem(key){
    if(colunaAtual == columns) return
    const chuteatual = document.querySelector('#linha'+linhaAtual+'coluna'+colunaAtual);
    chuteatual.textContent = key;
    colunaAtual++;
    palpite.push(key);
    //console.log(palpite)
}


function checkPalpite (){
    if(palpite.length !== columns) return

    palpite = palpite.join("");

    let colunasDePalpites = document.querySelectorAll('.focus');
    //console.log(colunasDePalpites)

    for(let i = 0; i < columns; i++){
        const letraTest = palpite[i];
        
        if(mapaPalavra[letraTest] === undefined){

            colunasDePalpites[i].classList.add('errado')
        } else {
            if(mapaPalavra[letraTest] === i){
                colunasDePalpites[i].classList.add('certo')
            } else{
                colunasDePalpites[i].classList.add('talvez')
            }
        }
    }

    if(palpite === palavra){
        window.alert('Acertou!')
    }
    if(linhaAtual === rows-1){
        window.alert('Errou!')
    }else{
        moveProxLinha();
        
    }
}

function moveProxLinha(){
    let colunasDePalpites = document.querySelectorAll('.focus');
    colunasDePalpites.forEach(function(item){
        item.classList.remove('focus')
    })
    colunaAtual = 0;
    linhaAtual++;
    palpite = [];

    let linhaAlvo = document.getElementById(linhaAtual);
    //console.log(linhaAlvo)
    let colunasAlvo = linhaAlvo.querySelectorAll('.chute-coluna');
    //console.log(colunasAlvo)
    colunasAlvo.forEach(function(item){
        item.classList.add('focus');
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
enter.addEventListener('click', checkPalpite)
teclApaga.appendChild(enter)
