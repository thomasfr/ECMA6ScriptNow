'use strict';

var System = require('systemjs');
System.transpiler = 'babel';
System.config({
  baseURL: `file:${__dirname}`
});
System.import('./app');
