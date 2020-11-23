const neo4j = require('neo4j-driver');
const data = require('../Data/FBuser.json');
const uniqid = require('uniqid');
const map = require('lodash/map');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

const getArrayWithName = require('../utils/getArrayWithName');
const getUpperArray = require('../utils/getUpperArray')

module.exports.graph = async (req, res) => {
  const nameId = req.userKeywordsWithStopList.id;
  const userKeywords = req.userKeywordsWithStopList.words;
  const userCity = map(req.userKeywordsWithStopList.userCity, getUpperArray.getArray);
  const userEducation = map(req.userKeywordsWithStopList.userEducation, getUpperArray.getArray);
  const userFavorite_athletes = map(getArrayWithName.get(req.userKeywordsWithStopList.userFavorite_athletes), getUpperArray.getArray);
  const userLanguages = map(req.userKeywordsWithStopList.userLanguages, getUpperArray.getArray);
  const userSports = map(req.userKeywordsWithStopList.userSports, getUpperArray.getArray);
  
  // dodanie usera do graph bazy
  try {
    const checkExisting = await session.run(
      `Match (a:Person {name: '${nameId}'}) RETURN a`,
    )
    // // sprawdzenie czy user juz istnieje
    if (checkExisting.records.length === 0) {
      const user = await session.run(
        'CREATE (a:Person {name: $nameId}) RETURN a',
        { 
          nameId,
        }
      )

      // Dodanie miasta do bazy
      for (let i = 0; i < userCity.length; i++) {
        const checkExistingCity = await session.run(
          `Match (a:City {name: '${userCity[i]}'}) RETURN a`,
        )
        if (checkExistingCity.records.length === 0) {
          const word = await session.run(
            'CREATE (b:City {name: $name}) RETURN b',
            { 
              name: userCity[i],
            }
          )
        }

        // Połączenie Userów przez miasto
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:City) WHERE a.name = '${nameId}' AND b.name = '${userCity[i]}'  CREATE (a)-[r:RATE]->(b) RETURN type(r), r.name`,
        )
      }

      // ----------------------

      // Dodanie szkoły do bazy
      for (let i = 0; i < userEducation.length; i++) {
        const checkExistingSchool = await session.run(
          `Match (a:School {name: '${userEducation[i]}'}) RETURN a`,
        )
        if (checkExistingSchool.records.length === 0) {
          const word = await session.run(
            'CREATE (b:School {name: $name}) RETURN b',
            { 
              name: userEducation[i],
            }
          )
        }

        // Połączenie Userów przez szkołe
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:School) WHERE a.name = '${nameId}' AND b.name = '${userEducation[i]}'  CREATE (a)-[r:RATE]->(b) RETURN type(r), r.name`,
        )
      }

      // ----------------------
      // Dodanie ulubionych sportowców do bazy
      for (let i = 0; i < userFavorite_athletes.length; i++) {
        const checkExistingSchool = await session.run(
          `Match (a:UserFavoriteAthletes {name: '${userFavorite_athletes[i]}'}) RETURN a`,
        )
        if (checkExistingSchool.records.length === 0) {
          const word = await session.run(
            'CREATE (b:UserFavoriteAthletes {name: $name}) RETURN b',
            { 
              name: userFavorite_athletes[i],
            }
          )
        }

        // Połączenie Userów przez sportowców
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:UserFavoriteAthletes) WHERE a.name = '${nameId}' AND b.name = '${userFavorite_athletes[i]}'  CREATE (a)-[r:RATE]->(b) RETURN type(r), r.name`,
        )
      }

      // ----------------------

      // Dodanie języków do bazy
      for (let i = 0; i < userLanguages.length; i++) {
        const checkExistingSchool = await session.run(
          `Match (a:UserLanguages {name: '${userLanguages[i]}'}) RETURN a`,
        )
        if (checkExistingSchool.records.length === 0) {
          const word = await session.run(
            'CREATE (b:UserLanguages {name: $name}) RETURN b',
            { 
              name: userLanguages[i],
            }
          )
        }

        // Połączenie Userów przez języki
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:UserLanguages) WHERE a.name = '${nameId}' AND b.name = '${userLanguages[i]}'  CREATE (a)-[r:RATE]->(b) RETURN type(r), r.name`,
        )
      }

      // ----------------------

      // Dodanie sportów do bazy
      for (let i = 0; i < userSports.length; i++) {
        const checkExistingSchool = await session.run(
          `Match (a:UserSports {name: '${userSports[i]}'}) RETURN a`,
        )
        if (checkExistingSchool.records.length === 0) {
          const word = await session.run(
            'CREATE (b:UserSports {name: $name}) RETURN b',
            { 
              name: userSports[i],
            }
          )
        }

        // Połączenie Userów przez sporty
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:UserSports) WHERE a.name = '${nameId}' AND b.name = '${userSports[i]}'  CREATE (a)-[r:RATE]->(b) RETURN type(r), r.name`,
        )
      }

      // ----------------------
  
      // Dodanie słów do bazy
      for (let i = 0; i < userKeywords.length; i++) {
        const checkExistingWord = await session.run(
          `Match (a:Word {name: '${userKeywords[i]}'}) RETURN a`,
        )

        if (checkExistingWord.records.length === 0) {
          const word = await session.run(
            'CREATE (b:Word {id: $id, name: $name}) RETURN b',
            { 
              id: uniqid(),
              name: userKeywords[i],
            }
          )
        }
  
        // Połączenie Userów przez słowa
        const mergeWord = await session.run(
          `MATCH (a:Person),(b:Word) WHERE a.name = '${nameId}' AND b.name = '${userKeywords[i]}'  CREATE (a)-[r:RATE { rate: '${Math.random()}' }]->(b) RETURN type(r), r.name`,
        )
      }
    }
  } catch (error) {
    console.log(error)
  }
   finally {
    await session.close()
    res.send('Poszło')
  }
}