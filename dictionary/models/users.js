const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

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

Users.sync();

module.exports = Users;