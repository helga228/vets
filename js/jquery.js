//Меню бургер 
$(document).ready(function() { 
 $('.header__burger').click(function(event) { 
  $('.header__burger,.header__menu').toggleClass('active'); 
  $('body').toggleClass('lock'); 
 }); 
 $('.header__list').click(function(event) { 
  $('.header__burger,.header__menu').toggleClass('active'); 
  $('body').toggleClass('lock'); 
 }); 
});

