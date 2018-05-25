'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
      apidoc: {
        myapp: {
          src: "src/",
          dest: "dist/"
        }
      }
    });

    grunt.loadNpmTasks('grunt-apidoc');
    grunt.registerTask('default', ["apidoc"]);
};

