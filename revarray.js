function revArray(array){
	var rev= [];
	for (var i = array.length - 1; i >= 0; i--) {
			rev.push(array[i]);
		}
		return rev;
}
console.log(revArray([1,3,5,8,6]));		



var arrayValue = [1, 2, 3, 4, 5];


console.log(revArray(arrayValue));