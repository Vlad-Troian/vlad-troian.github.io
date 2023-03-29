
 window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem = document.querySelector(".scrollblock");
  var elem0 = document.querySelector(".scrollblockjs2");
  var elem1 = document.querySelector(".ido");
  var elem2 = document.querySelector(".works");
  var elem3 = document.querySelector(".about") ;
  var head = document.querySelector(".header"); 
  var h = head.clientHeight; 
  var menu = document.getElementById('menu')

  if (  scrolled > 0*h & scrolled < 0.6*h  ){
  	 elem.classList.add("bg-for-scrollblock");} 
  	 else if (scrolled > 0.6*h ){
  		 elem.classList.remove("bg-for-scrollblock");
  	}
    else {

    } ;

  if ( scrolled > 0.6*h  & scrolled < 1.5*h ){
  	 elem0.classList.add("bg-for-scrollblock");
  		} else if ( scrolled >= 1400 ){
  			 elem0.classList.remove("bg-for-scrollblock");
  		} 
		  	else  {
		  		 elem0.classList.remove("bg-for-scrollblock");
		  	} ;

  if (  scrolled > 0.3*h  ){
     elem1.style.marginTop = "0";
     elem1.style.transitionDuration = "1.3s";
     elem1.style.opacity = "1";} 
     else {
    };

  if (  scrolled > 1100  ){
     elem2.style.marginTop = "0";
     elem2.style.transitionDuration = "1.3s";
     elem2.style.opacity = "1";} 
     else {
    } ;

  if (  scrolled > 2300  ){
     elem3.style.marginTop = "0";
     elem3.style.transitionDuration = "1.3s";
     elem3.style.opacity = "1";} 
     else {
    } ;				  
};
	
