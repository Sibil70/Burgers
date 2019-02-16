
//  открытие/закрытие полноэкранного меню "по клику на гамбургер меню в адаптивах"
const hamburger = document.querySelector (".hamburger-menu");
const fullScreenMenu = document.querySelector ('.fullscreen-menu');
const closeMenu = document.querySelector (".fullscreen-menu__close");
const menuLink = document.querySelectorAll (".fullscreen-menu__link");

hamburger.addEventListener ('click', e =>{
    fullScreenMenu.style.display = "flex";
    document.body.classList.add('blocked-scroll');
    });
closeMenu.addEventListener ('click', e =>{
        e.preventDefault ();
        fullScreenMenu.style.display = "none";
        document.body.classList.remove('blocked-scroll');
        });
menuLink.forEach(function(item) {
    item.addEventListener('click', e => {
        closeMenu.click();
    });

fullScreenMenu.addEventListener('click', e =>{
    if(e.target === fullScreenMenu){
        closeMenu.click();
    }
})
});

// аккордеон секции team
var openTeamMate = document.querySelectorAll (".team-accordeon__trigger");
var activeTeamMate;

openTeamMate.forEach(function(item) {
    item.addEventListener('click', function(e) {
        this.classList.add('team-accordeon__trigger--active');
        if (activeTeamMate) {activeTeamMate.classList.remove('team-accordeon__trigger--active')}
        activeTeamMate = (activeTeamMate === this) ? 0 : this;
  })
});

// аккордеон секции menu
var openMenu = document.querySelectorAll ('.menu-accordeon__triger');
var activeMenu;

openMenu.forEach(function(item) {
  item.addEventListener('click', function(e) {
    this.classList.add('menu-accordeon__triger--active');
    if (activeMenu) 
    {activeMenu.classList.remove('menu-accordeon__triger--active')}
    activeMenu = (activeMenu === this) ? 0 : this;
  })
});

// слайдер секции burgers

$(document).ready(function(){
    var slider = $('.slider').bxSlider({
         speed: 1
     });

     $('#right').on('click', e =>{
        e.preventDefault();
       slider.goToNextSlide();
    });
     $('#left').on('click', e =>{
        e.preventDefault();
       slider.goToPrevSlide();
    });

});
