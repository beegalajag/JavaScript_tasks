var arrays = [[1,2,3],[4,5],[6,7]];
console.log(arrays.reduce(function(a , b){
	return a.concat(b);
}));