const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const travelSchema = new Schema({
  name: String,
  city: String,
  // city: { type: Schema.Types.ObjectId, ref: 'City' },
  country: String,
  description: String,
  minDate: String,
  maxDate: String,
  imageUrl: String,
  imgName: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  plans: [{ type: Schema.Types.ObjectId, ref: 'Plan' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;
