'use strict'

const Controller = require('trails-controller')

/**
 * @module HomeController
 * @description Generated Trails.js Controller.
 */
module.exports = class HomeController extends Controller{
  index(req,res) {
    res.render('layout.ejs', {
      title: 'Home Page',
      body: 'home/index'
    });
  }
  user(req,res) {
    res.render('layout.ejs', {
      title: 'User',
      body: 'home/user'
    });
  }
}
