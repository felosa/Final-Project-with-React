const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const planSchema = new Schema({
  name: String,
  city: String,
  // city: { type: Schema.Types.ObjectId, ref: 'City' },
  date: String,
  type: String,
  description: String,
  lang: String,
  genre: String,
  hour: Number,
  maxYear: Number,
  place: String,
  imageUrl: String,
  imgName: String,
  comments: [String],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }] //ARRAY
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
