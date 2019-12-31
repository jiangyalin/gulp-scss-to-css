const gulp = require('gulp')
const px2rpx = require('gulp-px2rpx')
const sass = require('gulp-sass')

sass.compiler = require('node-sass');

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rpx({
      screenWidth: 375, // 设计稿屏幕
      wxappScreenWidth: 750, // 微信小程序屏幕
      remPrecision: 6 // 小数精度
    }))
    .pipe(gulp.dest('css'));
})

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', function () {
  gulp.start('sass')
})