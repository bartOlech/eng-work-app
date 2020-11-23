const neo4j = require('neo4j-driver');
const driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()

const getLeftSide = require('./getLeftSide');
const getRightSide = require('./getRightSide');

exports.getUsers = async (username, node) => {
  let usersAssociation = [];

  try {
    const leftSideResults = await session.run(
      getLeftSide.getUsers(username, node)
    )

    const rightSideResults = await session.run(
      getRightSide.getUsers(username, node)
    )

     // Wyświetlenie połączeń
    leftSideResults.records.forEach((record) => {
      const association = {
        user1: record._fields[0],
        user2: record._fields[1],
        associationCount: record._fields[2].low,
      }
      usersAssociation = [...usersAssociation, association];
    });

    rightSideResults.records.forEach((record) => {
      const association = {
        user1: record._fields[0],
        user2: record._fields[1],
        associationCount: record._fields[2].low,
      }
      usersAssociation = [...usersAssociation, association];
    });
  } catch (error) {
    console.log(error)
  }
  return usersAssociation;
}