$( document ).ready(function() {

  $('#temp_reading').html(thermo._temperature);

  $('.energy_usage').html(thermo.energy_use());

  $( "#firebutton" ).click(function() {
    $( "#weird-gif" ).toggle();
  })

  $( "#up" ).click(function(){
    thermo.up();
    $('#temp_reading').html(thermo._temperature);
    $('.energy_usage').html(thermo.energy_use());
  })

  $( "#down" ).click(function() {
    thermo.down();
    $('#temp_reading').html(thermo._temperature);
    $('.energy_usage').html(thermo.energy_use());
  })

  $( "#reset" ).click(function() {
    thermo.reset();
    $('#temp_reading').html(thermo._temperature);
    $('.energy_usage').html(thermo.energy_use());
    $( "#psm_off" ).show();
    $( "#psm_on" ).hide();
  })

  $( "#psm_off" ).click(function() {
    thermo.powerSavingModeOff();
    $( "#psm_off" ).toggle();
    $( "#psm_on" ).toggle();
  })

  $( "#psm_on" ).click(function() {
    thermo.powerSavingModeOn();
    $( "#psm_off" ).toggle();
    $( "#psm_on" ).toggle();
  })

})
