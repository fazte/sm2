let city = prompt('наименование города');
let year = prompt('Какой год');
let born = prompt('год когда был основан город');
let pop = prompt('кол-во населения');

let year2 = Number(year);
let born2 = Number(born);

alert ('Городу'+ ' '  + city + ' ' + 'исполнилось'+ ' ' + (year2 - born2) + ' ' +' лет с момента его образования. Население - '+ ' ' + pop + ' ' +' человек')
alert ('https://github.com/fazte/sm2');