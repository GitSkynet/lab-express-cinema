const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showTimes: [String]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const moviesModel = mongoose.model("movies", MovieSchema);

module.exports = moviesModel;