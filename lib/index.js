'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var pkg = require('../package.json');

var makeUrl = function (version, platform) {
    return [
        'https://github.com/purescript/purescript/releases/download/v',
        version,
        '/',
        platform,
        '.tar.gz'
    ].join('');
};

module.exports = function (version, name) {
    var url = makeUrl.bind(null, version);
    return new BinWrapper()
        .src(url('macos'), 'darwin')
        .src(url('linux64'), 'linux', 'x64')
        .src(url('win64'), 'windows', 'x64')
        .dest(path.join(__dirname, '../vendor'))
        .use(name);
};
