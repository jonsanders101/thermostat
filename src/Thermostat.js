'use strict';

function Thermostat() {
  const DEFAULT_TEMPERATURE = 20;
  this._temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.powerSavingMode = function(on) {
   this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= 25 && this._powerSavingMode == true) throw new Error('Maximum temperature is 25 degrees');
  this._temperature++;
}

Thermostat.prototype.down = function () {
  if (this._temperature === 10) throw new Error('Minimum temperature is 10');
  this._temperature--;
}
