/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  var btoa = require('btoa')
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * Packaged using grunt by gilbox.me\n' +
              ' */\n',
    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }\n\n',

    // Task configuration.
    clean: {
      options: {
        force: true
	  },
      dist: ['dist']
    },

//    jshint: {
//      options: {
//        jshintrc: 'source/assets/js/.jshintrc'
//      },
//      gruntfile: {
//        src: 'Gruntfile.js'
//      },
//      src: {
//        src: ['source/assets/js/*.js']
//      },
//      test: {
//        src: ['source/assets/js/tests/unit/*.js']
//      }
//    },
//
//    concat: {
//      options: {
//        banner: '<%= banner %><%= jqueryCheck %>',
//        stripBanners: false
//      },
//      dist: {
//        src: ['source/assets/js/vendor/bootstrap/*.js'],
//        dest: 'dist/assets/js/vendor/bootstrap.js'
//      },
//      dev: {
//        src: ['source/assets/js/vendor/bootstrap/*.js'],
//        dest: 'source/assets/js/vendor/bootstrap.js'
//      }
//    },

//    uglify: {
//      options: {
//        banner: '<%= banner %>',
//        report: 'min'
//      },
//      dist: {
//        src: ['<%= concat.dist.dest %>'],
//        dest: 'dist/assets/js/vendor/bootstrap.min.js'
//      }
//    },

    less: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
		  options: {
			  compress: true
		  },
        src: ['source/assets/css/styles.less'],
        dest: 'dist/assets/css/styles.css'
      },
      dev: {
		  options: {
			  compress: false
		  },
        src: ['source/assets/css/styles.less'],
        dest: 'source/assets/css/styles.css'
      }
    },

    copy: {
		dist: {
		  files: [
			{
				expand: true,
				cwd: 'source/',
				src: [
					"fonts/*",
					"*.html",
					"*.php",
					"assets/font-awesome/css/*",
					"assets/font-awesome/font/*",
					"assets/js/vendor/*.js"
				],
				dest: 'dist/'
		  	}
		  ]
		}
    },

	useminPrepare: {
		html: ['source/index.html','source/index.php'],
		options: {
			dest: 'dist'
		}
	},

	concat: {},

	uglify: {},

    usemin: {
		html: [ 'dist/index.html', 'dist/index.php' ]
    },

//    qunit: {
//      options: {
//        inject: 'source/assets/js/tests/unit/phantom.js'
//      },
//      files: ['source/assets/js/tests/*.html']
//    },

//    connect: {
//      server: {
//        options: {
//          port: 3000,
//          base: '.'
//        }
//      }
//    },

//    jekyll: {
//      docs: {}
//    },

//    validation: {
//      options: {
//        reset: true
//      },
//      files: {
//        src: ["_gh_pages/**/*.html"]
//      }
//    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      less: {
        files: 'source/assets/css/*.less',
        tasks: ['less']
      }
    }
  });


  // These plugins provide necessary tasks.
 // grunt.loadNpmTasks('browserstack-runner');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-html-validation');
//  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  // Docs HTML validation task
  //grunt.registerTask('validate-html', ['jekyll', 'validation']);


  // JS distribution task.

  grunt.registerTask('dist', ['clean:dist', 'less:dist', 'copy:dist', 'useminPrepare', 'concat', 'uglify', 'usemin']);

  grunt.registerTask('dev', ['less:dev']);

  grunt.registerTask('default', ['dist', 'dev']);

};
