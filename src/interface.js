$(document).ready(function() {
  let thermostat = new Thermostat();
  updateTemperature();
  updateSaveStatus();

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
    updateSaveStatus();
  })

  $('#powersaving-off').on('click',function(){
    thermostat.saveModeOff();
    updateTemperature();
    updateSaveStatus();
  })

  $('#select-city').submit(function(event){
    event.preventDefault();
    let city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    let token = '&appid=39f4e0936bb0edbcca55a829a6e33bc3';
    let units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class',thermostat.usage());
  }

  function updateSaveStatus() {
    $('#power-saving-status').text(thermostat._saveStatus);
  }

})
