'use strict';

var binCheck = require('bin-check');
var each = require('async-each-series');
var psc = require('./');
var test = require('ava');

test('return path to binaries and verify that they are working', function (t) {
    t.plan(10);

    var bins = [
        'psc',
        'psci',
        'psc-make',
        'psc-docs',
    ];

    each(bins, function (bin, next) {
        binCheck(psc[bin], ['--help'], function (err, stdout) {
            t.assert(!err, err);
            t.assert(stdout);
            next();
        });
    });
});
