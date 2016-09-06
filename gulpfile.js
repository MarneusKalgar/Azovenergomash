"use strict";

var gulp = require('gulp'),
		pug = require('gulp-pug'),
		stylus = require('gulp-stylus'),
		rupture = require('rupture'),
		concat = require('gulp-concat'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename'),
		prefix = require('gulp-autoprefixer'),
		imagemin = require('gulp-imagemin'),
		browserSync = require('browser-sync').create();

var blocks = 'blocks/',
		devDir = 'app/',
		buildDir = 'build/';

/*
		Developer tasks
*/

//pug compile
gulp.task('pug', function() {
	return gulp.src(blocks + 'template.pug')
		.pipe(plumber())
		.pipe(pug({pretty: true}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(devDir))
		.pipe(browserSync.stream())
})

//stylus compile
gulp.task('stylus', function() {
	return gulp.src(blocks + 'template.styl')
		.pipe(plumber())
		.pipe(stylus({
			use: rupture()
		}))
		.pipe(prefix({
			browsers: ['last 10 versions'],
			cascade: true
		}))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(devDir + 'css/'))
		.pipe(browserSync.stream());
});

//js compile
gulp.task('scripts', function() {
	return gulp.src([blocks + 'template.js', blocks + '**/*.js', '!' + blocks + '_assets/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(devDir + 'js/'))
		.pipe(browserSync.stream());
});

//watch
gulp.task('watch', function() {
	gulp.watch(blocks + '**/*.pug', ['pug']);
	gulp.watch(blocks + '**/*.styl', ['stylus']);
	gulp.watch(blocks + '**/*.js', ['scripts']);
})

//build image
gulp.task('imgMin', function() {
	return gulp.src([blocks + '**/*.jpg', blocks + '**/*.png'])
		.pipe(imagemin({progressive: true}))
		.pipe(gulp.dest(devDir + 'img/'));
})

//fonts
gulp.task('fonts', function() {
	return gulp.src(blocks + '_assets/fonts/*')
		.pipe(gulp.dest(devDir + 'fonts/'));
})

//vendors
gulp.task('vendors', function() {
	return gulp.src([ 
			blocks + '_assets/libs/jquery/dist/jquery.min.js'
		])
		.pipe(gulp.dest(devDir + 'js/libs/'));
})

//server
gulp.task('browser-sync', function() {
    browserSync.init({
    		port: 3000,
        server: {
            baseDir: devDir
        }
    });
});


/*
		Build tasks
*/







//develop
gulp.task('develop', ['browser-sync', 'watch', 'pug', 'stylus', 'scripts']);

//build
//gulp.task('build', ['imgBuild']);


gulp.task('default', ['develop']);