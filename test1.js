
var seed = Math.floor( Math.random() * 10000 );

document.getElementById("DisplaySeed").innerHTML=String(seed);

var primeList=[1,7,11,13,17,19,23,29];

var orderInit=seed%30;
var orderPeriod=(Math.floor(seed/30))%8;
var orderAB=(Math.floor(seed/30/8))%2;

//console.log(seed,orderInit,orderPeriod,orderAB);

let order=[]

for(let i=0;i<30;i++){
	order.push( (primeList[orderPeriod]*i+orderInit)%30+1 );
}//endfor i


var X1A = 'Z'+String(order[0])+((orderAB==0)? 'A':'B');
var X1B = 'Z'+String(order[0])+((orderAB==1)? 'A':'B');
var X2A = 'Z'+String(order[1])+((orderAB==0)? 'A':'B');
var X2B = 'Z'+String(order[1])+((orderAB==1)? 'A':'B');
var X3A = 'Z'+String(order[2])+((orderAB==0)? 'A':'B');
var X3B = 'Z'+String(order[2])+((orderAB==1)? 'A':'B');
var X4A = 'Z'+String(order[3])+((orderAB==0)? 'A':'B');
var X4B = 'Z'+String(order[3])+((orderAB==1)? 'A':'B');
var X5A = 'Z'+String(order[4])+((orderAB==0)? 'A':'B');
var X5B = 'Z'+String(order[4])+((orderAB==1)? 'A':'B');
var X6A = 'Z'+String(order[5])+((orderAB==0)? 'A':'B');
var X6B = 'Z'+String(order[5])+((orderAB==1)? 'A':'B');
var X7A = 'Z'+String(order[6])+((orderAB==0)? 'A':'B');
var X7B = 'Z'+String(order[6])+((orderAB==1)? 'A':'B');
var X8A = 'Z'+String(order[7])+((orderAB==0)? 'A':'B');
var X8B = 'Z'+String(order[7])+((orderAB==1)? 'A':'B');

//console.log(X0A,X0B,X1A,X1B);


// var str=' 1A '+String(n1A)+' 1B '+String(n1B)+' 2A '+String(n2A)+' 2B '+String(n2B);

// document.getElementById("Audio1A").src='https://creevo-music.com/api/static/project_'+String(X0A)+'_instr.mp3';
// document.getElementById("Audio1B").src='https://creevo-music.com/api/static/project_'+String(X0B)+'_instr.mp3';
// document.getElementById("Audio2A").src='https://creevo-music.com/api/static/project_'+String(X1A)+'_instr.mp3';
// document.getElementById("Audio2B").src='https://creevo-music.com/api/static/project_'+String(X1B)+'_instr.mp3';
// document.getElementById("Audio3A").src='https://creevo-music.com/api/static/project_'+String(X2A)+'_instr.mp3';
// document.getElementById("Audio3B").src='https://creevo-music.com/api/static/project_'+String(X2B)+'_instr.mp3';
// document.getElementById("Audio4A").src='https://creevo-music.com/api/static/project_'+String(X3A)+'_instr.mp3';
// document.getElementById("Audio4B").src='https://creevo-music.com/api/static/project_'+String(X3B)+'_instr.mp3';
// document.getElementById("Audio5A").src='https://creevo-music.com/api/static/project_'+String(X4A)+'_instr.mp3';
// document.getElementById("Audio5B").src='https://creevo-music.com/api/static/project_'+String(X4B)+'_instr.mp3';
// document.getElementById("Audio6A").src='https://creevo-music.com/api/static/project_'+String(X5A)+'_instr.mp3';
// document.getElementById("Audio6B").src='https://creevo-music.com/api/static/project_'+String(X5B)+'_instr.mp3';
// document.getElementById("Audio7A").src='https://creevo-music.com/api/static/project_'+String(X6A)+'_instr.mp3';
// document.getElementById("Audio7B").src='https://creevo-music.com/api/static/project_'+String(X6B)+'_instr.mp3';
// document.getElementById("Audio8A").src='https://creevo-music.com/api/static/project_'+String(X7A)+'_instr.mp3';
// document.getElementById("Audio8B").src='https://creevo-music.com/api/static/project_'+String(X7B)+'_instr.mp3';

document.getElementById("Audio1A").src='Data/mp3/'+String(X1A)+'.mp3';
document.getElementById("Audio1B").src='Data/mp3/'+String(X1B)+'.mp3';
document.getElementById("Audio2A").src='Data/mp3/'+String(X2A)+'.mp3';
document.getElementById("Audio2B").src='Data/mp3/'+String(X2B)+'.mp3';
document.getElementById("Audio3A").src='Data/mp3/'+String(X3A)+'.mp3';
document.getElementById("Audio3B").src='Data/mp3/'+String(X3B)+'.mp3';
document.getElementById("Audio4A").src='Data/mp3/'+String(X4A)+'.mp3';
document.getElementById("Audio4B").src='Data/mp3/'+String(X4B)+'.mp3';
document.getElementById("Audio5A").src='Data/mp3/'+String(X5A)+'.mp3';
document.getElementById("Audio5B").src='Data/mp3/'+String(X5B)+'.mp3';
document.getElementById("Audio6A").src='Data/mp3/'+String(X6A)+'.mp3';
document.getElementById("Audio6B").src='Data/mp3/'+String(X6B)+'.mp3';
document.getElementById("Audio7A").src='Data/mp3/'+String(X7A)+'.mp3';
document.getElementById("Audio7B").src='Data/mp3/'+String(X7B)+'.mp3';
document.getElementById("Audio8A").src='Data/mp3/'+String(X8A)+'.mp3';
document.getElementById("Audio8B").src='Data/mp3/'+String(X8B)+'.mp3';

// document.getElementById("Test").innerHTML=str;




