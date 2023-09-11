const fileSistem = require('fs')
const colors = require('colors')
const crearArhivo = async( base = 3,listar= false,hasta = 10 )=>{

    try{
        
  
    let consola = '';
    let salida = '';
    

    for (let i = 1 ; i <= hasta ; i ++){
    salida +=`${base}' x ' ${ i } ' = '${base * i}\n`//\n es para haceer salto de linea
    consola +=`${base}${' x '.blue} ${ i } ${'= '.blue}${base * i}\n`//\n es para haceer salto de linea
    }
    if (listar){
        console.log('================'.green)
        console.log( 'tabla del ',colors.blue (base))
        console.log('================'.green)
        console.log(consola)
      }
    

    fileSistem.writeFileSync(`./salida/tabla- ${ base}.txt`,salida)
    return`tabla-${base}.txt creada`;

    }catch( error){
        throw error
    }



}
module.exports = {
      crearArhivo
}