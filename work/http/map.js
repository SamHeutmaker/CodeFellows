var map = function(collection, callback) {

	if(Array.isArray(collection)) {

		var toReturn = []; 

		for(var i = 0; i < collection.length; i++){
			var toPush = callback(collection[i], i, collection);
			toReturn.push(toPush);
		}

		return toReturn;

	} else if(typeof collection === "object"){
		toReturn = {}; 
		for(i in collection){
			var toAdd = callback(collection[i], i, collection);
			toReturn[i] = toAdd;
		}

		return toReturn;
		
	} else {
		return 'That is not a collection';
	}	
};


var toMap = [1,2,3,4,5];

var newMap = map(toMap, function(el, i, collection) {
	return el + 1;
});

console.log(toMap);

