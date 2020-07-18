const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('compile', () => {
    return gulp.src('./theme/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/theme-chalk'))
})

gulp.task('copyfont', () => {
    return gulp.src('./theme/fonts/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/theme-chalk/fonts'));
})

gulp.task('build_clean', gulp.series('copyfont', 'compile'))

gulp.task('build', gulp.parallel('build_clean'))
