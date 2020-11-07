const express = require('express');
const app = express();
const router = require('./routes/index');
const neo4j = require('neo4j-driver')

app.use('/', router);

const driver = neo4j.driver("bolt://7687", neo4j.auth.basic('neo4j', 'Forhuta123'))
const session = driver.session()



// on application exit:
// await driver.close()


module.exports = app;