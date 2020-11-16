const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  words: {
    type: Array,
  },
  userAddress: {
    type: Array,
  },
  userBirthday: {
    type: Array,
  },
  userEducation: {
    type: Array,
  },
  userFavorite_athletes: {
    type: Array,
  },
  userFavorite_teams: {
    type: Array,
  },
  userLanguages: {
    type: Array,
  },
  userSports: {
    type: Array,
  },
  userMusicBand: {
    type: Array,
  },
  userMusicType: {
    type: Array,
  }
})

const KeywordsData = mongoose.model('keywords', dataSchema, 'keywords');
module.exports = KeywordsData;