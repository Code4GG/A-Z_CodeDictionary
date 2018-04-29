const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
const Users = sequelize.define("users", {
	user_id : {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	username: Sequelize.STRING,
	password: Sequelize.STRING
	}, {
		timestamps: false
	});
	return Users;
}

// Users.sync();

// module.exports = Users;