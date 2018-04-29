const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
const Events = sequelize.define("events", {
	event_id: {
		type: datatypes.INTEGER,
		primaryKey: true
	},
	message: datatypes.STRING
	}, {
		timestamps: false
	});
	return Events;
}


// Events.sync();

// module.exports = Events;