//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

var vbi_m=document.getElementsByClassName('bi_m');

var vbi_d=document.getElementsByClassName('bi_d');
var vbi_over=document.getElementsByClassName('bi_over');
var vbi_close=document.getElementsByClassName('bi_close');

function bi_fun(n,q){
    if(q==0){
  
    vbi_over[0].style.display='flex'; 
    vbi_d[n].className='ex bi_d';
}
    if(q==1){
          vbi_over[0].style.display='flex'; 
    vbi_d[n].className='ex_p bi_d';
    }
}

function bi_hide(){
    vbi_over[0].style.display='none'; 
    vbi_d[0].className='ptp bi_d';
     vbi_d[1].className='ptl bi_d';
     vbi_d[2].className='ptl bi_d';
     vbi_d[3].className='ptl bi_d';
     vbi_d[4].className='ptl bi_d';
     vbi_d[5].className='ptp bi_d';
       vbi_d[6].className='ptl bi_d';
     vbi_d[7].className='ptl bi_d';
     vbi_d[8].className='ptp bi_d';
     vbi_d[9].className='ptp bi_d';
     vbi_d[10].className='ptl bi_d';
     vbi_d[11].className='ptl bi_d';
       vbi_d[12].className='ptl bi_d';
     vbi_d[13].className='ptl bi_d';
     vbi_d[14].className='ptp bi_d';
     vbi_d[15].className='ptl bi_d';
     vbi_d[16].className='ptl bi_d';
     vbi_d[17].className='ptp bi_d';

    
    
}

vbi_close[0].addEventListener('click',function(){bi_hide();}, false);
vbi_m[0].addEventListener('click',function(){bi_fun(0,1);}, false);
vbi_m[1].addEventListener('click',function(){bi_fun(1,0);}, false);
vbi_m[2].addEventListener('click',function(){bi_fun(2,0);}, false);
vbi_m[3].addEventListener('click',function(){bi_fun(3,0);}, false);
vbi_m[4].addEventListener('click',function(){bi_fun(4,0);}, false);
vbi_m[5].addEventListener('click',function(){bi_fun(5,1);}, false);
vbi_m[6].addEventListener('click',function(){bi_fun(6,0);}, false);
vbi_m[7].addEventListener('click',function(){bi_fun(7,0);}, false);
vbi_m[8].addEventListener('click',function(){bi_fun(8,1);}, false);
vbi_m[9].addEventListener('click',function(){bi_fun(9,1);}, false);
vbi_m[10].addEventListener('click',function(){bi_fun(10,0);}, false);
vbi_m[11].addEventListener('click',function(){bi_fun(11,0);}, false);
vbi_m[12].addEventListener('click',function(){bi_fun(12,0);}, false);
vbi_m[13].addEventListener('click',function(){bi_fun(13,0);}, false);
vbi_m[14].addEventListener('click',function(){bi_fun(14,1);}, false);
vbi_m[15].addEventListener('click',function(){bi_fun(15,0);}, false);
vbi_m[16].addEventListener('click',function(){bi_fun(16,0);}, false);
vbi_m[17].addEventListener('click',function(){bi_fun(17,1);}, false);


