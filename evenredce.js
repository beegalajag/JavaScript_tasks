var numbers = [1,2,3,4,5,6,7,8,9];
function reduce(array, combine) {
  var current = [];
  for (var i = 0; i < array.length; i++)
    if(combine(array[i]))
    	current.push(array[i]);
    

  return current;
}
console.log(reduce(numbers, function(i){
	if(i%2 === 0)
		return i;
}));