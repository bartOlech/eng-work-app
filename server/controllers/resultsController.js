const neo4j = require('neo4j-driver');
const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()
const map = require('lodash/map');

const getLeftSide = require('../utils/getLeftSide');
const getRightSide = require('../utils/getRightSide');
const results = require('../utils/convertAndReturn');

// przykładowe zapytanie: http://localhost:8080/results?name=testowe

const sumArray = (totalRate) => {
  return totalRate.reduce((acc, val) => parseFloat(acc) + parseFloat(val), 0)
}

module.exports.results = async (req, res) => {
  let userResults = [];

  const username = req.query.name;
  const wordsResults = await results.getUsers(username, 'Word')
  const citysResults = await results.getUsers(username, 'City')
  const schoolResults = await results.getUsers(username, 'School')
  const userFavoriteAthletesResults = await results.getUsers(username, 'UserFavoriteAthletes')
  const userLanguagesResults = await results.getUsers(username, 'UserLanguages')
  const userSportsResults = await results.getUsers(username, 'UserSports')

  // Końcowa tablica
  userResults = [wordsResults, citysResults, schoolResults, userFavoriteAthletesResults, userLanguagesResults, userSportsResults];

  // początkowy stan rate
  let counterRates = 0;

  let ratesArr = [];

  // zlicz cały rate
  for (let i = 0; i < userResults.length; i++) {
    for (let j = 0; j < userResults[i].length; j++) {
      if (typeof userResults[i][j] === 'object' && userResults[i][j] !== null) {
        counterRates += userResults[i][j].rates.user1.reduce((acc, val) => { return parseFloat(acc) + parseFloat(val); }, 0)
        counterRates += userResults[i][j].rates.user2.reduce((acc, val) => { return parseFloat(acc) + parseFloat(val); }, 0)
      }
    }
  }

  for (let i = 0; i < userResults.length; i++) {
    for (let j = 0; j < userResults[i].length; j++) {
      // sprawdzenie, czy to jest obiekt (bo pierwszy el tablicy to text)
      if (typeof userResults[i][j] === 'object' && userResults[i][j] !== null) {
        // sprawdzenie, czy user znajduje się juz w tablicy
        if (ratesArr.some(el => el.user === userResults[i][j].user1) || ratesArr.some(el => el.user === userResults[i][j].user2)) {
          // przejdz po tablicy, znajdz usera, dodaj mu w totalRate nową wartość
          map(ratesArr, (el) => {
            if (el.user === userResults[i][j].user1 || el.user === userResults[i][j].user2) {
              el.totalRate += sumArray(userResults[i][j].rates.user1) + sumArray(userResults[i][j].rates.user2)
            }
          })
        } else {
          // jeśli user nie istniał, uwtórz go w tablicy
          ratesArr = [
            ...ratesArr,
            {
              user: userResults[i][j].user1 === req.query.name ? userResults[i][j].user2 : userResults[i][j].user1,
              totalRate: sumArray(userResults[i][j].rates.user1) + sumArray(userResults[i][j].rates.user2)
            }
          ]
        }
      }
    }
  }

  // sortowanie wyników
  const sortedResults = ratesArr.sort((a, b) => (a.totalRate < b.totalRate) ? 1 : -1);
  // console.log(sortedResults)
  res.send(sortedResults);
}