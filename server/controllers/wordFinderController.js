const mongoose = require('mongoose');
const uniqid = require('uniqid');
const Keywords = require('../Data/Keywords');
const stopList = require('../Data/StopList');
// lodash
const includes = require('lodash/includes');
const split = require('lodash/split');
const uniqBy = require('lodash/uniqBy');
const map = require('lodash/map');
// utils
const getUpperArray = require('../utils/getUpperArray');
const removePunctation = require('../utils/removePunctuation');

const FBuser = require('../Data/FBuser3.json');
const KeywordsModel = require('../Models/KeywordsModel');

module.exports.wordFinder = (req, res, next) => {
  // connect to database
  mongoose.connect('mongodb+srv://olechbartlomiej:Forhuta123@quizapp.mpygt.mongodb.net/eng-work?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(console.log('MongoDB conected')).catch(err => console.log(err))
  mongoose.Promise = global.Promise;

  // user data
  let userKeywords = [];
  const userCity =  FBuser.city
  const userBirthday = FBuser.birthday;
  const userEducation = FBuser.education;
  const userFavorite_athletes = FBuser.favorite_athletes;
  const userFavorite_teams = FBuser.favorite_teams;
  const userLanguages = FBuser.languages;
  const userSports = FBuser.sports;
  const userMusicBand = FBuser.music.map(el => el.title);
  const userMusicType = uniqBy(FBuser.music.map(el => el.type));

  // const keywords = Keywords.Keywords.map(getUpperArray.getArray);

  // Add community words
  FBuser.community.map(el => {
    userKeywords = [
      ...userKeywords, ...split(removePunctation.getWord(el.name), ' '),
      ...split(removePunctation.getWord(el.description), ' ')
    ]
  })

  // Add posts words
  FBuser.posts.map(el => {
    userKeywords = [
      ...userKeywords, ...split(removePunctation.getWord(el.title), ' '),
    ]
  })

  // Add likes words
  FBuser.likes.map(el => {
    userKeywords = [
      ...userKeywords, ...split(removePunctation.getWord(el.title), ' '),
    ]
  })

  //  Add comments words
   FBuser.comments.map(el => {
    userKeywords = [
      ...userKeywords, ...split(removePunctation.getWord(el.comment), ' '),
    ]
  })

  // Compare with stopList and change to uppercase
  let userKeywordsWithStopList = map(userKeywords.filter(el => !includes(stopList.list, el)), getUpperArray.getArray);

  // create object with count
  const counts = {};
  userKeywordsWithStopList.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

  // transform object to array (with key, value)
  const output = Object.entries(counts).map(([word, count]) => ({word,count}));

  // Save to the MongoDB
  const newPerson = new KeywordsModel({
    id: FBuser.id,
    name: `${FBuser.name} ${FBuser.surname}`,
    words: output,
    userCity,
    userBirthday,
    userEducation,
    userFavorite_athletes,
    userFavorite_teams,
    userLanguages,
    userSports,
    userMusicBand,
    userMusicType
  });
  
  // newPerson.save().then(() => console.log('The person has been saved')).catch((err) => console.log(err));
  req.userKeywordsWithStopList = newPerson;
  next();
  // res.send(userKeywordsWithStopList);
}