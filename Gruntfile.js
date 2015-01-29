module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	
	grunt.initConfig({
		
		coffee:{
			options: {
				bare: true
			},
			compile:{
				expand:true,
				cwd:"src/",
				src:"*.coffee",
				dest:"dist/",
				ext:".js"
			}

		},

		watch:{
			scripts:{

				files:['src/*.coffee'],
				tasks:['coffee']

			}
		}
		
	});

}