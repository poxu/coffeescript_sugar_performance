var expect = require('expect.js');

var exports = require('../src/arrayTraversingFunctions.js');

var cubesShugar = exports.cubesShugar;
var cubesLambda = exports.cubesLambda;
var honestCubesLambda = exports.honestCubesLambda;
var totallyHonestCubesLambda = exports.totallyHonestCubesLambda;


var sumSugar = exports.sumSugar;
var sumLambda = exports.sumLambda;

describe('ArrayTraversal', function() {

    var functionName = function (fun) {
      var ret = fun.toString();
      ret = ret.substr('function '.length);
      ret = ret.substr(0, ret.indexOf('('));
      return ret;
    }

    describe('#cubes', function() {
        [

            cubesShugar,
            cubesLambda,
            honestCubesLambda,
            totallyHonestCubesLambda

        ].forEach(function(func) { 
            var funcName = functionName(func);
            it(funcName + ' should calculate cubes correctly', function() {
                var array = [1, 2, 3];
                var expected = [1, 8, 27];
                var cubes = func(array);

                expect(cubes).to.be.eql(expected);
            });
        });
    });

    describe('#sums', function() {
        [
            sumSugar,
            sumLambda

        ].forEach(function(func) { 
            var funcName = functionName(func);
            it(funcName + ' should calculate sums correctly', function() {
                var array = [1, 2, 3];
                var expected = 6;
                var sum = func(array);

                expect(sum).to.be.eql(expected);
            });
        });
    });
});
