const path = require('path');
const fs = require('fs');

module.exports = (app) => {
	app.get('*', function(req, res, next) {
		let indexPage = path.join('./', 'static', 'index.html');
		res.set('Content-Type', 'text/html');
		res.send(fs.readFileSync(indexPage));
	});
}
