'use strict';

class Thermostat {
  constructor() {
    this._temp = 20;
    this._MINIMUM_TEMP = 10;
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
}