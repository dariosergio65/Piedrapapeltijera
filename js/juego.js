
//onclick="ini()" debe estar en el button inicio
/*
function ini(){ //funcion que se ejecuta al hacer click en inicio

  $('#pantalla1').hide();
  $('#pantalla2').show();
}
*/
  // el button debe tener el id "inicio"

  $(document).ready(function() {
    $("#inicio").click(function() {

      $('#pantalla1').hide();
      $('#pantalla2').show();
      
    });

    $("#elejido").click(function() {

      const boton = document.getElementById("elejido");
      boton.disabled=true;

      let j=0;
      let eleccion="";
      if (document.getElementById('piedra').checked)
      {
        j=j+1;
        eleccion="piedra";
      }
      if (document.getElementById('papel').checked)
      {
        j=j+1;
        eleccion="papel";
      }
      if (document.getElementById('tijera').checked)
      {
        j=j+1;
        eleccion="tijera";
      }
      if(j===0){
        alert('no eligio ninguna opcion');
        return;
      }
      //hacemos que las manos cerradas se agiten agregando la clase shake a los img
      const elemento = document.getElementsByClassName("medida");
      for(let i = 0; i < elemento.length; i++)
      elemento[i].className += " shake";

      //retraso de 2 segundos para que se vea la animacion anterior
      setTimeout(miEleccion , 1999 , eleccion);
      //elijeCompu(3);
      setTimeout(elijeCompu , 2000 , 3);
      setTimeout(normalizar , 2001 , "medida");

      
    });

    

    function miEleccion(pipati){
      const elemento = document.getElementsByClassName("medida");
      if(pipati==="piedra"){
        elemento[1].src="../assets/img/Piedra-der.png";
      }
      if(pipati==="papel"){
        elemento[1].src="../assets/img/Papel-der.png";
      }
      if(pipati==="tijera"){
        elemento[1].src="../assets/img/Tijera-der.png";
      }
      
      
    }

    function elijeCompu(cant){// elegimos al azar la imajen de la compu (lado izqierdo)
      const elemento = document.getElementsByClassName("medida");
      let num = Math.floor(Math.random() * cant);
      if(num===0){
        elemento[0].src="../assets/img/Piedra.png";
      }
      if(num===1){
        elemento[0].src="../assets/img/Papel.png";
      }
      if(num===2){
        elemento[0].src="../assets/img/Tijera.png";
      }
    }

    function normalizar(normal){
      const elemento = document.getElementsByClassName("medida");
      for(let i = 0; i < elemento.length; i++) elemento[i].className = normal; 
      const boton = document.getElementById("elejido");
      boton.disabled=false; //habilitamos el button elejir

    }

    //elijeCompu(3);
  });
