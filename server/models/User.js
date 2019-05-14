const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  lang: String,
  country: String,
  description: String,
  genre: String,
  year: Number,
  rate: Number,
  imageUrl: String,
  imgName: String,
  travels: [{ type: Schema.Types.ObjectId, ref: 'Travel' }],
    role: {
    type: String,
    enum : ['author', 'colaborator', 'normalUser'],
    default : 'normalUser'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
