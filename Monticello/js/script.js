$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      animateOut: "animate__bounceOutDown",
      animateIn: "animate__bounceInDown",
      responsive: {
         0: {
            dots: false
         },
         1200: {
            dots: true
         }
      }
   });
   $(".owl-carousel_second").owlCarousel({
      margin: 50,
      items: 3,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      navText: ['<', '>'],
      dotsEach: true,
      responsive: {
         0: {
            items: 1,
            nav: false
         },
         900: {
            items: 2,
            nav: false
         },
         1200: {
            nav: true,
            items: 3
         }
      }
   });
});

var map = L.map('map', {
   center: [49.57729290864656, 34.514984880615984],
   zoom: 13
});

var customIcon = L.icon({
   iconUrl: 'marker.png',
   iconSize: [38, 40],
   iconAnchor: [19, 40]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

L.marker(
   [49.57729290864656, 34.514984880615984],
   { icon: customIcon })
   .addTo(map)



$('.nav__link').on('click', function (e) {
   e.preventDefault
   let id_section = $(this).attr('href')
   // let pos = $(id_section).scrollTop()
   let pos = $(id_section).offset().top + 30
   $('body, html').animate({
      scrollTop: pos
   }, 1000)
})

const header = document.getElementById('header')
const nav = document.getElementById('header__nav')
const projects = document.getElementById('projects')
const news = document.getElementById('news')
const contacts = document.getElementById('contacts')
const maps = document.getElementById('map')



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




window.addEventListener('scroll', function () {
   let scrollHeight = window.scrollY;
   if (scrollHeight > 750) {
      document.getElementById('scroll_up').classList.add('dispay_block')
   }
   if (scrollHeight < 750) {
      document.getElementById('scroll_up').classList.remove('dispay_block')
   }
   if (scrollHeight > 0) {
      document.getElementById('aboutus__circle').classList.add('white')
   }
   if (scrollHeight > projects.offsetTop) {
      document.getElementById('aboutus__circle').classList.remove('white')
   }
   if (scrollHeight > projects.offsetTop && scrollHeight < news.offsetTop) {
      document.getElementById('projects__circle').classList.add('white')
   }
   if (scrollHeight < projects.offsetTop || scrollHeight > news.offsetTop) {
      document.getElementById('projects__circle').classList.remove('white')
   }
   if (scrollHeight > news.offsetTop && scrollHeight < maps.offsetTop) {
      document.getElementById('news__circle').classList.add('white')
   }
   if (scrollHeight < news.offsetTop || scrollHeight > maps.offsetTop - 50) {
      document.getElementById('news__circle').classList.remove('white')
   }
   if (scrollHeight > maps.offsetTop - 20) {
      document.getElementById('contacts__circle').classList.add('white')
   }
   if (scrollHeight < maps.offsetTop - 20) {
      document.getElementById('contacts__circle').classList.remove('white')
   }

})

let select = document.getElementById('gallery_select')
let img1 = document.querySelector('.gallery__img1')
let img2 = document.querySelector('.gallery__img2')
let img3 = document.querySelector('.gallery__img3')
let img4 = document.querySelector('.gallery__img4')
let img5 = document.querySelector('.gallery__img5')

select.addEventListener('change', function () {
   let s_value = select.value
   if (s_value === 'NY') {
      img1.innerHTML = '<img src="./images/gallery_newyork1.jpg" alt="city">'
      img2.innerHTML = '<img src="./images/gallery_newyork2.jpg" alt="city">'
      img3.innerHTML = '<img src="./images/gallery_newyork3.jpg" alt="city">'
      img4.innerHTML = '<img src="./images/gallery_newyork4.jpg" alt="city">'
      img5.innerHTML = '<img src="./images/gallery_newyork5.jpg" alt="city">'
   }
   if (s_value === 'LON') {
      img1.innerHTML = '<img src="./images/gallery_london1.jpg" alt="city">'
      img2.innerHTML = '<img src="./images/gallery_london2.jpg" alt="city">'
      img3.innerHTML = '<img src="./images/gallery_london3.jpg" alt="city">'
      img4.innerHTML = '<img src="./images/gallery_london4.jpg" alt="city">'
      img5.innerHTML = '<img src="./images/gallery_london5.jpg" alt="city">'
   }
   if (s_value === 'MDR') {
      img1.innerHTML = '<img src="./images/gallery_madrid1.jpg" alt="city">'
      img2.innerHTML = '<img src="./images/gallery_madrid2.jpg" alt="city">'
      img3.innerHTML = '<img src="./images/gallery_madrid3.jpg" alt="city">'
      img4.innerHTML = '<img src="./images/gallery_madrid4.jpg" alt="city">'
      img5.innerHTML = '<img src="./images/gallery_madrid5.jpg" alt="city">'
   }
   console.log(s_value)
})


document.getElementById('burger__menu').addEventListener('click', function () {
   nav.classList.toggle('display_block')
})


