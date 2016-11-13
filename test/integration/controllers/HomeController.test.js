'use strict'
/* global describe, it */

const assert = require('assert')

describe('HomeController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['HomeController'])
  })
})
