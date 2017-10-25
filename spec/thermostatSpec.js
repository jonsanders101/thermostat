'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it ('has default temperature of 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

});
