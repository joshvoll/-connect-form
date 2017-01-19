// defining express again
const Express = require('express');
const Router = Express.Router();
const MainController = require('./controllers/index');

// definging the export
Router.get('/', MainController.home);
Router.get('/requestserver', MainController.requestServer);
Router.post('/createjiraissue', MainController.createJiraIssue);
// expoting internals
module.exports = Router;