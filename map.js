var names = [
{ "firstname" : "jagadeesh" , "lastname": "beegala"  },
{ "firstname" : "vijay" , "lastname": "beegala"  },
{ "firstname" : "yamuna" , "lastname": "beegala"  },
{ "firstname" : "yuvraj" , "lastname": "beegala"  },
{ "firstname" : "mahesh" , "lastname": "beegala"  },


];




function map(array, combine)
{
  var mapped =[];
  for (var i = 0; i< array.length; i++)
  {

         mapped.push(combine(array[i]));
  }
  return mapped;

}
console.log(map(names , function(person)
{
	return [person.firstname , person.lastname].join(" ");
}));