let city = prompt('наименование города');
let year = prompt('Какой год');
if(year != 2023){
	alert ('Подсказка, сейчас 2023 год, давай по новой')
	location.reload();
}else{
	let born = prompt('год когда был основан город');
	if(born >=2020){
		alert ('Не верю, давай по новой')
		location.reload();
	}else{
	let pop = prompt('кол-во населения');
		if(isNaN(pop)){
			alert('Надо число, давай по новой');
			location.reload();
		}else{
			alert ('Городу'+ ' '  + city + ' ' + 'исполнилось'+ ' ' + (year - born) + ' ' +' лет с момента его образования. Население - '+ ' ' + pop + ' ' +' человек')
			alert ('https://github.com/fazte/sm2');
		}
	
	}
	
}
