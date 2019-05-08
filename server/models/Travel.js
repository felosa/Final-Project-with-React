const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema({
  name: String,
  country: String,
  city: String,
  date: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;
