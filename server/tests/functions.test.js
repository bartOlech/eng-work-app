const getUpperArray = require('../utils/getUpperArray');
const chai = require('chai');
const  expect = chai.expect;
const map = require('lodash/map');

const tempArray = ['test word 2'];


describe(`check upperArray function`, () => {
  it(`should transform each element of array to the uppercase`, async () => {
    const arrayWithUppercase = map(tempArray, getUpperArray.getArray);

    arrayWithUppercase.should.be.a('array');
    should.not.equal(arrayWithUppercase, null);
    expect(arrayWithUppercase[0]).to.be.equal('TEST WORD 2');
  })
})