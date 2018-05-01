const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
const Events = sequelize.define("events", {
	message: datatypes.STRING
	}, {
		timestamps: false
	});
	return Events;
}


