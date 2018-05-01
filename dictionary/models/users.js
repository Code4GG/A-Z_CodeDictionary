const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
const users = sequelize.define("users", {
	username: Sequelize.STRING,
	password: Sequelize.STRING
	}, {
		timestamps: false
	});
	return users;
}

// Users.sync();

// module.exports = Users;