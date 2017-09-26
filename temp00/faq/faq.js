var fdown;
for(y=0; y<3;y++){
var fdown= [document.getElementsByClassName('down')[y]];
var fquest1= [document.getElementsByClassName('quest1')[y]];
var fans1box= [document.getElementsByClassName('ans1box')[y]];}

var f0down= document.getElementsByClassName('down')[0];
var f0quest1= document.getElementsByClassName('quest1')[0];
var f0ans1box= document.getElementsByClassName('ans1box')[0];

var f1down= document.getElementsByClassName('down')[1];
var f1quest1= document.getElementsByClassName('quest1')[1];
var f1ans1box= document.getElementsByClassName('ans1box')[1];

var f2down= document.getElementsByClassName('down')[2];
var f2quest1= document.getElementsByClassName('quest1')[2];
var f2ans1box= document.getElementsByClassName('ans1box')[2];

var f3down= document.getElementsByClassName('down')[3];
var f3quest1= document.getElementsByClassName('quest1')[3];
var f3ans1box= document.getElementsByClassName('ans1box')[3];


var fswitch= true;
function down1(){
if(fswitch==true){
f0down.className='down jdown';
f0quest1.className='quest1 jquest1';
f0ans1box.className='ans1box jans1box';
}

if(fswitch==false){
f0down.className='down';
f0quest1.className='quest1';
f0ans1box.className='ans1box';

}
fswitch=!fswitch;
}

function down2(){
if(fswitch==true){
f1down.className='down jdown';
f1quest1.className='quest1 jquest1';
f1ans1box.className='ans1box jans1box';
}

if(fswitch==false){
f1down.className='down';
f1quest1.className='quest1';
f1ans1box.className='ans1box';

}
fswitch=!fswitch;
}


function down3(){
if(fswitch==true){
f2down.className='down jdown';
f2quest1.className='quest1 jquest1';
f2ans1box.className='ans1box jans1box';
}

if(fswitch==false){
f2down.className='down';
f2quest1.className='quest1';
f2ans1box.className='ans1box';

}
fswitch=!fswitch;
}


function down4(){
if(fswitch==true){
f3down.className='down jdown';
f3quest1.className='quest1 jquest1';
f3ans1box.className='ans1box jans1box';
}

if(fswitch==false){
f3down.className='down';
f3quest1.className='quest1';
f3ans1box.className='ans1box';

}
fswitch=!fswitch;
}


f0down.addEventListener('click', down1, false);
f1down.addEventListener('click', down2, false);
f2down.addEventListener('click', down3, false);
f3down.addEventListener('click', down4, false);