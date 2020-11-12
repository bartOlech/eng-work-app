const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id: {
    type: String
  },
  words: {
    type: Array,
  }
})

const KeywordsData = mongoose.model('keywords', dataSchema, 'keywords');
module.exports = KeywordsData;