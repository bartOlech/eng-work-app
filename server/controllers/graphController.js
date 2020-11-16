const neo4j = require('neo4j-driver');
const data = require('../Data/FBuser.json');
const uniqid = require('uniqid');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

module.exports.graph = async (req, res) => {
  const nameId = req.userKeywordsWithStopList.id;
  const userKeywords = req.userKeywordsWithStopList.words;
  // const name = req.name;

  // dodanie usera do graph bazy
  try {
    const user = await session.run(
      'CREATE (a:Person {name: $nameId}) RETURN a',
      { 
        nameId,
      }
    )

    for (let i = 0; i < userKeywords.length; i++) {
      const word = await session.run(
        'CREATE (b:Word {id: $id, name: $name}) RETURN b',
        { 
          id: uniqid(),
          name: userKeywords[i],
        }
      )

      const mergeWord = await session.run(
        `MATCH (a:Person),(b:Word) WHERE a.name = '${nameId}' AND b.name = '${userKeywords[i]}'  CREATE (a)-[r:RATE { rate: '${Math.random()}' }]->(b) RETURN type(r), r.name`,
      )
    }
  } finally {
    await session.close()
    // res.send('Poszło')
  }
  

  res.send(req.userKeywordsWithStopList);
}