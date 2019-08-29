// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//JS para suavizar descida da tela :??
$('.navbar .nav-item a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset
  }, 500);
});


/*Scroll Suave*/

/**/


//-Menu hamburger recolhido quando clica link
$('.navbar-nav li a').click(function() {
   if ( !$(this).parent().hasClass('dropdown')) {
      $('.navbar-collapse').collapse('hide'); 
   }
});