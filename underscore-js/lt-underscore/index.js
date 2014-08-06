// COLLECTION FUNCTIONS

// Map
// _.map(list, iterator, [context])
var mapFunction = _.map([1, 2, 3], function(num){ return num * 3; });


// Each
// _.each(list, iterator, [context]) 
var ary = []
var eachFunction = _.each(["red", "blue", "green"], function(color) { ary.push(color + "!")} );
// var each_function2 = _.each([1, 2, 3], alert);


// Reduce
// _.reduce(list, iterator, memo, [context]) 
var sum = _.reduce([1, 2, 3], function(initial, num){ return initial + num; }, 0);	


// Filter AKA Select
// _.filter(list, predicate, [context]) 
var someNums = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num < 5; });











// ARRAY FUNCTIONS

// First
// _.first(array, [n])
var firstCohorts = _.first(["Newts", "Woodchucks", "Caterpillars","Cicadas"], 2);


// difference
//_.difference(array, *others) 
var ary2 = [1, 2, 3, 4, 5]
var ary3 = [5, 2, 10]
var findDifferences = _.difference(ary2,ary3 );




// FUNCTION FUNCTIONS (kind of like procs & lambdas in ruby)

// compose
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows.
// _.compose(*functions) 
var hello = function(name){ return "hi: " + name; };
var yell  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(hello, yell);
// welcome('Newts');










// OBJECT FUNCTIONS

// keys
// keys_.keys(object) 
var getKeys = _.keys({one: 1, two: 2, three: 3});


// isString
// _.isString(object) 
var checkString = _.isString("DBC");
var checkString2 = _.isString(2);










// UTILITY FUNCTIONS

// random
// _.random(min, max) 
var randNum = _.random(0, 100);

