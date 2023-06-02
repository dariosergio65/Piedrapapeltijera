
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
  });