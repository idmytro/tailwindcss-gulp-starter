const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const footer = require('gulp-footer');

gulp.task('bs', ['css'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['index.html', 'configs/tailwind.js'], ['css', 'html-watch']);
});

gulp.task('html-watch',  done => {
    browserSync.reload();
    done();
});

// Example https://tailwindcss.com/docs/installation#gulp

gulp.task('css', () => {
    return gulp.src('src/styles.css')
        .pipe(postcss([
            require('postcss-import'),
            require('tailwindcss')('./configs/tailwind.js'),
            require('autoprefixer')
        ]))
        .pipe(stripCssComments({preserve: false}))
        .pipe(cleanCSS(require('./configs/clean-css')))
        .pipe(footer('\n'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['bs']);
