const neo4j = require('neo4j-driver');

const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))

const runQuery = (query) => {
  const session = driver.session();
  return session
    .writeTransaction(tx => tx.run(query))
    .then(result => {
      session.close();
      return result;
    })
    .catch(error => {
      session.close();
      return { error };
    });
}

describe(`check graph database`, () => {
  it(`should connect and return the results`, async () => {
    const result = await runQuery('match (n) return n' );
   
    // sprawdzenie poprawnego pobrania zapytania
    result.should.be.a('object');
    // sprawdzenie, czy baza zawiera informacje
    should.not.equal(result, null);
  })
})