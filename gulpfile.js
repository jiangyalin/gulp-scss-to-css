// 获取 gulp
const gulp = require('gulp')
// 获取 gulp-ruby-sass 模块
const sass = require('gulp-sass')

sass.compiler = require('node-sass');

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
  // return sass('scss/index.scss').on('error', err => {
  //   console.error('Error', err.message)
  // }).pipe(gulp.dest('css'))
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
})

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', function () {
  gulp.start('sass')
})