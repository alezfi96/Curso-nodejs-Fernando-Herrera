const { number } = require('yargs');

const argv = require ('yargs')
            .option('b',{
                alias: 'base',
                type:'number',
                demandOption:true,
                describe:'es la  base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type:'boolean',
                demandOption:true,
                default: false,
                describe:'muestra la lista en consola'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption:10,
                default: false,
                describe:'muestra el numero de la   tabla'
            })
            .check((argv,options)=>{
               if(isNaN(argv.b)){
                throw 'la base tiene que ser un numero'
               }
                 return true;   
            })
            .argv;

        module.exports= argv