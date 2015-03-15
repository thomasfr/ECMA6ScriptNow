'use strict';
var System = require('systemjs');
// https://github.com/google/traceur-compiler/blob/master/src/Options.js#L25-L70
System.traceurOptions = {
  properTailCalls: true,
  arrayComprehension: true,
  generatorComprehension: true
};
System.config({
  baseURL: `file:${__dirname}`
});
System.import('./app');
