const mongoose = require('mongoose');


const dogSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Dog', dogSchema);
