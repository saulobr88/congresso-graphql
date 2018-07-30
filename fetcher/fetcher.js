const mongoose = require('mongoose');
const { people, films, planets, species, starships, vehicles } = require('../services/swapi');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Models
const Film = require('../models/film');
const Person = require('../models/person');
const Planet = require('../models/planet');
const Specie = require('../models/specie');
const Starship = require('../models/starship');
const Vehicle = require('../models/vehicle');

let localFilms = [];
let localPeople = [];
let localPlanets = [];
let localSpecies = [];
let localStarships = [];
let localVehicles = [];
let endpoint = null;
let continuar = true;

const msg1 = "Vai fazer outra chamada";
const msg2 = "Nao vai fazer outra chamada";
const msg3 = "Salvando no Banco";
const msg4 = "Dados inseridos no Banco";
const msg5 = "Fechou a conexão";
const msg6 = "Encerrando o programa";

// Prepare Mongoose
mongoose.connect('mongodb://localhost/starwars');
mongoose.Promise = global.Promise;

function filmsLoop() {
    films(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localFilms.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            filmsLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Film.insertMany(localFilms)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
    });
}

function peopleLoop() {
    people(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localPeople.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            peopleLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Person.insertMany(localPeople)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
    });
}

function planetsLoop() {
    planets(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localPlanets.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            planetsLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Planet.insertMany(localPlanets)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
    });
}

function speciesLoop() {
    species(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localSpecies.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            speciesLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Specie.insertMany(localSpecies)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
    });
}

function starshipsLoop() {
    starships(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localStarships.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            starshipsLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Starship.insertMany(localStarships)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
    });
}

function vehiclesLoop() {
    vehicles(endpoint).then(data => {
        console.log(`next: ${data.next}\nprevious: ${data.previous}`);
        localVehicles.push( ...data.results );
        if( data.next ){
            endpoint = data.next;
            console.log(msg1);
            vehiclesLoop();
        } else {
            console.log(msg2);
            console.log(msg3);
            Vehicle.insertMany(localVehicles)
                .then( (res) => {
                    console.log(msg4);
                    endpoint = null;
                    mainPoint();
                });
        }
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
    console.log('Star Wars API Fetcher');
    console.log('Por gentileza, escolha a opção desejada:');
    console.log('0 - Sair do programa');
    console.log('1 - Baixar Catalogo de Filmes');
    console.log('2 - Baixar Pessoas');
    console.log('3 - Baixar Planetas');
    console.log('4 - Baixar Especies');
    console.log('5 - Baixar Naves Espaciais');
    console.log('6 - Baixar Veiculos');
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
                filmsLoop();
            break;
            case '2':
                peopleLoop();
            break;
            case '3':
                planetsLoop();
            break;
            case '4':
                speciesLoop();
            break;
            case '5':
                starshipsLoop();
            break;
            case '6':
                vehiclesLoop();
            break;
            default: 
                console.log('Opção não encontrada');
                mainPoint();
        }
    });  
}

mainPoint();

// Buscando todos os registros
/*
let cursor = Person.find({}).cursor();
cursor.on('data', function(doc) {
    // Called once for every document
    console.log('%s', doc.name);
});
cursor.on('close', function(){
    mongoose.connection.close();
    console.log('fechou a conexão');
    process.exit();
});
*/
