
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

//  открытие/закрытие полноэкранного меню "по клику на гамбургер меню в адаптивах"
const hamburger = document.querySelector (".hamburger-menu");
const fullScreenMenu = document.querySelector ('.fullscreen-menu');
const closeMenu = document.querySelector (".fullscreen-menu__close");
const closeMenu2 = document.querySelectorAll (".fullscreen-menu__link");

closeMenu2.forEach(function(item) {
    item.addEventListener('click', function(e) {
        fullScreenMenu.style.display = "none";
        document.body.classList.remove('blocked-scroll');
    });
hamburger.addEventListener ('click', function (e){
    fullScreenMenu.style.display = "flex";
    document.body.classList.add('blocked-scroll');
    });

closeMenu.addEventListener ('click', function (e){
    e.preventDefault ();
    fullScreenMenu.style.display = "none";
    document.body.classList.remove('blocked-scroll');
    });

});


//  открытие/закрытие меню "состав на слайдере"
const closeHideMenu = document.querySelector (".hide-menu__item-cross");
const HideMenu = document.querySelector (".hide-menu__wrapper");
const ShowMenu = document.querySelector (".hide-menu__btn");

closeHideMenu.addEventListener ('click', function (e){
    HideMenu.style.visibility = "hidden";
});
ShowMenu.addEventListener ('mouseover', function (e){
    HideMenu.removeAttribute("style");
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
