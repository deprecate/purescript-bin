'use strict';

var each = require('async-each-series');
var log = require('logalot');

var bins = [
    'psc',
    'psci',
    'psc-make',
    'psc-docs'
];

each(bins, function (name, next) {
    var bin = require('./')(name);

    bin.run(['--help'], function (err) {
        if (err) {
            log.error(err.message);
            log.error(name + ' pre-build test failed');
            next();
            return;
        }

        log.success(name + ' pre-build test passed successfully');
        next();
    });
}, log.write.bind(log));
