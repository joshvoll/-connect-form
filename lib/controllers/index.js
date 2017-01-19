// creating the routes
const internals = {};

// home page
internals.home = (req, res) => {

	res.render('main/home');

};

// request a server
internals.requestServer = (req, res) => {

    res.render('main/requestserver');
};

// post requets for the form issue
internals.createJiraIssue = (req, res) => {

	console.log(JSON.stringify(req.body));

};

// exposing de internals
module.exports = internals;