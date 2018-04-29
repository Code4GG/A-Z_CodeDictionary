const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Events = sequelize.define("events", {
	event_id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	message: Sequelize.STRING
}, {
	timestamps: false
});


Events.sync();

module.exports = Events;