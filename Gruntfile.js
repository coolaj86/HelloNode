module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      "watch": {
          "all": {
              "files": [ "./browser/**.less", "./browser/**.jade", "./browser/**.js" ]
            , "tasks": [ "jade:dev", "less:dev", "pakmanager:browser" ]
          }
      }
    , "develop": {
          "server": {
              "file": "bin/server.js"
          }
      }
    , "jade": {
          "dev": {
              "files": {
                  "public/index.html": "./browser/index.jade"
                , "public/gcf.html": "./browser/gcf.jade"
              }
          }
      }
    , "less": {
          "dev": {
              "files": {
                  "public/style.css": "./browser/style.less"
              }
          }
      }
    , copy: {
          main: {
              files: [
                  { src: 'browser/app.js', dest: 'public/'}
                , { src: 'browser/jquery.js', dest: 'public/'}
              ]
          }
      }
  });
  // uglify
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-copy');
  grunt.registerTask('build', ["jade:dev", "less:dev", "pakmanager:browser", "copy:main"]);
  grunt.registerTask('default', ['build', 'watch']);
};
