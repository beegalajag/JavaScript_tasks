var numbers = [1,2,3,4,5,6,7,8,9];
console.log(contains(numbers, 4 , 0)); 
	function contains(array,num,start){
		console.log(start);
		for (var i = start; i <array.length; i++) {
			if(num == array[i])
				return true;
		}
		return false;
	}