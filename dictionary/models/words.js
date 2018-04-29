const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const Users = require("./users.js");

const Words = sequelize.define("words", {
	word_id : {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	word: Sequelize.STRING,
	definition: Sequelize.STRING
}, {
	timestamps: false
});

Words.belongsTo(Users, {foreignKey: "user_id"});

Words.sync();

module.exports = Words;