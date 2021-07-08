
var seed = Math.floor( Math.random() * 10000 );

document.getElementById("DisplaySeed").innerHTML=String(seed);

var primeList=[1,7,11,13,17,19,23,29];

var orderInit=seed%30;
var orderPeriod=(Math.floor(seed/30))%8;
var orderAB=(Math.floor(seed/30/8))%2;

let order=[]

for(let i=0;i<30;i++){
	order.push( (primeList[orderPeriod]*i+orderInit)%30+1 );
}//endfor i


var X0A = Math.floor( 100*((orderAB)%2+1) + order[0] );
var X0B = Math.floor( 100*((orderAB+1)%2+1) + order[0] );
var X1A = Math.floor( 100*((orderAB)%2+1) + order[1] );
var X1B = Math.floor( 100*((orderAB+1)%2+1) + order[1] );
var X2A = Math.floor( 100*((orderAB)%2+1) + order[2] );
var X2B = Math.floor( 100*((orderAB+1)%2+1) + order[2] );
var X3A = Math.floor( 100*((orderAB)%2+1) + order[3] );
var X3B = Math.floor( 100*((orderAB+1)%2+1) + order[3] );
var X4A = Math.floor( 100*((orderAB)%2+1) + order[4] );
var X4B = Math.floor( 100*((orderAB+1)%2+1) + order[4] );
var X5A = Math.floor( 100*((orderAB)%2+1) + order[5] );
var X5B = Math.floor( 100*((orderAB+1)%2+1) + order[5] );
var X6A = Math.floor( 100*((orderAB)%2+1) + order[6] );
var X6B = Math.floor( 100*((orderAB+1)%2+1) + order[6] );
var X7A = Math.floor( 100*((orderAB)%2+1) + order[7] );
var X7B = Math.floor( 100*((orderAB+1)%2+1) + order[7] );
// 
// var str=' 1A '+String(n1A)+' 1B '+String(n1B)+' 2A '+String(n2A)+' 2B '+String(n2B);

document.getElementById("Audio1A").src='https://creevo-music.com/api/static/project_'+String(X0A)+'_instr.mp3';
document.getElementById("Audio1B").src='https://creevo-music.com/api/static/project_'+String(X0B)+'_instr.mp3';
document.getElementById("Audio2A").src='https://creevo-music.com/api/static/project_'+String(X1A)+'_instr.mp3';
document.getElementById("Audio2B").src='https://creevo-music.com/api/static/project_'+String(X1B)+'_instr.mp3';
document.getElementById("Audio3A").src='https://creevo-music.com/api/static/project_'+String(X2A)+'_instr.mp3';
document.getElementById("Audio3B").src='https://creevo-music.com/api/static/project_'+String(X2B)+'_instr.mp3';
document.getElementById("Audio4A").src='https://creevo-music.com/api/static/project_'+String(X3A)+'_instr.mp3';
document.getElementById("Audio4B").src='https://creevo-music.com/api/static/project_'+String(X3B)+'_instr.mp3';
document.getElementById("Audio5A").src='https://creevo-music.com/api/static/project_'+String(X4A)+'_instr.mp3';
document.getElementById("Audio5B").src='https://creevo-music.com/api/static/project_'+String(X4B)+'_instr.mp3';
document.getElementById("Audio6A").src='https://creevo-music.com/api/static/project_'+String(X5A)+'_instr.mp3';
document.getElementById("Audio6B").src='https://creevo-music.com/api/static/project_'+String(X5B)+'_instr.mp3';
document.getElementById("Audio7A").src='https://creevo-music.com/api/static/project_'+String(X6A)+'_instr.mp3';
document.getElementById("Audio7B").src='https://creevo-music.com/api/static/project_'+String(X6B)+'_instr.mp3';
document.getElementById("Audio8A").src='https://creevo-music.com/api/static/project_'+String(X7A)+'_instr.mp3';
document.getElementById("Audio8B").src='https://creevo-music.com/api/static/project_'+String(X7B)+'_instr.mp3';

// document.getElementById("Test").innerHTML=str;




