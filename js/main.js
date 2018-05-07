'use strict';

const trivial = [
  {idBloqueContenido: 1,
  pregunta: 'Cual es la capital de Portugal',
  respuesta:[ {id:1, value:'Faro'},
              {id:2, value:'Oporto'},
              {id:3, value:'Lisboa'},
  ],
  respuestaCorrecta:{id: 3}},

  {idBloqueContenido: 2,
  pregunta: 'Cual es la capital de España',
  respuesta:[ {id:1, value:'Faro'},
              {id:2, value:'Oporto'},
              {id:3, value:'Madrid'},
  ],
  respuestaCorrecta:{id: 3}},

  {idBloqueContenido: 3,
  pregunta: 'Cual es la capital de Francia',
  respuesta:[ {id:1, value:'Faro'},
              {id:2, value:'Oporto'},
              {id:3, value:'Paris'},
  ],
  respuestaCorrecta:{id: 3}}

];

// function mostrarPregunta (){
//   for(var i = 0; i <= trivial.length; i ++){
//     console.log(trivial[i].pregunta);
    
//   }
// }
//mostrarPregunta();

// let pregunta;
// let respuesta;

// for (let i = 0; i < trivial.length; i++) {
//   setTimeout(function (y) {
//       console.log(trivial[y].pregunta);
      
//       for(let j = 0; j < respuesta.length; j ++){
//         console.log(respuesta.value);
//       }
//   }, i * 900, i);
// }

// let pregunta;
// let respuesta;

// trivial.forEach(function(a){
//   pregunta = a.pregunta;
//   respuesta = a.respuesta;
//   console.log(pregunta);

//   respuesta.forEach(function(opciones, indice){
//       setTimeout(function(){console.log(opciones.value);}, 2000 * indice);

//   });
// });

// function mostrarPregunta(){
//   var i = 0;
//   setInterval(function(){
//     if(i < trivial.length){
//       console.log(trivial[i].pregunta);
//       for(let x = 0; x < trivial[i].respuesta.length; x++){
//         console.log(pregunta[i].respuesta[x].value);
//       }
//       i++;
//     }
//   }, 3000);
// }

// mostrarPregunta();



