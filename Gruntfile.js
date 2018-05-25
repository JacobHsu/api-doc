'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
      apidoc: {
        myapp: {
          src: "src/",
          dest: "dest/"
        }
      }
    });

    grunt.loadNpmTasks('grunt-apidoc');
    grunt.registerTask('default', ["apidoc"]);
};

