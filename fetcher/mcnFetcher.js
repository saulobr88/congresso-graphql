const mongoose = require('mongoose');
const readline = require('readline');
const { getTiririca, getDeputado } = require('../services/mcn');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Models
const Deputado = require('../models/deputado');

// local
let localDeputados = [];
const msg3 = "Salvando no Banco";
const msg4 = "Dados inseridos no Banco";
const msg5 = "Fechou a conexão";
const msg6 = "Encerrando o programa";

// Prepare Mongoose
mongoose.connect('mongodb://localhost/congresso');
mongoose.Promise = global.Promise;

//getTiririca().then(data => { console.log(data.data); });
function deputadoLoop() {
    getDeputado(null).then(data => {
        localDeputados.push( ...data );
        /*
        localDeputados.forEach( d => {
            console.log(d.nomeParlamentar);
        });
        */
       Deputado.insertMany(localDeputados)
            .then( (res) => {
                console.log(msg4);
                mainPoint();
        });
        console.log( `Total de ${localDeputados.length} registros` );
    });
}

function sairF() {
    rl.close();
    mongoose.connection.close();
    console.log(msg5);
    console.log(msg6);
    process.exit();
}

function exibeMenu(){
    console.log('=============================');
    console.log('Meu Congresso Nacional API Fetcher');
    console.log('Por gentileza, escolha a opção desejada:');
    console.log('0 - Sair do programa');
    console.log('1 - Baixar Lista de Deputados');
}

function mainPoint() {
    exibeMenu();
    rl.question('Entre com um dos números: ', (answer) => {
        switch(answer) {
            case '0':
                continuar = false;
                sairF();
            break;
            case '1':
                deputadoLoop();
            break;
            default: 
                console.log('Opção não encontrada');
                mainPoint();
        }
    });  
}

mainPoint();

