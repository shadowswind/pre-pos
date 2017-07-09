'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = [];
	for (var i = 0 ; i < collectionA.length; i++){
	if (collectionB.value.indexOf(collectionA[i]) > -1){
		arr.push(collectionA[i]);
	}
	}
  return arr;
}
  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = {value: ['a', 'd', 'e', 'f']};
  collectSameElements(collectionA, objectB);