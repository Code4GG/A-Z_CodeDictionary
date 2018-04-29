const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(wordsController.findAll)
  .post(wordsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wordsController.findById)
  .put(wordsController.update)
  .delete(wordsController.remove);

module.exports = router;