// simple server for express
const Express = require('express');
const App = Express();
const Port  = process.env.PORT || 8080;
const ExpressLayouts = require('express-ejs-layouts');
const Router = require('./lib/routes');
const bodyParser = require('body-parser');


// configure the application

// add express for static files
App.use(Express.static(__dirname + '/public'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// set the templating engine
App.set('view engine', 'ejs');
// use the express ejs layouts
App.use(ExpressLayouts);


// set the routes
App.use(Router);

App.listen(Port, () => {

    console.log(`server is running on: http://localhost:${Port}`);

});