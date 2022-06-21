import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



// scroll tracker

const scrollTracker = document.querySelector('.scroll_tracker');

const animatedSections = document.querySelectorAll('.animated_section');

const scrollTrackingTimeline = new ScrollTimeline({

  source: document.scrollingElement,
  orientation: 'block',
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],

});


animatedSections.forEach(section => {

  const animatedSectionTimeline = new ScrollTimeline({

    scrollOffsets: [
      {target: section, edge:'end', threshold: '0'},
      {target: section, edge:'start', threshold: '1'},
    ],
    
  });

  section.animate(

    {
      transform:['translateY(0)', 'translateY(0)'],
      opacity: ['0', '1']
      
    },
  
    {
      duration: .3,
      timeline: animatedSectionTimeline,
    }
  );

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


// document.getElementById('parallax').animate(
//     { transform: ['translateY(0)', 'translateY(100px)']},
//     { duration: 10000, // Totally arbitrary!
//       fill: 'both',
//       timeline: new ScrollTimeline({
//           scrollOffsets: [
//               new CSSUnitValue(0, 'px'),
//               new CSSUnitValue(200, 'px')
//           ]
//       })
//     });


const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');
const navList = document.querySelector('.navElement');
const navList2 = document.querySelector('.navElement2');
const navList3 = document.querySelector('.navElement3');
const navList4 = document.querySelector('.navElement4');
const navList5 = document.querySelector('.navElement5');
const navList6 = document.querySelector('.navElement6');
const navList7 = document.querySelector('.navElement7');
// const navList8 = document.querySelector('.navElement8');
// const navList9 = document.querySelector('.navElement9');
const navList10 = document.querySelector('.navElement10');
const navList11 = document.querySelector('.navElement11');
// const navList = document.querySelectorAll('.navElement');
// const closeSouMenu = document.querySelector('#nav_items');
// const closeSouMenu2 = document.querySelector('#nav_items3');

// const listElementA = document.querySelector('.li1');
// const listElementB = document.querySelector('.li4');
// const listElementC = document.querySelector('.li5');
// const listElementB1 = document.querySelector('#li2-1');
// const listElementB2= document.querySelector('#li2-2');
// const listElementB3 = document.querySelector('#li2-3');
// const listElementB4 = document.querySelector('#li2-4');
// const listElementB5 = document.querySelector('#li2-5');
// const listElementD1 = document.querySelector('#li3-1');
// const listElementD2 = document.querySelector('#li3-2');
// const listElementD3 = document.querySelector('#li3-3');

// listElementA.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
// })

// listElementB.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
// })

// listElementC.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
// })

// listElementB1.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu.style.display = 'none';
// })

// listElementB2.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu.style.display = 'none';
// })

// listElementB3.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu.style.display = 'none';
// })

// listElementB4.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu.style.display = 'none';
// })


// listElementB5.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu.style.display = 'none';
// })
// listElementD1.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu2.style.display = 'none';
// })


// listElementD2.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu2.style.display = 'none';
// })

// listElementD3.addEventListener('click', () => {
//   navItems.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
//   closeNavBtn.style.display = 'none';
//   closeSouMenu2.style.display = 'none';
// })


navList.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList2.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList3.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList4.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList5.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList6.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList7.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
// navList8.addEventListener('click', () => {
//   navItems.classList.add('nav_closed');
//   closeNavBtn.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
// })
// navList9.addEventListener('click', () => {
//   navItems.classList.add('nav_closed');
//   closeNavBtn.style.display = 'none';
//   openNavBtn.style.display = 'inline-block';
// })
navList10.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})
navList11.addEventListener('click', () => {
  navItems.classList.add('nav_closed');
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
})



// navList.forEach(navElement => {
//   navElement.addEventListener('click', function handleClick(event) {
//     navItems.style.display = 'none';
//     closeNavBtn.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//   });
// });

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


// navElements.addEventListener('click', () => {
//   navItems.classList.add('nav_closed');
// })








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

