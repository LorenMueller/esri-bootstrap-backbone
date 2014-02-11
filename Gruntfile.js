// Generated on 2014-02-01 using generator-bootstrap-less 3.2.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var _appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    appConfig: _appConfig,
    watch: {
      coffee: {
        files: ['<%= appConfig.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      less: {
        files: ['<%= appConfig.app %>/styles/{,*/}*.less'],
        tasks: ['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= appConfig.app %>/*.html',
          '{.tmp,<%= appConfig.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= appConfig.app %>}/scripts/{,*/}*.js',
          '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= appConfig.app %>/scripts/templates/*.{html,ejs,mustache,hbs}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= appConfig.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= appConfig.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= appConfig.dist %>'
        }
      }
    },
    open: {
      server: {
          path: 'http://localhost:<%= connect.options.port %>'
      },
      test: {
          path: 'http://localhost:<%= connect.test.options.port %>'
      }
        },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.dist %>/*',
            '!<%= appConfig.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= appConfig.app %>/scripts/{,*/}*.js',
        '!<%= appConfig.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '<%= appConfig.app %>/scripts',
          ext: '.js'
        }]
      }
    },
    less: {
      dist: {
        files: {
          '<%= appConfig.app %>/styles/main.css': ['<%= appConfig.app %>/styles/main.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= appConfig.app %>/styles/main.css.map',
          sourceMapBasepath: '<%= appConfig.app %>/',
          sourceMapRootpath: '/'
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    uglify: {
      options: {
        mangle: true
      },
      dist: {
        files: {
          '<%= appConfig.dist %>/scripts/main.js': ['<%= appConfig.app %>/scripts/main.js'],
          '<%= appConfig.dist %>/scripts/mapping.js': ['<%= appConfig.app %>/scripts/mapping.js'],
          '<%= appConfig.dist %>/scripts/router.js': ['<%= appConfig.app %>/scripts/router.js'],
          '<%= appConfig.dist %>/scripts/mapConfig.js': ['<%= appConfig.app %>/scripts/mapConfig.js'],
          '<%= appConfig.dist %>/scripts/utilities.js': ['<%= appConfig.app %>/scripts/utilities.js'],
          '<%= appConfig.dist %>/scripts/views/vBase.js': ['<%= appConfig.app %>/scripts/views/vBase.js'],
          '<%= appConfig.dist %>/scripts/views/vAbout.js': ['<%= appConfig.app %>/scripts/views/vAbout.js'],
          '<%= appConfig.dist %>/scripts/views/vMap.js': ['<%= appConfig.app %>/scripts/views/vMap.js'],
          '<%= appConfig.dist %>/scripts/views/vSplash.js': ['<%= appConfig.app %>/scripts/views/vSplash.js'],
          '<%= appConfig.dist %>/scripts/views/views.js': ['<%= appConfig.app %>/scripts/views/views.js']
        }
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= appConfig.dist %>/scripts/{,*/}*.js',
            '<%= appConfig.dist %>/styles/{,*/}*.css',
            '<%= appConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= appConfig.dist %>/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= appConfig.app %>/index.html',
      options: {
        dest: '<%= appConfig.dist %>'
      }
    },
    usemin: {
      html: ['<%= appConfig.dist %>/{,*/}*.html'],
      css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= appConfig.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= appConfig.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= appConfig.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>',
          src: '*.html',
          dest: '<%= appConfig.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            'fonts/{,*/}*.*',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'scripts/templates/{,*/}*.html*'
          ]
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>/bower_components/font-awesome/fonts/',
          dest: '<%= appConfig.app %>/fonts/font-awesome',
          src: ['*']
        }, {          
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>/bower_components/bootstrap/fonts/',
          dest: '<%= appConfig.app %>/fonts/glyphicons',
          src: ['*']
        }]
      }
    },
    concurrent: {
      dist: [
        'coffee',
        'less',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive','open:server']);
    }

    grunt.task.run([
      'clean:server',
      'coffee',
      'less',
      'copy:server',
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'less',
    'copy:server',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'copy:server',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'usemin' //for processing (concat, ugilfy) 'build' blocks in the HTML file
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
