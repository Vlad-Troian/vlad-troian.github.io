


window.onscroll = function() {
    var menu = document.getElementsByClassName('menu')[0] ;
    var statBg1  = document.getElementsByClassName('statBg ')[0] ;
    var statBg2  = document.getElementsByClassName('statBg ')[1] ;
    var moveTop1 = document.getElementsByClassName('moveTop')[0] ;
    var moveTop2 = document.getElementsByClassName('moveTop')[1] ;
    var btn = document.getElementsByClassName('icon-btnToTop')[0] ;
    var scrolled = window.scrollY;
    var scroll04 = window.scrollY*0.6;
    var h = document.documentElement.clientHeight;

    if ( scrolled > h  ) {
        menu.classList.add('fix');
        btn.classList.remove('hide');


    } else if  ( scrolled == h ) {
        menu.classList.remove('fix');
        btn.classList.add('hide');
        btn.style.display="none";
    }
     else {
        menu.classList.remove('fix');
        btn.classList.add('hide');

    }

    console.log(scrolled);
    moveTop1.style.transform = 'translateY('+scroll04+'px)';
    moveTop2.style.transform = 'translateY(-'+scroll04+'px)';
    statBg1.style.transform = 'translateY('+scrolled*0.03+'px) ' ;
    statBg2.style.transform = 'translateY('+scrolled*0.03+'px)  scale(-1, 1)';


};

console.log();

function scrollTo0() {
    var h = document.documentElement.clientHeight;
    var scrolled = window.scrollY;
    if (scrolled > 0 ) {
        window.scrollBy(0,((scrolled +100)/-20));
    t = setTimeout('scrollTo0()',15);
    } else clearTimeout(t);
}

