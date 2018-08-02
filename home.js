/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//
/*var hsindex=1;
select(hsindex);
var right=document.getElementById('next');
var left=document.getElementById('prev');
var htitle=document.getElementsByClassName('image');

function incri(n){
    
    hsindex=hsindex+n;
 select(hsindex);
}


right.addEventListener('click', function(){incri(+1);}, false);
left.addEventListener('click', function(){incri(-1);}, false);

function select(hsindex){
var slide=document.getElementsByClassName('homem');
    
for(i=0; i<slide.length;i++)
    {slide[i].style.display='none';}
 if((hsindex<11)&(hsindex>0)){
    slide[hsindex-1].style.display='block';
}
 
 if(hsindex>10){
    incri(-10);}
    if(hsindex<1){
    incri(10);}
    
}
*/
/* END: hl1 slide*/
/* START: hl4 slide*/
/*var hs4index=1;
selectl4(hs4index);
var l4right=document.getElementById('hl4next');
var l4left=document.getElementById('hl4prev');

function l4incri(n){
    
    hs4index=hs4index+n;
 selectl4(hs4index);
}


l4right.addEventListener('click', function(){l4incri(+1);}, false);
l4left.addEventListener('click', function(){l4incri(-1);}, false);

function selectl4(hs4index){
var slidel4=document.getElementsByClassName('hl4slide');
    
for(s=0; s<slidel4.length;s++)
    {slidel4[s].style.display='none';}
 if((hs4index<5)&(hs4index>0)){
    slidel4[hs4index-1].style.display='block';
}
 
 if(hs4index>4){
    l4incri(-4);}
    if(hs4index<1){
    l4incri(4);}
}*/

/* END: hl4 slide*/



/* START: hterm and condition*/
var hopen=document.getElementById('hopen');
var hterms=document.getElementsByClassName('hterms');
var hclose=document.getElementsByClassName('hclose');


function hfopen(){
    
    hterms[0].style.display='block';
}
function hfclose(){
    
    hterms[0].style.display='none';
}

hopen.addEventListener('click',hfopen,false);
hclose[0].addEventListener('click',hfclose,false);

/* END: hterm and condition*/

