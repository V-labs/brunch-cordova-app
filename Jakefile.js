var _ = require('./src/vendor/scripts/underscore-1.4.4');

var spawn = require('child_process').spawn;
var supportedPlatform = ['ios', 'android', 'blackberry'];

desc('Initialize the application after cordova create');
task('init', function() {
    process.chdir('src');
    console.log('Installing dependencies');
    var npm = spawn('npm', ['install']);
    npm.on('close', function (code) {
        handleResources();
    });
});

namespace('brunch', function() {
    desc('Launch platform aware brunch watch');
    task('watch', {async: true}, function() {
        if(!_.contains(supportedPlatform, process.env.platform)) {
            fail('Missing parameter platform=' + supportedPlatform.join('|'));
        }

        process.chdir('src');
        var brunchArgs = ['w'];
        brunchArgs.push('-c', '../configs/' + process.env.platform + '.js');

        if('prod' == process.env.e) {
            brunchArgs.push('-o');
        }

        var brunch = spawn('brunch', brunchArgs);
        handleProcessEvents(brunch);
    });

    desc('Launch platform aware brunch build');
    task('build', {async: true}, function() {
        if(!_.contains(supportedPlatform, process.env.platform)) {
            fail('Platform must be one of ' + supportedPlatform.join('|'));
        }

        process.chdir('src');
        var brunchArgs = ['build'];
        brunchArgs.push('-c', '../configs/' + process.env.platform + '.js');

        if('prod' == process.env.e) {
            brunchArgs.push('-o');
        }

        var brunch = spawn('brunch', brunchArgs);
        handleProcessEvents(brunch);
    });
});

desc('Run list of commands');
task('default', function() {
    var child = spawn('jake', ['-T']);
    handleProcessEvents(child);
});

handleResources = function() {
    console.log('Updating resources');
    process.chdir('../');

    var fs = require('fs');
    var wrench = require('./configs/wrench');

    fs.mkdir('plugins');

    var stream = fs.createReadStream('./www/config.xml');
    stream.pipe(fs.createWriteStream('./src/app/assets/config.xml'));

    wrench.copyDirRecursive('./www/res', './src/app/assets/res', function() {
        wrench.rmdirRecursive('./www/', function() {
            console.log('Generating www');
            process.chdir('src');
            var brunch = spawn('brunch', ['build']);
            handleProcessEvents(brunch);
        });
    });

}

handleProcessEvents = function(child) {
    child.stdout.on('data', function(stdout) {
        process.stdout.write(stdout);
    });

    child.on('exit', function(code) {
        if (code !== 0) {
            fail(code);
        } else {
            complete();
        }
    });
};