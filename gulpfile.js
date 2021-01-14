const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const stripCssComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const cleanCssConfig = require('./configs/clean-css');
const minimist = require('minimist');

// const knownOptions = {
//     string: 'env',
//     default: { env: process.env.NODE_ENV || 'production' }
//   };

// const options = minimist(process.argv.slice(2), knownOptions);
const options = minimist(process.argv.slice(2));

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/pass-arguments-from-cli.md

gulp.task('css', function () {
    console.log('options', options);

    return gulp.src('src/utils.css')
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
