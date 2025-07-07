const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String, // hashed
  provider: String,
  name: String,
});

module.exports = mongoose.model("User", userSchema);