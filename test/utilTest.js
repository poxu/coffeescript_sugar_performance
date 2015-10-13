var expect = require('expect.js');

var exports = require('../src/util.js');
var generateArray = exports;

describe('#util', function() {
    describe('#generateArray', function() {
        it('should return array of specified length', function() {
            var array = generateArray(50);

            expect(array.length).to.be.equal(50);
        });
    });
});
