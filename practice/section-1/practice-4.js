'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = [];
	for (var i = 0 ; i < collectionA.length; i++){
	if (collectionB.value.indexOf(collectionA[i].key) > -1){
		arr.push(collectionA[i].key);
	}
	}
  return arr;
}
 const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};
  collectSameElements(collectionA, objectB);