'use strict';

const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this._temperature = DEFAULT_TEMPERATURE;
  this._powerSavingModeLimit = 25;
}

Thermostat.prototype.powerSavingMode = function(mode) {
   if (mode == 'on') {
     this._powerSavingModeLimit = 25;
   } else if (mode == 'off') {
     this._powerSavingModeLimit = 32;
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
  if (this._temperature === 10) throw new Error('Minimum temperature is 10');
  this._temperature--;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20
}

Thermostat.prototype.energy_use = function() {
  if (this._temperature <= 17) return 'Low';
  if (this._temperature <= 24) return 'Medium';
  if (this._temperature >= 24) return 'High';
}
