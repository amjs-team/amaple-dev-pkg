var url = require("url"),
	gulp = require ("gulp"),
	webserver = require ("gulp-webserver"),
	livereload = require ("gulp-livereload"),
	mockData = require ("./mock_data.js");

gulp.task ( "connect", function () {
	gulp.src ("./src")
	.pipe ( webserver ( {
        open: true,
        livereload: true,
        port: 8080,
        middleware: function(req, res, next) {
            var urlObj = url.parse(req.url, true);
            for (var i in mockData) {
                if ("/" + i === urlObj.pathname) {
                    res.end(mockData[i]);
                    return;
                }
            }
            next();
        }
    } ) )
} );

gulp.task ( "server", function () {
	gulp.start ( "connect" );
} );