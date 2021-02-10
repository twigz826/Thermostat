'use strict';

const SAVE_MODE_MAX = 25;
const SAVE_MODE_OFF_MAX = 32;
const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

class Thermostat {
  
  constructor() {
    this._temp = DEFAULT_TEMP;
    this._MINIMUM_TEMP = MIN_TEMP;
    this._maxTemp = SAVE_MODE_MAX;
    this._saveStatus = true 
  }
  
  increaseTemp() {
    this._temp++;
  }

  decreaseTemp() {
    if(this._temp === this._MINIMUM_TEMP) {
      throw new Error('Cannot exceed min. temperature');
    }
    this._temp--;
  }

  saveModeOff() {
    this._maxTemp = SAVE_MODE_OFF_MAX;
    this._saveStatus = false;
  }

  saveModeOn() {
    this._maxTemp = SAVE_MODE_MAX;
    this._saveStatus = true;
  }
 
}