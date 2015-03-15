'use strict';
var System = require('systemjs');
System.traceurOptions = {
  properTailCalls: true,
  symbols: true,
  arrayComprehension: true,
  asyncFunctions: true,
  forOn: true,
  generatorComprehension: true
};
System.config({
  baseURL: `file:${__dirname}`
});
System.import('./app');
