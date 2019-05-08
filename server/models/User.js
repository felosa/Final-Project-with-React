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
  imgPath: String,
  imgName: String,
  travels: Array,
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
