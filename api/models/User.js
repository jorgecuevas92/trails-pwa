'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description User model definition
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema () {
    return {
      name: {
        type: 'string'
      },
      email: {
        type: 'string'
      }
    }
  }
}
