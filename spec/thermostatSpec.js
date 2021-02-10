'Use strict';

describe('Thermostat', function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat._temp).toEqual(20);
  });

  it('should be able to increase the temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat._temp).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat._temp).toEqual(19);
  });

  it('should throw an error if temp is decreased below 10', function() {
    let i = 0;
    while(i++ < 10) {
      thermostat.decreaseTemp();
    }
    expect(function() {thermostat.decreaseTemp()}).toThrowError('Cannot exceed min. temperature');
  });

});