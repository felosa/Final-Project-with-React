const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const planSchema = new Schema({
  name: String,
  type: String,
  place: String,
  image: String,
  date: Number,
  lang: String,
  genre: String,
  Rate: Number,
  image: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
