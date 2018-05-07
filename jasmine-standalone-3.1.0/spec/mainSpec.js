/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (1 punto, correcta, 1 segundo) -> 3 puntos
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos
*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
*           (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
*      Si fallo antes de 10 segundos - resto 1 punto
*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */
/* TO DO - list
*  Identificar respuesta correcta
*   -cual es la capital de Portugal
*       - a> Faro
*       - b> Oporto
*       - c> Lisboa
*       El usuaro dice Lisboa, es correcto
* 
*   identificar respuesta incorrecta
*      -cual es la capital de Portugal
*       - a> Faro
*       - b> Oporto
*       - c> Lisboa
*       El usuaro dice Faro, es incorrecto
*
*   identificar respuesta incorrecta
*      -cual es la capital de Portugal
*       - a> Faro
*       - b> Oporto
*       - c> Lisboa
*       El usuaro dice Madrid, es incorrecto
*
*
*
*
* */


describe('calculo de marcador', function(){

    // const preguntas = [{
    //     pregunta: "Who is the strongest?",
    //     opciones: {
    //       a: "Superman",
    //       b: "The Terminator",
    //       c: "Waluigi, obviously"
    //     },
    //     respuestaCorrecta: "c"
    //   },
    //   {
    //     pregunta: "What is the best site ever created?",
    //     opciones: {
    //       a: "SitePoint",
    //       b: "Simple Steps Code",
    //       c: "Trick question; they're both the best"
    //     },
    //     respuestaCorrecta: "c"
    //   },
    //   {
    //     pregunta: "Where is Waldo really?",
    //     opciones: {
    //       a: "Antarctica",
    //       b: "Exploring the Pacific Ocean",
    //       c: "Sitting in a tree",
    //       d: "Minding his own business, so stop asking"
    //     },
    //     respuestaCorrecta: "d"
    //   },
    
    // ];

    // function siguientePregunta() {
    //     for(var i = 0; i <= preguntas.length; i ++ ){
    //         console.log(preguntas[0].pregunta);
    //         console.log(preguntas[i].opciones);
    //     }

    // }
   //siguientePregunta();

//    let pregunta = function (){

//    }

//    let respuesta = function (){

//    }

    function recalcularAcertandoPregunta(marcador, tiempo){
        if (tiempo <= 2){
            return marcador + 2;          
        }
        if(tiempo > 2 && tiempo < 10){
            return marcador + 1;
        }
        if(tiempo >= 10){
            return marcador;
        }
    }

    function recalcularFallandoPregunta(marcador, tiempo){
        if(tiempo > 10){
            return marcador - 2;
        }
        if(tiempo <= 10){
            return marcador - 1;
        }
    }

    function recalcularSinRespuesta(marcador){
        return marcador -3;
    }
  it("suma mas puntos si acierta muy rapido", function(){
      expect(recalcularAcertandoPregunta(0, true, 1)).toBe(2);
      expect(recalcularAcertandoPregunta
(2, true, 2)).toBe(4);
      expect(recalcularAcertandoPregunta(1, true, 1)).toBe(3);
  });

  it("resta puntos si tardas mucho en responder", function(){
     expect(recalcularFallandoPregunta(5, 11)).toBe(3);
  });

  it("si acierto entre 2 y 10 segundos", function(){
     expect(recalcularAcertandoPregunta(1, 5)).toBe(2);
  });

  it("si acierto y tardo mas de 10 segundos", function(){
     expect(recalcularAcertandoPregunta(1, 11)).toBe(1);
  });

  it("si fallo antes de 10 segundos", function(){
     expect(recalcularFallandoPregunta(1, 9)).toBe(0);
  });

  xit("si no contesto antes de 20 segundos", function(){
     expect(recalcularFallandoPregunta(5, 22)).toBe(2);
  });

  it("resta puntos si no hay respuesta", function(){
    expect(recalcularSinRespuesta(0)).toBe(-3);
 });

});

describe("comprobador de respuestas", function(){

    function esCorrecta(pregunta, respuestaUsuario){
        if(pregunta.idBloqueContenido !== respuestaUsuario.idPregunta){
            return false;
        }
        if(respuestaUsuario.idRespuesta !== pregunta.respuestaCorrecta.id){
            return false;
        }
        return true;
        
    }

    it("reconoce una respuest correcta", function(){
        expect(esCorrecta({
            idBloqueContenido: 1,
            pregunta: 'Cual es la capital de Portugal',
            respuesta:[ {id:1, value:'Faro'},
                        {id:2, value:'Oporto'},
                        {id:3, value:'Lisboa'},
            ],
            respuestaCorrecta:{id: 3}},
            {idPregunta: 1, idRespuesta:3})).toBeTruthy();
            //tabla intermedia para relacionar datos de pregunta y respuesta

     });
     it("reconoce una respuesta incorrecta", function(){
        expect(esCorrecta({
            idBloqueContenido: 1,
            pregunta: 'Cual es la capital de Portugal',
            respuesta:[ {id:1, value:'Faro'},
                        {id:2, value:'Oporto'},
                        {id:3, value:'Lisboa'},
            ],
            respuestaCorrecta:{id: 3}},
            {idPregunta: 1, idRespuesta:2})).toBeFalsy();

     });
});



//funcionamiento jasmine con JS
// function describe(theSubject, funct){
// 	try{
// 		funct();
//     }
// 	catch(error){
// 		throw theSubject + error
// 	}
// }

// function it(theSubject, funct){
// 	try{
// 		it();
//     }
// 	catch(error){
// 		throw theSubject + error
//     }
// }

// function expect(actual){
//     return{
// 	toEqual: function(expected){
// 			if(actual == expected){
// 				console.log('green');
//             }
// 			else{
// 				console.log('red');
//             }
//             }
//     }   

// }
// expect(2).toEqual(1);
