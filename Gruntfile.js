module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/axios/dist/axios.min.js'],
            dest: 'public/lib/',
            filter: 'isFile'
          },
        ],
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);
};
