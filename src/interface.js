$( document ).ready(function() {

  readThermostat();

  $( "#firebutton" ).click(function() {
    $( "#weird-gif" ).toggle();
  })

  $( "#up" ).click(function(){
    thermo.up();
    readThermostat();
  })

  $( "#down" ).click(function() {
    thermo.down();
    readThermostat();
  })

  $( "#reset" ).click(function() {
    thermo.reset();
    readThermostat();
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
    console.log(thermo._temperature);
    $('#temp_reading').html(thermo._temperature);
    $( "#psm_off" ).toggle();
    $( "#psm_on" ).toggle();
  })

  function readThermostat (){
    $('#temp_reading').html(thermo._temperature);
    $('.energy_usage').html(thermo.energy_use());
  }

})
