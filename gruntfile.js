grunt.initConfig({
    execute: {
        build: {
            src: ['./utils/build/build.js']
        }
    },

    browserify2: {
        compile: {
            entry: './build/three.js',
            compile: './three.js'
        }
    }
});

grunt.loadNpmTasks('grunt-execute');
grunt.loadNpmTasks('grunt-browserify2');

grunt.registerTask('default', ['execute:build', 'browserify2:compile']);