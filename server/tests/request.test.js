const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

// Sprawdz requesty
describe('API', () => {
  // Test results route
  describe('GET /results?name=testowe', () => {
    it('It should GET all results', (done) => {
      chai.request(server)
        .get('/results?name=testowe')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        })
    })

    it('It should NOT GET all results', (done) => {
      chai.request(server)
        //  z literówką
        .get('/result?name=testowe')
        .end((err, response) => {
          response.should.have.status(404);
          done();
        })
    })
  })
})

