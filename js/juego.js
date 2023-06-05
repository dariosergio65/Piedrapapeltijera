
//onclick="ini()" debe estar en el button inicio
/*
function ini(){ //funcion que se ejecuta al hacer click en inicio

  $('#pantalla1').hide();
  $('#pantalla2').show();
}
*/
  // el button debe tener el id "inicio"

  $(document).ready(function() {

    let compuEleccion="";
    let eleccionjug="";
    let puntocompu=0;
    let puntojug=0;

    $("#inicio").click(function() {
     
      $('#pantalla1').hide();

      const nom = document.getElementById("nom");
      let nombre = nom.value;
      const jug = document.getElementById("jugader");
      jug.textContent += nombre;
      $('#pantalla2').show();
      
    });

    $("#elejido").click(function() {

      rese(); //borra una alerta si la hubiere
      
      const boton = document.getElementById("elejido");
      boton.disabled=true;

      let j=0;
      // vemos que elige el jugador
      if (document.getElementById('piedra').checked)
      {
        j=j+1;
        eleccionjug="piedra";
      }
      if (document.getElementById('papel').checked)
      {
        j=j+1;
        eleccionjug="papel";
      }
      if (document.getElementById('tijera').checked)
      {
        j=j+1;
        eleccionjug="tijera";
      }
      if(j===0){
        //alert('no eligio ninguna opcion');
        mialerta("No eligió ninguna opción");
        normalizar("medida");
        return;
      }
      // ahora elige la compu al azar
      let num = Math.floor(Math.random() * 3);
      if(num===0){
        // elemento[0].src="./assets/img/Piedra.png";
        compuEleccion="piedra";
      }
      if(num===1){
        // elemento[0].src="./assets/img/Papel.png";
        compuEleccion="papel";
      }
      if(num===2){
        // elemento[0].src="./assets/img/Tijera.png";
        compuEleccion="tijera";
      }

      //hacemos que las manos cerradas se agiten agregando la clase shake a los img
      const elemento = document.getElementsByClassName("medida");
      for(let i = 0; i < elemento.length; i++)
      elemento[i].className += " shake";

      //retraso de 2 segundos para que se vea la animacion anterior
      setTimeout(miEleccion , 999 , eleccionjug);
      //elijeCompu(3);
      setTimeout(imgCompu , 1000 , compuEleccion);
      setTimeout(normalizar , 1001 , "medida");
      setTimeout(elecciones , 1002 , compuEleccion , eleccionjug);
      setTimeout(ganaPunto , 1003);

      

      
    });

    

    function miEleccion(pipati){
      const elemento = document.getElementsByClassName("medida");
      if(pipati==="piedra"){
        elemento[1].src="./assets/img/Piedra-der.png";
      }
      if(pipati==="papel"){
        elemento[1].src="./assets/img/Papel-der.png";
      }
      if(pipati==="tijera"){
        elemento[1].src="./assets/img/Tijera-der.png";
      }
      
      
    }

    function imgCompu(compu){// elegimos al azar la imajen de la compu (lado izqierdo)
      const elemento = document.getElementsByClassName("medida");
      // let num = Math.floor(Math.random() * cant);
      if(compu==="piedra"){
        elemento[0].src="./assets/img/Piedra.png";
        // compuEleccion="piedra";
      }
      if(compu==="papel"){
        elemento[0].src="./assets/img/Papel.png";
        compuEleccion="papel";
      }
      if(compu==="tijera"){
        elemento[0].src="./assets/img/Tijera.png";
        compuEleccion="tijera";
      }
    }

    function normalizar(normal){
      const elemento = document.getElementsByClassName("medida");
      for(let i = 0; i < elemento.length; i++) elemento[i].className = normal; 
      const boton = document.getElementById("elejido");
      boton.disabled=false; //habilitamos el button elejir

    }

    function mialerta(texto){
    
      var alerta = document.createElement('div');
      alerta.classList.add('alert', 'alert-danger', 'mt-3', 'alert-dismissible');
      alerta.setAttribute('role', 'alert');
      alerta.id = 'idalerta';
  
      // Agregar el contenido al alerta
      var mensaje = document.createTextNode(texto);
      alerta.appendChild(mensaje);
    
      //boton
      var boton = document.createElement('button');
      boton.classList.add('btn-close');
      boton.setAttribute('type', 'button');
      boton.setAttribute('data-bs-dismiss', 'alert');
      boton.setAttribute('aria-label', 'close');
      /*
      boton.addEventListener('click', function() {
        alerta.remove(); // Cerrar la alerta al hacer clic en el botón de cierre
      });
      */
      alerta.appendChild(boton);
  
      // Agregar el alerta al documento
      var contenedor = document.querySelector('#alerta');
      contenedor.appendChild(alerta);
    }

    function rese(){ // lo único que hace es borrar una alarma remanente si la hubiere
      // se ejecuta con los botones Borrar y Resumen
      let rem = document.getElementById('idalerta'); 
      if (rem != null){
       rem.remove();
      }
   }

   function elecciones(compu, jugader){
    let choice=compu+jugader;
    let alerta=`Se eligió: ${compu} ${jugader}`;

    switch (choice) {
      case 'piedrapiedra':
      case 'papelpapel':
      case 'tijeratijera':
        alerta=alerta + ` Resultado: empate (nadie suma)`
        break;
      case 'piedrapapel':
        alerta=alerta + ` Resultado: Punto para Jugader`
        puntojug++;
        break;
      case 'piedratijera':
        alerta=alerta + ` Resultado: Punto para la Compu`
        puntocompu++;
        break;
      case 'papelpiedra':
        alerta=alerta + ` Resultado: Punto para la Compu`
        puntocompu++;
        break;
      case 'papeltijera':
        alerta=alerta + ` Resultado: Punto para Jugader`
        puntojug++;
        break;
      case 'tijerapiedra':
        alerta=alerta + ` Resultado: Punto para Jugader`
        puntojug++;
        break;
      case 'tijerapapel':
        alerta=alerta + ` Resultado: Punto para la Compu`
        puntocompu++;
        break;
      default:
          console.log(`Sorry, we are out of ${choice}.`);
    }
    mialerta(alerta);
   }

   function ganaPunto(){
    const valorCompu = document.getElementById('compu');
    const valorJuga = document.getElementById('juga');
    valorCompu.textContent = puntocompu;
    valorJuga.textContent = puntojug;
   }

  });
