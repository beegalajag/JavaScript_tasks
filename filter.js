var products =[
{"name": "shirts" , "price":"200"   },
{"name": "shirts" , "price":"400"   },
{"name": "shirts" , "price":"500"   },
{"name": "shirts" , "price":"2300"   },
{"name": "shirts" , "price":"300"   },
{"name": "shirts" , "price":"7800"   },
{"name": "shirts" , "price":"700"   },
{"name": "shirts" , "price":"7200"   },


];


function filter(array, test)
{
  var passed =[];
  for (var i = 0; i< array.length; i++)
  {
    if(test(array[i]))
         passed.push(array[i]);
  }
  return passed;

}
console.log(filter(products, function(rate)
{
  return (rate.price >=200 && rate.price <1000);
}));