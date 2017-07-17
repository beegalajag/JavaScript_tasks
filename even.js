function filter(array,test){

	/*for(var i=0;i<array.length; i++){

	}
*/
var passed =[];
  for (var i = 0; i< array.length; i++)
  {
    if(test(array[i]))
         passed.push(array[i]);
  }
  return passed;

}
var numbers = [1,2,3,4,5,6,7,8,9];
/*function even(n){
	var numbers= [];
	if(n!= 0)
	{
		console.log("how many numbers u wnna print");
		for(var i=0;i<n; i++){
			
			numbers.push[i];
		}
	}
	return numbers;
}*/
console.log("even numbers are " +    filter(numbers, function(i){
	if( i%2 === 0)
		return i;


} ));
console.log( " Odd numbers are "+filter(numbers, function(i){
	if( i%2 != 0)
		return i;
}));