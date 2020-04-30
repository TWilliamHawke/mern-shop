const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = new mongoose.model('User', userSchema);


module.exports = userModel