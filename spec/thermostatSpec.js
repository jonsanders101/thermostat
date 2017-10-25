'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('temperature', function () {
    
    it ('has default temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

  })

  describe('up', function () {
    
    it('increases the temperature by 1 degree', function () {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    })

  })


});
