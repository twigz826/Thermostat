$(document).ready(function() {
  let thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click',function(){
    thermostat.increaseTemp();
    updateTemperature();
  })

  $('#temperature-down').on('click',function(){
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $('#temperature-reset').on('click',function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').on('click',function(){
    thermostat.saveModeOn();
    updateTemperature();
  })

  $('#powersaving-off').on('click',function(){
    thermostat.saveModeOff();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class',thermostat.usage());
  }
})