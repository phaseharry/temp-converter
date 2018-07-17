const expect = require('chai').expect;
const tempConverter = require(`../temp`);

describe('temperature converter', () => {
  it(`tempConverter obj exists`, () => {
    expect(tempConverter).to.be.ok;
  });
  it(`can convert celsius to fahrenheit`, () => {
    expect(tempConverter.convertC2F(42)).to.equal(107.6);
  });
  it('can convert fahrenheit to celcius', () => {
    expect(tempConverter.convertF2C(107.6)).to.equal(42);
  });
});
