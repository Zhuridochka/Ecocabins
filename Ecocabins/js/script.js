const swiper = new Swiper('.materials__slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

/*-------Header-------------*/

window.addEventListener('scroll', function() {
  let header = document.getElementById('myHeader');
  let scrollPosition = window.scrollY;

  if(scrollPosition > 80) {
    header.classList.add('header-background');
  } else {
    header.classList.remove('header-background');
  }
});