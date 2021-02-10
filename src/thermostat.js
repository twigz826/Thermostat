'use strict';

class Thermostat {
  constructor() {
    this._temp = 20;
  }

  increaseTemp() {
    this._temp++;
  }

  decreaseTemp() {
    this._temp--;
  }
}