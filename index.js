'use strict';

[
    'psc',
    'psci',
    'psc-docs',
    'psc-make'
].forEach(function (bin) {
    module.exports[bin] = require('./lib')(bin).path();
});
