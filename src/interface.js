$( document ).ready(function() {

  $('#temp_reading').html(thermo._temperature);

  $( "#firebutton" ).click(function() {
    $( "#weirdgif" ).toggle();
  })

  $( "#up" ).click(function(){
    thermo.up();
    $('#temp_reading').html(thermo._temperature);
  })

  $( "#down" ).click(function() {
    thermo.down();
    $('#temp_reading').html(thermo._temperature);
  })

  $( "#reset" ).click(function() {
    thermo.reset();
    $('#temp_reading').html(thermo._temperature);
  })

})


$( "#weirdgif" ).hide();
