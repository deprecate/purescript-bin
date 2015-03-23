'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var pkg = require('../package.json');

var makeUrl = function (platform) {
    return [
        'https://github.com/purescript/purescript/releases/download/v',
        pkg.version.split('+purescript-')[1],
        '/',
        platform,
        '.tar.gz'
    ].join('');
};

module.exports = function (name) {
    return new BinWrapper()
        .src(makeUrl('macos'), 'darwin')
        .src(makeUrl('linux64'), 'linux', 'x64')
        .src(makeUrl('win64'), 'windows', 'x64')
        .dest(path.join(__dirname, '../vendor'))
        .use(name);
};
