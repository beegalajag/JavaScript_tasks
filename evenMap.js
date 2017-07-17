function map(array, combine)
{
  var mapped =[];
  for (var i = 0; i< array.length; i++)
  {

         mapped.push(combine(array[i]));
  }
  return mapped;

}
var numbers = [1,2,3,4,5,6,7,8,9];

console.log(" Even numbers are "+map(numbers, function(i){
	if( i%2 === 0)
		return i;


}));
console.log( " Odd numbers are "+ map(numbers, function(i){
	if( i%2 != 0)
		return i;
}));
