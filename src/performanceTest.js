var generateArray = require('./util.js');
var cubes = require('./arrayTraversingFunctions.js');

var array = generateArray(100000);

var getTime = function() {
    return new Date().getTime();
};

var countAverageTime = function(iterations, array, worker) {
    var startTime = 0;
    var endTime = 0;
    var sum = 0;

    for(var i = 0; i < iterations; ++i) {
        startTime = getTime();
        worker(array);
        endTime = getTime();

        sum += endTime - startTime;
    }

    return sum;
};

var iterations = 1000;

var funcs = Object.keys(cubes);

funcs.forEach(function(funcName) {
    var time = countAverageTime(iterations, array, cubes[funcName]);
    console.log('avg ' + funcName + ' time = ' + time/iterations);
});

