module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded' //compressed for dev
                },
                files: {
                    'assets/css/prod/main.css': 'assets/css/src/main.scss'
                }
            }
        },
        watch: {
            src: {
                files: ['assets/css/src/*.scss', 'assets/js/src/*.jsx'],
                tasks: ['default'],
            }
        },
        babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            jsx: {
                files: [{
                    expand: true,
                    cwd: './assets/js/src/view',
                    src: ['*.jsx'],
                    dest: './assets/js/prod/view/main.js'
                    ext: '.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'babel']);

};
