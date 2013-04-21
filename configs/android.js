var config = require('../src/config').config;

var regexp = config.files.javascripts.joinTo['javascripts/app.js'].toString().slice(1, -1);
regexp += '(?!\\/platforms\\/ios)(?!\\/platforms\\/blackberry)';

config.files.javascripts.joinTo['javascripts/app.js'] = new RegExp(regexp);

exports.config = config;