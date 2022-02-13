// JS of clicking mobile menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const parentNav = document.getElementById('parent-nav');
const childNav = document.getElementById('child-nav');
const currentHeight = header.clientHeight;
// Open/Close mobile menu
mobileMenu.onclick = function () {
  const isClosed = header.clientHeight === currentHeight;
  isClosed ? header.style.height = 'auto' : header.style.height = null;
}
// Auto close mobile navigation after choose a navigation item
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  const isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
  // click on navigation item
  menuItem.onclick = function (e) {
    if (isParentMenu) {
      e.preventDefault();
    } else {
      // header.style.height = '46px'
      header.style.height = null;
    }
  }
}
// Open/Close mobile parent nav
parentNav.onclick = function () {
  childNav.classList.toggle('open');
}

// JS for Buy tickets
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
//open buy tickets modal
function showBuyTickets() {
  modal.classList.add('open');
}
//hide buy tickets modal
function hideBuyTickets() {
  modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
  //click on buy tickets button
  buyBtn.addEventListener('click', showBuyTickets)
}
//click on close buy tickets modal icon
modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation();
})


const sliders = [
  {
    id: 1,
    img: `url(../../assets/img/slider/slider1.jpg)`,
    title: "Los Angeles",
    desc: "We had the best time playing at Venice Beach!"
  },
  {
    id: 2,
    img: `url(../../assets/img/slider/slider2.jpg)`,
    title: "New York",
    desc: "This is New York"
  },
  {
    id: 3,
    img: `url(../../assets/img/slider/slider3.jpg)`,
    title: "London",
    desc: "This is London"
  },
];

const sliderImg = document.getElementById('slider');
const title = document.querySelector('.text-heading');
const description = document.querySelector('.text-description');
const dotItems = document.querySelectorAll('.slider-dot-item');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

//set current item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showSlider();
})

function showSlider() {
  const item = sliders[currentItem];
  sliderImg.style.backgroundImage = item.img;
  title.textContent = item.title;
  description.textContent = item.desc;
}

nextBtn.addEventListener('click', function () {
  handleChangeSlide(1)
})
prevBtn.addEventListener('click', function () {
  handleChangeSlide(-1)
})

function handleChangeSlide(direction) {
  if (direction === 1) {
    currentItem++;
    if (currentItem > sliders.length - 1) {
      currentItem = 0
    }
    showSlider()
  } else if (direction === -1) {
    currentItem--;
    if (currentItem < 0) {
      currentItem = sliders.length - 1;
    }
    showSlider()
  }
  [...dotItems].forEach(el => el.classList.remove('active'));
  dotItems[currentItem].classList.add('active')
}

[...dotItems].forEach((item) =>
  item.addEventListener('click', function (e) {
    // the rest of dotItems
    [...dotItems].forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
    const slideIndex = parseInt(e.target.dataset.index);
    currentItem = slideIndex;
    showSlider();
  })
)
