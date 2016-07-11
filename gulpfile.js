"use strict"

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    mocha = require('gulp-mocha'),
    concat = require('gulp-concat'),
    lint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    annotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');

let config = {
    paths: {
        mainJS: 'app/app.js',
        mainHTML: 'index.html',
        js: 'app/components/**/*.js',
        dist: 'dist',
        sass: 'assets/scss/*.scss'
    }
};

gulp.task("js", ()=> {
    return gulp.src([config.paths.mainJS, config.paths.js])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
});

gulp.task('sass', ()=> {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(details.name + ": " + details.stats.originalSize);
            console.log(details.name + ": " + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(paths.dist + '/css'))
});

gulp.task('html', function() {
    return gulp.src(config.paths.mainHTML)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', () => {
    return gulp.src([config.paths.mainJS, config.paths.js])
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('watch', () => {});

gulp.task('build', ['html', 'js']);

gulp.task("default", ['build', 'watch']);