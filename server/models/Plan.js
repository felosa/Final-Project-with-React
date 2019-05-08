const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const planSchema = new Schema({
  name: String,
  city: String,
  date: Number,
  type: String,
  description: String,
  lang: String,
  genre: String,
  hour: Number,
  year: Number,
  place: String,
  imgPath: String,
  imgName: String,
  ownerRate: Number,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  colaborate: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
