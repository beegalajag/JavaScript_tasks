var numbers = [1,2,3,4,5,,6,7,7,8];
var num = [1,1,1,1];
/*var number = [0,9,9,8,7,7,6,5];*/
console.log(union(numbers, num));
function union(a,b){
	var num ={};
	for (var i = 0; i < a.length; i++) 

			num[a[i]] == a[i];
	for (var j = 0; j < b.length; j++) 
		num[b[i]] == b[i];
	var res = [];
	for( var k in num)
	{
		if (num.hasOwnProperty(k))  
      res.push(num[k]);
	}
	
return res;
		
	
}