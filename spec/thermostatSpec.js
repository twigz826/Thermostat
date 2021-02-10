'Use strict';

describe('Thermostat', function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat._temp).toEqual(20);
  });
});