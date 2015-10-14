(function() {

'use strict';

var cube = function(num) {
    return num*num*num;
};

var cubesShugar = (function() {
    return function(array) {
        var i, len, results;
        results = [];
        for (i = 0, len = array.length; i < len; i++) {
            var num = array[i];
            results.push(cube(num));
        }
        return results;
    };
}());

var cubesLambda = (function() {
    return function(array) {
        return array.map(cube);
    };
}());

var honestCubesLambda = (function() {
    return function(array) {
        return array.reduce(function(prev, curr) {
            return prev.concat(cube(curr));
        }, []);
    };
}());

var totallyHonestCubesLambda = (function() {
    return function(array) {
        return array.reduce(function(result, curr) {
            result.push(cube(curr));
            return result;
        }, []);
    };
}());

var sumSugar = (function() {
    return function(array) {
        var i, len, sum = 0;
        for (i = 0, len = array.length; i < len; i++) {
            var num = array[i];
            sum += num;
        }
        return sum;
    };
}());

var sumSugarWithFunctionCall = (function() {
    var doSum = function(sum, curr) {
        return sum+curr;
    };

    return function(array) {
        var i, len, sum = 0;
        for (i = 0, len = array.length; i < len; i++) {
            var num = array[i];
            sum = doSum(sum, num);
        }
        return sum;
    };
}());


var sumLambda = (function() {
    return function(array) {
        return array.reduce(function(prev, curr) {
            return curr + prev;
        }, 0);
    };
}());

if (typeof module !== 'undefined') {
    module.exports = {
        cubesShugar : cubesShugar,
        cubesLambda : cubesLambda,
        honestCubesLambda : honestCubesLambda,
        totallyHonestCubesLambda: totallyHonestCubesLambda,
        sumSugar : sumSugar,
        sumSugarWithFunctionCall : sumSugarWithFunctionCall,
        sumLambda : sumLambda
    };
}

}());

