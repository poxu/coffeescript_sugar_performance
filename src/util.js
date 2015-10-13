var generateArray = (function() {
    'use strict';
    return function(length) {
        var result = Array(length);

       return result.map(function(val) {
           return Math.floor(Math.random() * 600) + 1;
       });
        
    };

}());

if (typeof module !== 'undefined') {
    module.exports = generateArray;
}

