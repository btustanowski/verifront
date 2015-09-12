var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var del = require('del');

gulp.task('clean', function () {
    return del([
        './app/styles/tmp/**',
        './public/css/*.css'
    ]);
});

gulp.task('sass', ['sprites'], function () {
    return gulp.src([
        './app/components/materialize/sass/materialize.scss',
        './app/styles/global.scss'
    ])
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(concat('scss.css'))
        .pipe(gulp.dest('./app/styles/tmp'));
});

gulp.task('js', function() {
    return gulp.src(
        [
            // LIBRARIES AND FRAMEWORKS
            './app/components/moment/moment.js',
            './app/components/angular/angular.js',
            './app/components/jquery/dist/jquery.js',
            './app/components/materialize/dist/js/materialize.js',
            './app/components/masonry/dist/masonry.pkgd.js',
            './app/components/socket.io-client/socket.io.js',

            // BOOT
            './app/scripts/boot.js',

            // ANGULAR COMPONENTS
            './app/components/angular-resource/angular-resource.js',
            './app/components/angular-translate/angular-translate.js',
            // './app/components/angular-animate/angular-animate.js',
            './app/components/angular-sanitize/angular-sanitize.js',
            './app/components/angular-ui-router/release/angular-ui-router.js',
            './app/components/ng-file-upload/ng-file-upload-shim.js',
            './app/components/ng-file-upload/ng-file-upload.js',
            './app/components/angular-moment/angular-moment.min.js',
            './app/components/angular-toastr/dist/angular-toastr.tpls.js',

            // ANGULAR LOGIC
            './app/scripts/app.js',
            './app/scripts/routes.js',
            './app/scripts/**/*.js',
            './app/scripts/*.js',

            // VENDOR SCRIPTS
            './app/components/cookieconsent2/cookieconsent.js'
        ]
    )
        .pipe(concat('oztest.js'))
        //.pipe(gulp.dest('./public/js')) // Uncomment to add non-ugly output.
        .pipe(rename('oztest.min.js'))
        // .pipe(ngmin()) // VERY heavy angular-safe compression. If ran, it should be possible to enable mangling in uglify(). REQUIRES EXTENSIVE TESTING AFTERWARDS.
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('sprites', ['clean'], function() {

    var spriteData = gulp.src('./app/sprites/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprites.css',
        padding: 5,
        imgPath: '../img/sprite.png'
    }));
    spriteData.img.pipe(imagemin()).pipe(gulp.dest('./public/img/'));
    return spriteData.css.pipe(gulp.dest('./app/styles/tmp'));
});

gulp.task('css', ['sass'],  function() {
    return gulp.src(
        [
            './app/components/angular-toastr/dist/angular-toastr.css',
            './app/components/normalize.css/normalize.css',
            './app/styles/tmp/*.css'
        ]
    )
        .pipe(concat('oztest.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css'));
});

// Run tasks
gulp.task('default', ['js', 'css'], function() {
    console.log('Build complete!');
});

gulp.task('watch-css', function () {
    gulp.watch('./app/styles/*.scss', ['css']);
});