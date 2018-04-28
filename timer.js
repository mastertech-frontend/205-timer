/*

Executa a função após o tempo.
setTimeout(função, tempoEmMilissegundos);

-> Executa a função em loop a cada período de tempo;
setInterval(função, tempoEmMilissegundos);

Para parar um intervalo, é preciso salvar o retorno de setInterval
em uma variável:
let intervalo = setInterval(função, tempoEmMilissegundos);

Usar a função clearInterval(intervalo) para excluir o loop.
clearInterval(intervalo)

*/

let tempo = prompt("Quanto tempo você quer no timer?");
const segundos = document.querySelector("#segundos");
segundos.innerHTML = tempo;

const body = document.querySelector("body");

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function trocar(){
    body.style = `background-color: rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
}

function diminuir(){
    let contagem = Number(segundos.innerHTML) - 1;
    segundos.innerHTML = contagem;

    if(contagem === -1){
        segundos.style = "display: none";
        clearInterval(contaTimer);
        trocar();
        setInterval(trocar ,500);
    }
}

let contaTimer = setInterval(diminuir, 1000);
