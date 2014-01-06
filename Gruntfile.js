module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            build: {
                cwd: './utils/build/',
                command: 'node build.js --include common --include extras --output ../../build/three.js'
            },
            build_min: {
                cwd: './utils/build/',
                command: 'node build.js --include common --include extras --minify --output ../../build/three.min.js'
            }
        },

        browserify2: {
            compile: {
                entry: './build/three.js',
                compile: './three.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-browserify2');

    grunt.registerTask('default', ['exec', 'browserify2:compile']);
};