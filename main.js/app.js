import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



// scroll tracker

const scrollTracker = document.querySelector('.scroll_tracker');

const animatedSections = document.querySelectorAll('.animated_section');

const scrollTrackingTimeline = new ScrollTimeline({

  source: document.scrollingElement,
  orientation: 'block',
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],

});





scrollTracker.animate(

  {
    transform: ['scaleX(0)', 'scaleX(1)'],
  },

  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);



const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');
const navList = document.querySelector('.navElement');

const navList10 = document.querySelector('.navElement10');



navList.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})

navList10.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})


openNavBtn.addEventListener('click', () => {
    navItems.classList.remove('nav_closed');
    navItems.style.display = 'flex';
    openNavBtn.style.setProperty('display', 'none', 'important');
    closeNavBtn.style.setProperty('display', 'inline-block', 'important');
})





const closeNav = () => {
    // navItems.style.display = 'none';
    navItems.classList.add('nav_closed');
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);











// SWIPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 45,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// Filter js

$(document).ready(function () {
  $('.filter-item').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.post_card').show('1000');
    } else{
      $('.post_card')
         .not('.' + value)
         .hide('1000');
      $('.post_card')
        .filter('.' + value)
        .show('1000');  
    }
    
  });

  // add active to btn
  
  $('.filter-item').click(function () {

    $(this).addClass('active').siblings().removeClass('active');
    
  });
});

