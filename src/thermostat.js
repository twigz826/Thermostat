'use strict';

const POWERSAVE_MODE_MAXTEMP = 25;
const POWERSAVE_MODE_OFF_MAXTEMP = 32;
const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const LOW_USAGE_LIMIT = 18;
const MEDIUM_USAGE_LIMIT = 25;

class Thermostat {

  constructor() {
    this._temp = DEFAULT_TEMP;
    this._MINIMUM_TEMP = MIN_TEMP;
    this._maxTemp = POWERSAVE_MODE_MAXTEMP;
    this._saveStatus = "on"
  }

  increaseTemp() {
    if(this._temp === this._maxTemp) {
      throw new Error('Cannot exceed max. temperature!');
    }
    this._temp++;
  }

  decreaseTemp() {
    if(this._temp === this._MINIMUM_TEMP) {
      throw new Error('Cannot exceed min. temperature!');
    }
    this._temp--;
  }

  saveModeOff() {
    this._maxTemp = POWERSAVE_MODE_OFF_MAXTEMP;
    this._saveStatus = "off";
  }

  saveModeOn() {
    this._maxTemp = POWERSAVE_MODE_MAXTEMP;
    this._saveStatus = "on";
  }

  reset() {
    this.saveModeOn();
    this._temp = DEFAULT_TEMP;
  }

  usage() {
    if(this._temp < LOW_USAGE_LIMIT) {
      return "LOW"
    }
    else if(this._temp <= MEDIUM_USAGE_LIMIT) {
      return "MEDIUM"
    }
    return "HIGH"
  }
}

// TT
