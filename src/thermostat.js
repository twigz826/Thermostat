'use strict';

const SAVE_MODE_MAX = 25;
const SAVE_MODE_OFF_MAX = 32;
const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const LOW_USAGE_LIMIT = 18;
const MEDIUM_USAGE_LIMIT = 25;

class Thermostat {

  constructor() {
    this._temp = DEFAULT_TEMP;
    this._MINIMUM_TEMP = MIN_TEMP;
    this._maxTemp = SAVE_MODE_MAX;
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
    this._maxTemp = SAVE_MODE_OFF_MAX;
    this._saveStatus = "off";
  }

  saveModeOn() {
    this._maxTemp = SAVE_MODE_MAX;
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
