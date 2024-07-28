var size = 8;
for(let i=0; i< size; i++){
	let line = "";
	for(let j=0; j< size; j++){
		let total = i+j;
		if(total % 2 === 0)
			line += '#';
		else 
			line += ' ';
	}
	console.log(line);
}
