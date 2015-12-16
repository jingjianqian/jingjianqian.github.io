var gulp = require('gulp'),       // 基础库
    livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver'),// 本地服务器
	minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint=require('gulp-jshint'); 
    5690                                          
 
// 注册任务
gulp.task('webserver', function() {
  gulp.src( './' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true// 服务器启动时自动打开网页
  }));
});

// 监听任务
gulp.task('watch',function(){
  gulp.watch( 'app/*.html'); // 监听根目录下所有.html文件
  gulp.watch('./src/css/*.css');
});
gulp.task('test',function(){
  console.log('test');
}); 
// 默认任务
gulp.task('default',['webserver','watch']);