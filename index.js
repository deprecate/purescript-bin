'use strict';

var VERSION = module.exports.VERSION = '0.6.9.3';

[
    'psc',
    'psci',
    'psc-docs',
    'psc-make'
].forEach(function (bin) {
    module.exports[bin] = require('./lib')(VERSION, bin).path();
});
