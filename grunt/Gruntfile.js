module.exports = function (grunt) {
  var opt1 = {
    dist : {
      files : [
        {src:'../temp/home.html', dest:'../html/home.html'},
        {src:'../temp/coupon.html', dest:'../html/coupon.html'},
        {src:'../temp/klass.html', dest:'../html/klass.html'},
        {src:'../temp/balance.html', dest:'../html/balance.html'},
        {src:'../temp/quiz.html', dest:'../html/quiz.html'},
        {src:'../temp/edit.html', dest:'../html/edit.html'},
        {src:'../temp/list.html', dest:'../html/list.html'},
        {src:'../temp/detail.html', dest:'../html/detail.html'},
        {src:'../temp/admin-s.html', dest:'../html/admin-s.html'},
        {src:'../temp/admin-a.html', dest:'../html/admin-a.html'},
        {src:'../temp/modify-a.html', dest:'../html/modify-a.html'},
        {src:'../temp/pwd-a.html', dest:'../html/pwd-a.html'},
        {src:'../temp/modify-s.html', dest:'../html/modify-s.html'},
        {src:'../temp/klass-upload.html', dest:'../html/klass-upload.html'},
        {src:'../temp/search.html', dest:'../html/search.html'},
        {src:'../temp/video.html', dest:'../html/video.html'},
        {src:'../temp/artist.html', dest:'../html/artist.html'},
        {src:'../temp/todo.html', dest:'../html/todo.html'},
        {src:'../temp/article.html', dest:'../html/article.html'},
        {src:'../temp/questionaire.html', dest:'../html/questionaire.html'},
        {src:'../temp/banner-uploader.html', dest:'../html/banner-uploader.html'},
        {src:'../temp/skype.html', dest:'../html/skype.html'},
        {src:'../temp/login.html', dest:'../html/login.html'}
      ]
    }
  };
  var opt2 = {
    dist: {
      files: [{
        src: '../temp/*.html',
        dest: '../dest/'
      }],
      options: {
        replacements: [{
          pattern: '../devimg/',
          replacement: '/static/devimg/'
        }]
      }
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    includereplace: opt1,
    'string-replace': opt2
  });
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.registerTask('includereplace-task', ['includereplace']);
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.registerTask('stringreplace-task', ['string-replace']);
}