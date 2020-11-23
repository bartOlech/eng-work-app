const neo4j = require('neo4j-driver');
const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

const getLeftSide = require('../utils/getLeftSide');
const getRightSide = require('../utils/getRightSide');

const results = require('../utils/convertAndReturn');

// przykładowe zapytanie: http://localhost:8080/results?name=testowe

module.exports.results = async (req, res) => {
  const username = req.query.name;
  const wordsResults = await results.getUsers(username, 'Word')
  const citysResults = await results.getUsers(username, 'City')

  console.log(citysResults)
}