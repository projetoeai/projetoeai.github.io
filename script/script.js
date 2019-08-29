

/*Scroll Suave*/
$('.navbar .nav-item a[href^="#"], .navbar .navbar-brand').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset
  }, 500);
});
/**/



//-Menu hamburger recolhido quando clica link
$('.navbar-nav li a').click(function() {
   if ( !$(this).parent().hasClass('dropdown')) {
      $('.navbar-collapse').collapse('hide'); 
   }
});