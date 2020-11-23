const neo4j = require('neo4j-driver');
const data = require('../Data/FBuser.json');
const uniqid = require('uniqid');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

module.exports.graph = async (req, res) => {
  const nameId = req.userKeywordsWithStopList.id;
  const userKeywords = req.userKeywordsWithStopList.words;
  const userCity = req.userKeywordsWithStopList.userCity;
  const userEducation = req.userKeywordsWithStopList.userEducation;
  const userFavorite_athletes = req.userKeywordsWithStopList.userFavorite_athletes;
  const userLanguages = req.userKeywordsWithStopList.userLanguages;
  const userSports = req.userKeywordsWithStopList.userSports;

  
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

      // Miasto
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
  
      // Słowa
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

    //     Usunięcie duplikatów:
    // const removedDuplicates = await session.run(
    //   `MATCH (n:Word)
    //   WITH n.name AS name, collect(n) AS nodes
    //   WHERE size(nodes) > 1
    //   FOREACH (n in tail(nodes) | DETACH DELETE n)`,
    // )
  } catch (error) {
    console.log(error)
  }
   finally {
    await session.close()
    res.send('Poszło')
  }
}