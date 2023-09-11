
const {crearArhivo} =require('./hekpers/multiplicar.js');
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log( 'base : yargs', argv.base);

crearArhivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(error =>console.log(error))
