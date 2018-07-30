const { getPartidos, getSenadores, getOneSenador } = require('../services/senadores');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Models
const Senador = require('../models/senador');
const Autoria = require('../models/autorias');
const PartidoSenado = require('../models/partido_senado');

// Local vars
let LocalPartidos = [];
let partidos = [];
let LocalSenadores = [];
let senadores = [];
let LocalAutorias = [];

const msg1 = "Vai fazer outra chamada";
const msg2 = "Nao vai fazer outra chamada";
const msg3 = "Salvando no Banco";
const msg4 = "Dados inseridos no Banco";
const msg5 = "Fechou a conexão";
const msg6 = "Encerrando o programa";

// Prepare Mongoose
const mongoose = require('../config/mongoose');
const db = mongoose();

// https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

function senadoresLoop() {
    getSenadores().then( data => {
        LocalSenadores = data;
        
        if( LocalSenadores.length > 0 ) {
            // https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
            const internLoop = async () => {
                await asyncForEach(LocalSenadores, async (value) => {
                    let id = value.IdentificacaoParlamentar.CodigoParlamentar;
                    await getOneSenador(id).then( data => {
                        console.log(msg1, id);
                        let s = {
                            id: data.IdentificacaoParlamentar.CodigoParlamentar, // CodigoParlamentar
                            nome: data.IdentificacaoParlamentar.NomeParlamentar, // NomeParlamentar
                            nomeCivil: data.IdentificacaoParlamentar.NomeCompletoParlamentar, // NomeCompletoParlamentar
                            sexo: data.IdentificacaoParlamentar.SexoParlamentar, // SexoParlamentar
                            formaTratamento: data.IdentificacaoParlamentar.FormaTratamento,
                            urlFoto: data.IdentificacaoParlamentar.UrlFotoParlamentar,
                            email: data.IdentificacaoParlamentar.EmailParlamentar,
                            siglaPartido: data.IdentificacaoParlamentar.SiglaPartidoParlamentar, // SiglaPartidoParlamentar
                            siglaUf: data.IdentificacaoParlamentar.UfParlamentar, // UfParlamentar
                            dataNascimento: data.DadosBasicosParlamentar.DataNascimento,
                            ufNascimento: data.DadosBasicosParlamentar.UfNaturalidade, //UfNaturalidade
                            endereco: data.DadosBasicosParlamentar.EnderecoParlamentar, // EnderecoParlamentar
                            telefone: data.DadosBasicosParlamentar.TelefoneParlamentar, // TelefoneParlamentar
                            fax: data.DadosBasicosParlamentar.FaxParlamentar // FaxParlamentar
                        };
                        senadores.push( s );
                    });
                });
                console.log(msg2);
                console.log(msg3);
                Senador.insertMany(senadores)
                    .then( (res) => {
                        console.log(msg4);
                        mainPoint();
                    });
            };
            internLoop();
        } else {
            console.log('Lista de senadores está vázia');
            mainPoint();
        }
        
    }); // Fim do getSenadores
}

function partidosLoop() {
    getPartidos().then(data => {
        LocalPartidos = data;
        
        if( LocalPartidos.length > 0 ) {
            // https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
            const internLoop = async () => {
                await asyncForEach(LocalPartidos, async (value) => {
                    let p = {
                        codigo: value.Codigo,
                        sigla: value.Sigla,
                        nome: value.Nome,
                        dataCriacao: value.DataCriacao
                    };
                    partidos.push( p );
                });
                console.log(msg2);
                console.log(msg3);
                PartidoSenado.insertMany(partidos)
                    .then( (res) => {
                        console.log(msg4);
                        mainPoint();
                    });
            };
            internLoop();
        } else {
            console.log('Lista de partidos está vázia');
            mainPoint();
        }

    }); // Fim getPartidos
} // Fim partidosLoop

function sairF() {
    rl.close();
    db.disconnect();
    console.log(msg5);
    console.log(msg6);
    process.exit();
}

function exibeMenu(){
    console.log('=============================');
    console.log('Senadores API Fetcher');
    console.log('Por gentileza, escolha a opção desejada:');
    console.log('0 - Sair do programa');
    console.log('1 - Baixar Partidos do Senado');
    console.log('2 - Baixar Senadores');
    console.log('3 - Baixar Autorias dos Senadores');
}

function mainPoint() {
    exibeMenu();
    rl.question('Entre com um dos números: ', (answer) => {
        endpoint = null; // Sempre reseta o endpoint
        switch(answer) {
            case '0':
                sairF();
            break;
            case '1':
                partidosLoop();
            break;
            case '2':
                senadoresLoop();
            break;
            case '3':
                autoriasLoop();
            break;
            default:
                console.log('Opção não encontrada');
                mainPoint();
        }
    });
}

// Aqui começa o programa
mainPoint();