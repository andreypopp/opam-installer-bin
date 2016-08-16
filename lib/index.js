/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '0.0.0';
var URL = 'https://github.com/facebook/flow/releases/download/v';
var BASE = URL + VERSION + '/';

module.exports = new BinWrapper()
	.src(BASE + 'opam-installer-osx-v' + VERSION + '.zip', 'darwin')
	.src(BASE + 'opam-installer-linux64-v' + VERSION + '.zip', 'linux', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use('opam-installer');
