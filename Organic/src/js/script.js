$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      animateOut: "animate__bounceOutDown",
      animateIn: "animate__bounceInDown",
   });
});



let app = new Vue({
   el: '#vue',
   data: {
      products: [
         {
            id: 123,
            title: 'Arvum',
            subtitle: 'Gran Reserva Vinegar, 200ml',
            price: '24.99€',
            image: 'products1.png'
         },
         {
            id: 234,
            title: 'José Andrés',
            subtitle: 'Extra Virgin Olive, 500ml',
            price: '44.89€',
            image: 'products2.png'
         },
         {
            id: 345,
            title: 'Ego Sum',
            subtitle: 'Extra Virgin Olive Oil, 500ml',
            price: '20.00€',
            image: 'products3.png'
         },
         {
            id: 456,
            title: 'José Andrés',
            subtitle: 'Extra Virgin Olive Oil, 500ml',
            price: '29.99€',
            image: 'products4.png'
         }
      ],
      items: [
         {
            title: '5 reasons to love organic',
            date: '8 SEP 2020',
            content: 'There are many reasons to love organic food and farming. We take a look at why organic is good for you and your family.',
            image: 'blog1.png'
         },
         {
            title: 'You’re the Apple for My Pie',
            date: '6 SEP 2020',
            content: 'This year, we plan to bake a home-made apple pie, but we need the main ingredient: apples, of course!',
            image: 'blog2.png'
         },
         {
            title: 'Best Christmas food gifts for 2020',
            date: '4 SEP 2020',
            content: 'From quick bites to comforting teas, Christmas is the right time of the year to spoil your loved ones with food gifts.',
            image: 'blog3.png'
         }
      ],
      login_form: false,
   },

   methods: {
      loginFormOpen() {
         this.login_form = true
      },
      loginFormClose() {
         this.login_form = false
      }
   }
})

////////// header nav////////////
$('.nav__link').on('click', function (e) {
   e.preventDefault
   let id_section = $(this).attr('href')
   // let pos = $(id_section).scrollTop()
   let pos = $(id_section).offset().top
   $('body, html').animate({
      scrollTop: pos
   }, 1000)
})


let ourshop = document.getElementById('our__shop')
let aboutus = document.getElementById('about__us')
let recipes = document.getElementById('recipes')
let blog = document.getElementById('blog')

window.addEventListener('scroll', function () {
   let scrollHeight = window.scrollY;

   if (scrollHeight > ourshop.offsetTop && scrollHeight < aboutus.offsetTop) {
      document.getElementById('nav__link_our_shop').classList.add('border_bot')
   }
   if (scrollHeight < ourshop.offsetTop || scrollHeight > aboutus.offsetTop) {
      document.getElementById('nav__link_our_shop').classList.remove('border_bot')
   }
   if (scrollHeight > aboutus.offsetTop && scrollHeight < recipes.offsetTop) {
      document.getElementById('nav__link_about_us').classList.add('border_bot')
   }
   if (scrollHeight < aboutus.offsetTop || scrollHeight > recipes.offsetTop) {
      document.getElementById('nav__link_about_us').classList.remove('border_bot')
   }
   if (scrollHeight > recipes.offsetTop && scrollHeight < blog.offsetTop) {
      document.getElementById('nav__link_recipes').classList.add('border_bot')
   }
   if (scrollHeight < recipes.offsetTop || scrollHeight > blog.offsetTop) {
      document.getElementById('nav__link_recipes').classList.remove('border_bot')
   }
   if (scrollHeight > blog.offsetTop) {
      document.getElementById('nav__link_blog').classList.add('border_bot')
   }
   if (scrollHeight < blog.offsetTop) {
      document.getElementById('nav__link_blog').classList.remove('border_bot')
   }
})


const nav = document.getElementById('header__nav')
window.addEventListener('scroll', function () {
   let oldScroll = this.oldScroll || 0
   let newScroll = this.scrollY
   if (newScroll > oldScroll) {
      nav.classList.remove('show')
      nav.classList.add('hidden')
   }
   else {
      nav.classList.remove('hidden')
      nav.classList.add('show')
   }
   this.oldScroll = newScroll;
})


///////// recipes///////////
let recipesContent = document.getElementById('recipes__content')
let recipesBtn1 = document.getElementById('recipes__btn_first')
let recipesBtn2 = document.getElementById('recipes__btn_second')
let recipesBtn3 = document.getElementById('recipes__btn_third')
recipesBtn1.addEventListener('click', function () {
   recipesContent.innerHTML = `<img src="./src/images/recipes11.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes12.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes13.jpg" alt="dishes" class="recipes__content_img">`
})
recipesBtn2.addEventListener('click', function () {
   recipesContent.innerHTML = `<img src="./src/images/recipes21.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes22.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes23.jpg" alt="dishes" class="recipes__content_img">`
})
recipesBtn3.addEventListener('click', function () {
   recipesContent.innerHTML = `<img src="./src/images/recipes31.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes32.jpg" alt="dishes" class="recipes__content_img">
                              <img src="./src/images/recipes33.jpg" alt="dishes" class="recipes__content_img">`
})


///////burger menu////////////////

function burgerMenu() {
   let menu = document.querySelector(".burger");
   let button = menu.querySelector(".burger__link");
   let links = menu.querySelectorAll(".burger__nav_link");
   let overlay = menu.querySelector(".burger__overlay");


   button.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
   });
   [].forEach.call(links, function (el) {
      el.addEventListener("click", () => toggleMenu());
   });
   overlay.addEventListener("click", () => toggleMenu());


   function toggleMenu() {
      menu.classList.toggle("burger__active");
      if (menu.classList.contains("burger__active")) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "visible";
      }
   }
}
burgerMenu();