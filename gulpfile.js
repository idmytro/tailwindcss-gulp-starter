const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const cleanCssConfig = require('./configs/clean-css');

gulp.task('css', function () {
    return gulp.src('src/styles.css')
        .pipe(postcss([
            require('tailwindcss')('./configs/tailwind.js'),
            require('autoprefixer'),
        ]))
        .pipe(stripCssComments({preserve: false}))
        .pipe(cleanCSS(cleanCssConfig))
        .pipe(postcss([
            require('postcss-final-newline')
        ]))
        .pipe(replace('\n\n', '\n'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('bs', gulp.series('css', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['index.html', 'configs/tailwind.js'], gulp.parallel('css', 'html-watch'));
}));

gulp.task('html-watch',  done => {
    browserSync.reload();
    done();
});

gulp.task('default', gulp.series('bs'));
