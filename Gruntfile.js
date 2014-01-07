module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        concat: {
            node: {
                src: [
                    'build/three.js',
                    'utils/npm/footer.js'
                ],
                dest: '<%= pkg.name %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'exec']);
};