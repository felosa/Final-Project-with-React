const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema({
  name: String,
  city: String,
  country: String,
  description: String,
  date: String,
  imgPath: String,
  imgName: String,
  plans: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;
