module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      release: {
        src: [ 'src/js/*.js'],
        dest: 'release/index.js'
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
      afterconcat: ['release/index.js']
    },
    standard: {
      options: {
        fix: true
      },
      app: {
        src: ['{src/,release/}*.js', '~/*.js', '~/*.json']
      }},
    jasmine: {
      test: {
        src: ['src/js/*.js', 'gruntfile.js'],
        options: {
          specs: 'test/*.js'
        }
      }
    },
    watch: {
      jsScripts: {
        files: ['src/js/*.js', 'src/*.js', '*.js'],
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
        src: ['release/index.js'],
        dest: 'doc'
      }
    }
  })
 
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jasmine')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-jsdoc')
  grunt.loadNpmTasks('grunt-standard')

    // Register tasks
  grunt.registerTask('default', ['concat', 'jshint', 'copy', 'standard'])
}
