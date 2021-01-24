const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const rename = require("gulp-rename");

const cleanCssConfig = require('./configs/clean-css');
const minimist = require('minimist');
// const clean = require('postcss-clean')

// const knownOptions = {
//     string: 'env',
//     default: { env: process.env.NODE_ENV || 'production' }
//   };

// const options = minimist(process.argv.slice(2), knownOptions);
const args = minimist(process.argv.slice(2));

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/pass-arguments-from-cli.md

const configs = {
    default: './configs/tailwind.js',
    blank: './configs/blank/index.js',
    v: './configs/v/index.js'
}

const config = configs[args.config] || configs.default;
const suffix = args.config ? `-${args.config}` : '';

gulp.task('css', function () {
    console.log('args', args);
    console.log('config', config);


    return gulp.src('src/utils.css')
        .pipe(postcss([
            // require('tailwindcss')('./configs/tailwind.js'),
            require('tailwindcss')(config),
            // require('autoprefixer'),
            require('postcss-clean')(cleanCssConfig),
            require('postcss-final-newline')
        ]))
        .pipe(replace('\n\n', '\n'))
        .pipe(replace('/*!', '/*'))
        .pipe(rename({suffix}))
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
