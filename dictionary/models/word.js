const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;