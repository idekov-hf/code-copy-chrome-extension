module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
          release: {
            src: [ 'src/js/codeblock.js', 'src/js/main.js'],
            dest: 'release/main.js'
          }
        },
        copy: {
          release: {
            files: [
              {
                src: 'src/manifest.json',
                dest: 'release/manifest.json'
              },
              {
                src: 'src/css/styles.css',
                dest: 'release/styles.css'
              }
            ]
          }
        },
        jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          manifest: ['src/manifest.json'],
          beforeconcat: ['src/js/*.js', '!src/js/main.js'],
          afterconcat: ['release/main.js']
        },
        jasmine: {
          test: {
            src: ['js/values.js', 'js/prompt.js', 'js/getImages.js',
                  'js/replaceImages.js', 'js/main.js'],
            options: {
              specs: 'test/*.js'
            }
          }
        },
        watch: {
          jsScripts: {
            files: ['src/js/*.js'],
            tasks: ['jshint:beforeconcat', 'concat', 'jshint:afterconcat']
          },
          manifest: {
            files: ['src/manifest.json'],
            tasks: ['jshint:manifest']
          },
          copy: {
            files: ['src/manifest.json', 'src/css/*.css'],
            tasks: ['copy']
          }
        },
        jsdoc: {
          dist: {
            src: ['js/*.js'],
            dest: 'doc'
          }
        }
    });

  // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');

    // Register tasks
    grunt.registerTask('default', ['concat', 'jshint', 'copy']);
};