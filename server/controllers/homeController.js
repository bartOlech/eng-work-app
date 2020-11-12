const neo4j = require('neo4j-driver')
const data = require('../Data/FBuser.json');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

module.exports.home = async (req, res) => {
  // try {
  //   const result = await session.run(
  //     'MATCH(n) RETURN n'
  //   )
  //     console.log(result.records[0].get(0))
  // } finally {
  //   await session.close()
  // }
  res.send(data);
}