module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      jade: {
          "dev": {
              "files": {
                  "public/index.html": "./browser/index.jade"
              }
          }
      }
    , less: {
          "dev": {
              "files": {
                  "public/style.css": "./browser/style.less"
              }
          }
      }
    , copy: {
          main: {
              files: [
                  { expand:true, cwd: 'browser', src: ['app.js'], dest: 'public/'}
                , { expand:true, cwd: 'browser', src: ['jquery.js'], dest: 'public/'}
              ]
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('build', ["jade:dev", "less:dev", "copy:main"]);
  grunt.registerTask('default', ['build']);
};
