let menu=document.querySelector('#menu')
let nav=document.querySelector('.nav')

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');

}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav a')

// window.onscroll=()=>{
//     menu.classList.remove('fa-times');
//     nav.classList.remove('active');

//     section.forEach(sec =>{

//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id=sec.getAttribute('id');

//         if(top => offset && top < offset + height){
//             navLinks.forEach(link =>{
//                 link.classList.remove('active');
//                 document.querySelector('header .nav a[href*='+id+']').classList.add('active');
//             });
//         };
//     });
    
// }

document.querySelector('#search').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            sliderPerView: 1,
        },
        640: {
            sliderPerView:2,
        },
        768: {
            sliderPerView: 2,
        },
        1024: {
            sliderPerView: 3,
        },
    },
});


// window.addEventListener("load", function() {
//     const loader = document.querySelector(".loader-container");
//     loader.style.display = "flex";
  
    
//     setTimeout(function() {
//       loader.style.display = "none";
//     }, 3000);
//   });
  