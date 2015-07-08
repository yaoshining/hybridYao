/**
 * Created by tongda on 15/7/2.
 */
'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var constants = require('../common/constants')();
var sh = require('shelljs');
var args = require('yargs').argv;
var _ = require('lodash');

// Static server
gulp.task('browsersyncstart', 'Launches a browserSync server.', function() {
    var open = constants.serve.open;
    if(!_.isUndefined(args.browser)) {
        open = args.browser;
    }
    var config = {
        //files: [dest + '/index.html', dest + '/scripts/bundle.js', dest + '/styles/main.css'],
        tunnel: constants.serve.localtunnel,
        server: {
            baseDir: constants.clientFolder,
            middleware: [
                function(req, res, next) {
                    //console.log("Hi from middleware");
                    next();
                }
            ]
        },
        host: constants.serve.host,
        port: constants.serve.port,
        logLevel: 'info', // info, debug , silent
        open: open,
        browser: constants.serve.browser, // ['google chrome', 'firefox', 'safari'],
        notify: true,
        logConnections: false,
        ghostMode: constants.serve.ghostMode
    };
    browserSync.init(config);
});

gulp.task('browsersync',['browsersyncstart'],function(){
    gulp.watch([constants.clientFolder+'/templates/*.html']).on('change',browserSync.reload);
});

gulp.task('serve', function(constants){
    runSequence(['sass','style:watch'],'browsersync');
});

gulp.task('ion-serve', function(){
    sh.exec('ionic serve');
});

gulp.task('ion-run:ios',function(){
    sh.exec('ionic run ios --live-reload');
});

gulp.task('ion-run:android',function(){
    sh.exec('ionic run android --live-reload');
});