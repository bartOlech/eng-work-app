const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  city: {
    type: Array,
  },
})

const UsersData = mongoose.model('users', dataSchema, 'users');
module.exports = UsersData;