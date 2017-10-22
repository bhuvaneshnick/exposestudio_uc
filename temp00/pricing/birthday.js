
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//
var pr_menu= document.getElementsByClassName('pr_menu');

var pr_menudrop=document.getElementsByClassName('pr_l1choose');
var men_switch=0;
function pr_showmenu(){
  men_switch=!men_switch;
  if(men_switch==1){  pr_menu[0].style.display='flex';

                   }
    
    if(men_switch==0){  pr_menu[0].style.display='none';

                     }
}


pr_menudrop[0].addEventListener('click',pr_showmenu,false);


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
