'use strict';

function Thermostat() {
  const DEFAULT_TEMPERATURE = 20;
  this._temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function () {
  this._temperature++
}
