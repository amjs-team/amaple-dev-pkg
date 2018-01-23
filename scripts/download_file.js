const 
	https = require ("https"),
	fs = require ("fs"),
	dist = require ("path").resolve ( __dirname, "../src/asset" ) + "/amaple.js";

// 请求下载地址
https.get ("https://unpkg.com/amaple", (req,res) => {
    let js = "";
    req.on ("data", data => {
        js += data;
    });

    req.on ("end", () => {
    	const version = (js.match(/@([0-9.]+)$/) || ["", "1.0.1"])[1];
    	https.get (`https://unpkg.com/amaple@${version}/dist/amaple.${version}.js`, req => {
    		js = "";
    		req.on ("data", data => {
    		    js += data;
    		});

    		req.on ("end", () => {
    			fs.writeFileSync (dist, js);
    		});
    	});
    });
})
.on ("error", err => {
    console.error (err);
});