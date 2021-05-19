let readline = require('readline');

let sorteados = [];
let valorMaximo = 999999; // valor máximo que o número pode chegar
let MinimoCasasDecimais = 6; // valor mínimo de casas decimais
let quantidadeNumeros = 30; // quantidade de números a serem gerados
let sugestao = 0;
//let resp = "";

async function Inicio() {

    for (let i = 0; sorteados.length < quantidadeNumeros; i++) {
        sugestao = criarUnico(sorteados, valorMaximo)
        sorteados.push(sugestao);  // adicionar este numero à array de numeros sorteados para futura referência
    };

    console.log(sorteados);

    // let leitor = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });

    // // leitor.question("Deseja rodar novamente o array? \n", async function (answer) {
    // //     let resp = answer;
    // //     console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");

    // //     if (resp === 'sim' || 'quero' || 'claro') {
    // //         resp = true;
    // //         sugestao2 = await criarUnico(sorteados, valorMaximo);
            
    // //         sorteados.push(sugestao2);
    // //         console.log(sorteados);
    // //     }

    // //     leitor.close();
    // // });

    // // console.log(resp);
    
    return sorteados;
}

function criarUnico(sorteados, valorMaximo) {
    // if (sorteados.length == quantidadeNumeros) {
    //     if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
    //     else return;
    // }

    let numero = JSON.parse(Math.ceil(Math.random() * valorMaximo)); // Escolher um numero ao acaso
    while (sorteados.indexOf(numero) >= 0 || numero.toString().length < MinimoCasasDecimais) {
        // Enquanto o numero já existir, escolher outro e impedir que seja menor que o numero minimo de casas decimais
        numero = Math.ceil(Math.random() * valorMaximo);
    }
    return numero; // devolver o numero único
}

Inicio()
//module.exports = Inicio;

