var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
concatCss = require('gulp-concat-css'),
htmlmin = require('gulp-htmlmin'),
replace = require('gulp-replace-task'),
runSequence = require('run-sequence'),
clean = require('gulp-clean'),
tinypng = require('gulp-tinypng'),
urlAdjuster = require('gulp-css-url-adjuster'),
del = require('del');

// Express server
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname + "/source"));
  app.listen(3000, '0.0.0.0');
});

// LiveReload
var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('del', function() {

del(['source/css/bundle.min.css']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});


});

// DISTRIBUTION

// Minify HTML
gulp.task('min-html', function() {
  return gulp.src('source/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'))

});

// Combine CSS and minify css
gulp.task('concat-css', function () {
  return gulp.src('source/css/**/*.min.css')
  .pipe(concatCss("source/css/bundle.min.css"))
  .pipe(minifycss())
  .pipe(gulp.dest(''));

  callback();
});

// Minify CSS
gulp.task('styles', function() {
  return sass('source/sass', { style: 'expanded' })
  .pipe(gulp.dest('source/css/helper'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('source/css'));
});

// Copy to /dist/ directory
gulp.task('copy', function(){

  // Specific files
  gulp.src('.htaccess')
  .pipe(gulp.dest('dist'));

  gulp.src('.gitignore')
  .pipe(gulp.dest('dist'));

  gulp.src('Gulpfile.js')
  .pipe(gulp.dest('dist'));

  gulp.src('Readme')
  .pipe(gulp.dest('dist'));

  gulp.src('package.json')
  .pipe(gulp.dest('dist'));

// CSS, JS directories
gulp.src('source/css/**')
.pipe(gulp.dest('dist/css'));

// CSS, JS directories
gulp.src('source/*.html')
.pipe(gulp.dest('dist/'));

gulp.src('source/js/**')
.pipe(gulp.dest('dist/js'));

});

// Replace /source/ in html
gulp.task('replace', function() {
  gulp.src('./dist/*.html')
  .pipe(replace({
    patterns: [
    {
      match: /source/g,
      replacement: '.'
    }
    ]
  }))
  .pipe(gulp.dest('dist/'))


});



// Replace /source/ in CSS
gulp.task('replace-css', function() {
 gulp.src('./dist/css/bundle.min.css').
 pipe(urlAdjuster({
  replace:  ['../../../img','../img'],
}))
 .pipe(minifycss())
 .pipe(gulp.dest('./dist/css/'));
});


// Clean directory
gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
  .pipe(clean());
});


// "dist" task. Start sequence
gulp.task('dist', function(callback) {
    // runSequence('clean', ['concat-css', 'min-html', 'replace', 'copy'], callback);
runSequence('del', 'clean', function() {

runSequence('concat-css', 'min-html', 'copy', 'replace', function() {  });
      
    });


    
    
  });

// END DISTRIBUTION


// PRODUCTION

// Combine CSS and minify css
gulp.task('prod-concat-css', function () {
  return gulp.src('source/css/**/*.min.css')
  .pipe(concatCss("source/css/bundle.min.css"))
  // .pipe(minifycss())
  .pipe(gulp.dest(''));

  callback();
});

// Copy to /dist/ directory
gulp.task('prod-copy', function(){

  // Specific files
  gulp.src('.htaccess')
  .pipe(gulp.dest('prod'));

  gulp.src('.gitignore')
  .pipe(gulp.dest('prod'));

  gulp.src('Gulpfile.js')
  .pipe(gulp.dest('prod'));

  gulp.src('Readme')
  .pipe(gulp.dest('prod'));

  gulp.src('package.json')
  .pipe(gulp.dest('prod'));

// CSS, JS directories
gulp.src('source/css/**')
.pipe(gulp.dest('prod/css'));

// CSS, JS directories
gulp.src('source/*.html')
.pipe(gulp.dest('prod/'));

gulp.src('source/js/**')
.pipe(gulp.dest('prod/js'));

});

// Replace /source/ in html
gulp.task('prod-replace', function() {
  gulp.src('./prod/*.html')
  .pipe(replace({
    patterns: [
    {
      match: /source/g,
      replacement: '.'
    }
    ]
  }))
  .pipe(gulp.dest('prod/'))


});


// Clean directory
gulp.task('prod-clean', function () {
  return gulp.src('prod', {read: false})
  .pipe(clean());
});




// "prod" task. Start sequence
gulp.task('prod', function(callback) {
    // runSequence('clean', ['concat-css', 'min-html', 'replace', 'copy'], callback);
    runSequence('del', 'prod-clean', 'prod-concat-css', 'prod-copy', 'prod-replace', function() {

      
    });
    
  });

// END PRODUCTION



// Watch for changes and reload page
gulp.task('watch', function() {
  gulp.watch('source/sass/*.scss', ['styles']);
  gulp.watch('source/sass/helper/*.scss', ['styles']);
  gulp.watch('source/*.html', notifyLiveReload);
  gulp.watch('source/css/*.css', notifyLiveReload);
  gulp.watch('source/js/*.js', notifyLiveReload);
});



// Compress images using tinypng API
gulp.task('tinypng', function () {
  gulp.src('source/**/*.png')
  .pipe(tinypng('UHTk65aGnnMbspZF8K7-Kvnq_DrON7ya'))
  .pipe(gulp.dest('./dist'));
});

// Default config
gulp.task('default', ['styles', 'express', 'livereload', 'watch'], function() {

});