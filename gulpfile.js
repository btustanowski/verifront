var gulp = require("gulp");
var fs = require("fs");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var cssmin = require("gulp-cssmin");
var imagemin = require("gulp-imagemin");
var spritesmith = require("gulp.spritesmith");
var util = require("gulp-util");
var del = require("del");
var eslint = require("gulp-eslint");
var nodemon = require('gulp-nodemon');
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", ["sprites"], function () {
    del(["./styles/tmp/scss.css"]);
    return gulp
        .src([
            "./styles/global.scss",
        ])
        .pipe(sass({style: "compressed"}))
        .pipe(concat("scss.css"))
        .pipe(autoprefixer({
            browsers: ["> 1%"],
            cascade: false
        }))
        .pipe(gulp.dest("./styles/tmp"));
});

gulp.task("sprites", function () {
    var spriteData;
    del(["./styles/tmp/sprites.css"]); // clear output file
    spriteData = gulp.src("./sprites/*.png").pipe(spritesmith({
            imgName: "sprite.png",
            cssName: "sprites.css",
            padding: 5,
            imgPath: "../images/sprite.png",
        }));
    spriteData.img.pipe(imagemin()).pipe(gulp.dest("./build/images/"));
    return spriteData.css.pipe(gulp.dest("./styles/tmp"));
});

gulp.task("css", ["sass"], function () {
    return gulp.src(
        [
            "./bower_components/normalize.css/normalize.css",
            "./bower_components/metro/build/css/metro.css",
            "./bower_components/metro/build/css/metro-icons.css",
            "./bower_components/metro/build/css/metro-responsive.css",
            "./styles/tmp/*.css",
        ]
    )
        .pipe(concat("min.css"))
        // .pipe(cssmin())
        .pipe(gulp.dest("./build/css"));
});

gulp.task("lint", function () {
    return gulp
        .src([
            // app
            "./scripts/**/*.js",
            "./scripts/*.js",
            "./*.js",
        ])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task("js", function () {
    return gulp
        .src([
            // LIBRARIES AND FRAMEWORKS
            "./bower_components/jquery/dist/jquery.js",
            "./bower_components/moment/moment.js",
            "./bower_components/angular/angular.js",

            // ANGULAR COMPONENTS
            "./bower_components/angular-resource/angular-resource.js",
            "./bower_components/angular-translate/angular-translate.js",
            "./bower_components/angular-sanitize/angular-sanitize.js",
            "./bower_components/angular-ui-router/release/angular-ui-router.js",
            "./bower_components/angular-moment/angular-moment.min.js",

            // VENDOR SCRIPTS
            "./bower_components/metro/build/js/metro.js",

            // BOOT
            "./scripts/boot.js",

            // ANGULAR LOGIC
            "./scripts/app.js",
            "./scripts/factories/*.js",
            "./scripts/services/*.js",
            "./scripts/filters/*.js",
            "./scripts/controllers/*.js",
            "./scripts/directives/*.js",
            "./scripts/routes.js",
            "./scripts/i18n/*.js",
            "./scripts/*.js",
        ])
        .pipe(concat('full.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(rename('min.js'))
        // .pipe(ngmin()) // VERY heavy angular-safe compression. If ran, it should be possible to enable mangling in uglify(). REQUIRES EXTENSIVE TESTING AFTERWARDS.
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('go', function() {
    return nodemon({
        script : './server.js',
        ext    : 'js',
        env: { 'NODE_ENV': 'dev' }
    });
});

gulp.task("templates", function () {
    gulp.src('./templates/*').pipe(gulp.dest('./build'));
});

gulp.task("default", ["css", "js", "templates"], function () {
    util.log("Build complete!");
});

gulp.task("watch", ["default"], function () {
    gulp.watch("./styles/**/*", ["css"]);
    gulp.watch("./scripts/**/*", ["js"]);
    gulp.watch("./templates/*", ["templates"]);
});
