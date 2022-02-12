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
  console.log(menuItem.nextElementSibling);
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

