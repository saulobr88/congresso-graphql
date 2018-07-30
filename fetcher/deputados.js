
const { getTiririca, getDeputados, getOneDeputado, getDespesas, getPartidos } = require('../services/deputados');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Models
const Deputado = require('../models/deputado');
const DeputadoDespesa = require('../models/deputado_despesa');
const PartidoCamara = require('../models/partido_camara');

let LocalDeputados = [];
let deputados = [];
let LocalPartidos = [];
let partidos = [];

let endpoint = null;
let continuar = true;

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

function deputadosLoop() {
    getDeputados(endpoint).then(data => {
        let next = null;
        let previous = null;
        data.links.find( ( element, index, array) => {
            if(element.rel == 'next'){
                next = element.href;
            } else if ( element.rel == 'previous' ) {
                previous = element.href;
            }
            else return false;
        });
        console.log(`next: ${next}\nprevious: ${previous}`);
        LocalDeputados.push( ...data.dados );
        //console.log(LocalDeputados);
        if( LocalDeputados.length > 0 ) {
            // https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
            const internLoop = async () => {
                await asyncForEach(LocalDeputados, async (value) => {
                  await getOneDeputado(value.id).then( data => {
                        console.log(msg1, value.id);
                        let d = {
                            id: value.id,
                            nomeCivil: data.dados.nomeCivil,
                            nome: data.dados.ultimoStatus.nome,
                            siglaPartido: data.dados.ultimoStatus.siglaPartido,
                            siglaUf: data.dados.ultimoStatus.siglaUf,
                            idLegislatura: data.dados.ultimoStatus.idLegislatura,
                            urlFoto: data.dados.ultimoStatus.urlFoto,
                            dataUltimoStatus: data.dados.ultimoStatus.data,
                            nomeEleitoral: data.dados.ultimoStatus.nomeEleitoral,
                            situracao: data.dados.ultimoStatus.situacao,
                            condicaoEleitoral: data.dados.ultimoStatus.condicaoEleitoral,
                            cpf: data.dados.cpf,
                            sexo: data.dados.sexo,
                            urlWebsite: data.dados.urlWebsite,
                            redeSocial: data.dados.redeSocial,
                            dataNascimento: data.dados.dataNascimento,
                            dataFalecimento: data.dados.dataFalecimento,
                            ufNascimento: data.dados.ufNascimento,
                            municipioNascimento: data.dados.municipioNascimento,
                            escolaridade: data.dados.escolaridade
                        };
                        deputados.push( d );
                    });
                });
                console.log(msg2);
                console.log(msg3);
                Deputado.insertMany(deputados)
                    .then( (res) => {
                        console.log(msg4);
                        endpoint = null;
                        mainPoint();
                    });
            };
            internLoop();
        }
        //mainPoint();
    });
}

function partidosLoop() {
    getPartidos(endpoint).then(data => {
        let next = null;
        let previous = null;
        data.links.find( ( element, index, array) => {
            if(element.rel == 'next'){
                next = element.href;
            } else if ( element.rel == 'previous' ) {
                previous = element.href;
            }
            else return false;
        });
        console.log(`next: ${next}\nprevious: ${previous}`);
        LocalPartidos.push( ...data.dados );
        //console.log(LocalPartidos);
        if( next ){
            endpoint = next;
            console.log(msg1);
            partidosLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            //console.log(LocalPartidos);
            PartidoCamara.insertMany(LocalPartidos)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
        //mainPoint();
    });
}

function sairF() {
    rl.close();
    db.disconnect();
    console.log(msg5);
    console.log(msg6);
    process.exit();
}

function exibeMenu(){
    console.log('=============================');
    console.log('Deputados API Fetcher');
    console.log('Por gentileza, escolha a opção desejada:');
    console.log('0 - Sair do programa');
    console.log('1 - Baixar Partidos da Camara');
    console.log('2 - Baixar Deputados');
    console.log('3 - Baixar Despesas dos Deputados');
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
                partidosLoop();
            break;
            case '2':
                deputadosLoop();
            break;
            case '3':
                despesasLoop();
            break;
            default: 
                console.log('Opção não encontrada');
                mainPoint();
        }
    });
}

// Aqui começa o programa
mainPoint();