'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('temperature', function () {

    it ('initializes with the default temperature', function() {
      expect(thermostat.temperature()).toEqual(DEFAULT_TEMPERATURE);
    });
  })

  describe('up', function () {

    it('increases the temperature by 1 degree', function () {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(DEFAULT_TEMPERATURE + 1);
    })
  })

  describe('down', function () {

    it('decreases the temperature by 1 degree', function () {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(DEFAULT_TEMPERATURE - 1);
    })
    it('throws an error when going below default minimum temperature degress', function () {
      for (var i = 0; i < DEFAULT_MIN_TEMP; i++) {
        thermostat.down();
      }
      expect(function () { thermostat.down() }).toThrowError('Minimum temperature is ' + DEFAULT_MIN_TEMP)
    })
  })

  describe('power saving mode', function() {

    it('prevents temperature going above 25 degrees when on', function() {
      thermostat.powerSavingModeOn();
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrowError('Maximum temperature is 25 degrees')
    })
    it('if temperature is above new maximum temperature, temperature will be reduced to max temperature', function(){
      thermostat.powerSavingModeOff();
      for (var i = 0; i < (POWER_SAVING_MODE_MAX - DEFAULT_TEMPERATURE); i++) {
        thermostat.up();
      }
      thermostat.powerSavingModeOn();
      expect(thermostat._temperature).toEqual(25);
    })
    it('prevents temperature going above default maximum temperature degrees when off', function() {
      thermostat.powerSavingModeOff();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrowError('Maximum temperature is '+ DEFAULT_MAX_TEMP + ' degrees')
    })
    it('power saving mode is on by default', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function () { thermostat.up() }).toThrowError('Maximum temperature is 25 degrees');
    })
  })

  describe('reset', function() {

    it('resets the temperature to default temperature', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(DEFAULT_TEMPERATURE);
    })
  })

  describe('energy useage', function() {

    it('outputs low useage if temperature is below 18', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energy_use()).toEqual('Low')
    })
    it('outputs medium useage if temperature is between 18 and 24 degrees', function() {
      expect(thermostat.energy_use()).toEqual('Medium')
    })
    it('outputs high useage if temperature is more than 24 degrees', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.energy_use()).toEqual('High')
    })
  })

});
