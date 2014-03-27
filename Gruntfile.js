module.exports = function (grunt) {

    "use strict";
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        sass: {
            build: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css',
                }]
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['assets/**/*.js'],
            },
            css: {
                files: ['assets/scss/*.scss'],
            }
        },
        jshint: {
            options: {
                "browser": true,
                "jquery": true,
                "strict": true,
                "newcap": true,
                "undef": true,
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                "latedef": true,
                "noarg": true,
                "sub": true,
                "boss": true,
                "eqnull": true,
                "laxcomma": true,
                "laxbreak": true,
                "indent": 4,
                "globals": {
                    "require": true,
                    "module": true
                }
            },
            all: {
                src: [
                    "Gruntfile.js","assets/js/*.js"
                ]
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,                      
                // Force tags to have a closing pair
                    'tagname-lowercase': true,             
                // Force tags to be lowercase
                    'attr-lowercase': true,                
                // Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    'attr-value-double-quotes': true,      
                // Force attributes to have double quotes rather than single
                    'doctype-first': true,                 
                // Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true,              
                // Force special characters to be escaped
                    'id-unique': true,                     
                // Prevent using the same ID multiple times in a document
                //  'head-script-disabled': true,          
                // Prevent script tags being loaded in the  for performance reasons
                    'style-disabled': true                 
                // Prevent style tags. CSS should be loaded through 
                },
                src: ['index.html']
            }
        }


    });

    grunt.registerTask('default',  ['jshint']);
    grunt.registerTask('all',  ['js', 'sass', 'html']);
    grunt.registerTask('html', ['htmlhint']);
    grunt.registerTask('js', ['jshint']);
};
