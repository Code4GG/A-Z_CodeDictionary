// Create dependecies
const router = require("express").Router();
const databaseController = require("../../controllers/mothershipController");

// Route for new user creation
router.route("/newUser")
	.post(databaseController.newUser);

router.route("/logIn/:username/:password")
	.get(databaseController.logIn);

router.route("/addWord")
	.post(databaseController.addWord);

router.route("/getWords")
	.get(databaseController.getWords);


router.route("/getEvents/:id")
	.get(databaseController.getEvents);

router.route("/newEvent")
	.post(databaseController.newEvent)

module.exports = router;