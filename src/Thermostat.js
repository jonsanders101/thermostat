'use strict';

const DEFAULT_TEMPERATURE = 20;
const DEFAULT_MIN_TEMP = 10;
const DEFAULT_MAX_TEMP = 32;

function Thermostat() {
  this._temperature = DEFAULT_TEMPERATURE;
  this._powerSavingModeLimit = 25;
}

Thermostat.prototype.powerSavingMode = function(mode) {
   if (mode == 'on') {
     this._powerSavingModeLimit = 25;
   } else if (mode == 'off') {
     this._powerSavingModeLimit = DEFAULT_MAX_TEMP;
   }
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= this._powerSavingModeLimit) throw new Error('Maximum temperature is '+this._powerSavingModeLimit+' degrees');
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
