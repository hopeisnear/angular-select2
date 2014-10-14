var gulp = require('gulp');
var karma = require('karma').server;



gulp.task('karma', function() {
    karma.start({configFile : __dirname +'/karma.conf.js', singleRun: true});
});