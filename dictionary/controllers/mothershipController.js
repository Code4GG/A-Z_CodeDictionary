const db = require("../models");

module.exports = {
	// Creates new users
	newUser: function(req, res) {
		db.users.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves uses based on username and password
	logIn: function(req, res) {
		db.users.findOne({
			attributes: ["id", "username"],
			where: {
				username: req.params.username,
				password: req.params.password 
			}
		})
		.then(data => {
			res.json(data);
		})
	},

	addWord: function(req, res) {
		db.Words.create({
			word: req.body.word,
			definition: req.body.definition,
		})
		.then(data => {
			res.json(data);
		})
	},

	getWords: function(req, res) {
		db.Words.findAll({})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves events user ID
	getEvents: function(req, res) {
		db.Events.findAll({
			attributes: ["event_id", "event"],
			where: {
				event_id: req.params.id
			}
		})
		.then(data => 
			res.json(data));
	},

	newEvent: function(req, res) {
		db.Events.create({
			event: req.body.event,
		})
		.then(data => {
			res.json(data);
		})
	}
}