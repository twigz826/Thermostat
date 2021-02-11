'Use strict';

describe('Thermostat', function() {
  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat._temp).toEqual(DEFAULT_TEMP);
  });

  it('should be able to increase the temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat._temp).toEqual(DEFAULT_TEMP + 1);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat._temp).toEqual(DEFAULT_TEMP - 1);
  });

  it('should throw an error if temp is decreased below 10', function() {
    let i = 0;
    while(i++ < DEFAULT_TEMP - MIN_TEMP) {
      thermostat.decreaseTemp();
    }
    expect(function() {thermostat.decreaseTemp()} ).toThrowError('Cannot exceed min. temperature!');
  });

  it('should have a maxTemp of 25 in default', function() {
    expect(thermostat._maxTemp).toEqual(SAVE_MODE_MAX);
    expect(thermostat._saveStatus).toBe("on");
  });

  it('should have a maxTemp of 32 when power save mode is off', function() {
    thermostat.saveModeOff();
    expect(thermostat._maxTemp).toEqual(SAVE_MODE_OFF_MAX);
    expect(thermostat._saveStatus).toBe("off");
  });

  it('should be able to turn power save mode on', function() {
    thermostat.saveModeOff();
    thermostat.saveModeOn();
    expect(thermostat._maxTemp).toEqual(SAVE_MODE_MAX);
    expect(thermostat._saveStatus).toBe("on");
  });

  it('should throw error if max temp exceed when power save mode is on', function() {
    let i = 0;
    while(i++ < thermostat._maxTemp - DEFAULT_TEMP) {
      thermostat.increaseTemp();
    }
    expect(function() { thermostat.increaseTemp()} ).toThrowError('Cannot exceed max. temperature!')
  });

  it('should reset power save mode and temperature', function() {
    thermostat.increaseTemp();
    thermostat.saveModeOff();
    thermostat.reset();
    expect(thermostat._temp).toEqual(DEFAULT_TEMP);
    expect(thermostat._saveStatus).toBe("on");
    expect(thermostat._maxTemp).toEqual(SAVE_MODE_MAX);
  });

  it('should return LOW usage if temp is below 18', function() {
    thermostat._temp = LOW_USAGE_LIMIT -1 ;
    expect(thermostat.usage()).toEqual("LOW");
  });

  it('should return MEDIUM usage if temp is 18-25 inclusive', function() {
    thermostat._temp = MEDIUM_USAGE_LIMIT -1 ;
    expect(thermostat.usage()).toEqual("MEDIUM");
  });

  it('should return HIGH usage if temp is greater than 25', function() {
    thermostat._temp = MEDIUM_USAGE_LIMIT +1 ;
    expect(thermostat.usage()).toEqual("HIGH");
  });

});
