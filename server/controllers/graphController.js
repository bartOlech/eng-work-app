const neo4j = require('neo4j-driver');
const data = require('../Data/FBuser.json');
const uniqid = require('uniqid');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

module.exports.graph = async (req, res) => {
  const nameId = req.userKeywordsWithStopList.id;
  const userKeywords = req.userKeywordsWithStopList.words;
  
  // const name = req.name;
console.log(userKeywords.length)
  // dodanie usera do graph bazy
  try {

    const result = await session.run(
      `MATCH (p:Person) 
      WITH COLLECT(p) AS persons
      UNWIND persons AS p1
      UNWIND persons AS p2
      WITH p1,p2
      WHERE id(p1) > id(p2)
      MATCH (p1)-[:RATE]->(w:Word)<-[:RATE]-(p2)
      RETURN p1.name AS p1Name,
      p2.name AS p2Name,
      COUNT(DISTINCT w) AS sharedWordCount,
      COLLECT(DISTINCT w.string) AS sharedWords`,
    )
  
    // Wyświetlenie połączeń
    // result.records.forEach(function(record){
    //   console.log(record._fields[2].low);        
    // });

    // const checkExisting = await session.run(
    //   `Match (a:Person {name: '${nameId}'}) RETURN a`,
    // )
    // // sprawdzenie czy user juz istnieje
    // if (checkExisting.records.length === 0) {
    //   const user = await session.run(
    //     'CREATE (a:Person {name: $nameId}) RETURN a',
    //     { 
    //       nameId,
    //     }
    //   )
  
    //   for (let i = 0; i < userKeywords.length; i++) {
    //     const word = await session.run(
    //       'CREATE (b:Word {id: $id, name: $name}) RETURN b',
    //       { 
    //         id: uniqid(),
    //         name: userKeywords[i],
    //       }
    //     )
  
          // Połączenie Userów przez słowa
    //     const mergeWord = await session.run(
    //       `MATCH (a:Person),(b:Word) WHERE a.name = '${nameId}' AND b.name = '${userKeywords[i]}'  CREATE (a)-[r:RATE { rate: '${Math.random()}' }]->(b) RETURN type(r), r.name`,
    //     )
    //   }
    // }

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