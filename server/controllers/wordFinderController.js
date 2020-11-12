const  Keywords = require('../Data/Keywords');
// lodash
const includes = require('lodash/includes');
const split = require('lodash/split');
const uniqBy = require('lodash/uniqBy');
// utils
const getUpperArray = require('../utils/getUpperArray');
const removePunctation = require('../utils/removePunctuation');

const FBuser = require('../Data/FBuser.json');

module.exports.wordFinder = (req, res) => {
  // user data
  let userKeywords = [];
  const userAddress =  FBuser.address;
  const userBirthday = FBuser.birthday;
  const userEducation = split(FBuser.education, '');
  const userFavorite_athletes = FBuser.favorite_athletes;
  const userFavorite_teams = FBuser.favorite_teams;
  const userLanguages = FBuser.languages;
  const userSports = FBuser.sports;
  const userMusicBand = FBuser.music.map(el => el.title);
  const userMusicType = uniqBy(FBuser.music.map(el => el.type));

  const keywords = Keywords.Keywords.map(getUpperArray.getArray);

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

  const arr = split('a, aby, ach, acz, aczkolwiek, aj, albo, ale, ależ, ani, aż, bardziej, bardzo, bo, bowiem, by, byli, bynajmniej, być, był, była, było, były, będzie, będą, cali, cała, cały, ci, cię, ciebie, co, cokolwiek, coś, czasami, czasem, czemu, czy, czyli, daleko, dla, dlaczego, dlatego, do, dobrze, dokąd, dość, dużo, dwa, dwaj, dwie, dwoje, dziś, dzisiaj, gdy, gdyby, gdyż, gdzie, gdziekolwiek, gdzieś, go, i, ich, ile, im, inna, inne, inny, innych, iż, ja, ją, jak, jakaś, jakby, jaki, jakichś, jakie, jakiś, jakiż, jakkolwiek, jako, jakoś, je, jeden, jedna, jedno, jednak, jednakże, jego, jej, jemu, jest, jestem, jeszcze, jeśli, jeżeli, już, ją, każdy, kiedy, kilka, kimś, kto, ktokolwiek, ktoś, która, które, którego, której, który, których, którym, którzy, ku, lat, lecz, lub, ma, mają, mało, mam, mi, mimo, między, mną, mnie, mogą, moi, moim, moja, moje, może, możliwe, można, mój, mu, musi, my, na, nad, nam, nami, nas, nasi, nasz, nasza, nasze, naszego, naszych, natomiast, natychmiast, nawet, nią, nic, nich, nie, niech, niego, niej, niemu, nigdy, nim, nimi, niż, no, o, obok, od, około, on, ona, one, oni, ono, oraz, oto, owszem, pan, pana, pani, po, pod, podczas, pomimo, ponad, ponieważ, powinien, powinna, powinni, powinno, poza, prawie, przecież, przed, przede, przedtem, przez, przy, roku, również, sam, sama, są, się, skąd, sobie, sobą, sposób, swoje, ta, tak, taka, taki, takie, także, tam, te, tego, tej, temu, ten, teraz, też, to, tobą, tobie, toteż, trzeba, tu, tutaj, twoi, twoim, twoja, twoje, twym, twój, ty, tych, tylko, tym, u, w, wam, wami, was, wasz, wasza, wasze, we, według, wiele, wielu, więc, więcej, wszyscy, wszystkich, wszystkie, wszystkim, wszystko, wtedy, wy, właśnie, z, za, zapewne, zawsze, ze, zł, znowu, znów, został, żaden, żadna, żadne, żadnych, że, żeby', ', ')


  res.send(arr)
}