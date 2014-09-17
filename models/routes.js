var Q = require('q');
var Datastore = require('nedb');
var dbPath = process.env.NODE_ENV == 'production' ? './db/bin/routes' : './db/bin/test-routes'; 
	
var Routes = new Datastore({ filename: dbPath, autoload: true });

Routes.find 	= Q.nbind(Routes.find, Routes);
Routes.findOne 	= Q.nbind(Routes.findOne, Routes);
Routes.insert 	= Q.nbind(Routes.insert, Routes);
Routes.update 	= Q.nbind(Routes.update, Routes);
Routes.remove 	= Q.nbind(Routes.remove, Routes);
	
module.exports = Routes;