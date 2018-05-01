const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const Users = require("./users.js");

module.exports = function(sequelize, datatypes){
const Words = sequelize.define("words", {
	word: Sequelize.STRING,
	definition: Sequelize.STRING
	}, {
		timestamps: false
	});
	return Words;
}

// Words.belongsTo(Users, {foreignKey: "user_id"});

// Words.sync();

// module.exports = Words;