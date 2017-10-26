'use strict';

const DEFAULT_TEMPERATURE = 20;
const DEFAULT_MIN_TEMP = 10;
const DEFAULT_MAX_TEMP = 32;
const POWER_SAVING_MODE_MAX = 25;

function Thermostat() {
  this._temperature = DEFAULT_TEMPERATURE;
  this._powerSavingModeLimit = 25;
  this._maxTemp = 25;
  this._isOnPowerSavingMode = true;
}

Thermostat.prototype.powerSavingModeOn = function() {
     this._maxTemp = POWER_SAVING_MODE_MAX;
     if (this._isAboveMax()) this._temperature = this._maxTemp;
     this._isOnPowerSavingMode = true;
}

Thermostat.prototype._isAboveMax = function() {
  return (this._temperature >= this._maxTemp);
}

Thermostat.prototype.powerSavingModeOff = function() {
  this._maxTemp = DEFAULT_MAX_TEMP;
  this._isOnPowerSavingMode = false;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= this._maxTemp) throw new Error('Maximum temperature is '+this._maxTemp+' degrees');
  this._temperature++;
}

Thermostat.prototype.down = function () {
  if (this._temperature === DEFAULT_MIN_TEMP) throw new Error("Minimum temperature is " + DEFAULT_MIN_TEMP);
  this._temperature--;
}

Thermostat.prototype.reset = function() {
  this._temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energy_use = function() {
  if (this._temperature <= 17) return 'Low';
  if (this._temperature <= 24) return 'Medium';
  if (this._temperature >= 24) return 'High';
}

var thermo = new Thermostat();
