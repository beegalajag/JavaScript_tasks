function range( start, end) {
	var array = [] ;
	for(var i= start; i<=end ;i++){
		array.push(i);
		
}
return array;
}

function sum(array){
		sum=0;
		for(var i=1;i<=array.length; i++){
			sum +=i;
		}
	  	return sum;
	  	}
console.log(sum(range(1,20)));