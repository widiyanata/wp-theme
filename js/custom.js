( function( $ ) {

  $('.nav-open').click( function(e) {
    e.preventDefault();

    $('body').toggleClass('open');

  });

	$('.hamburger').click( function(e) {
    e.preventDefault();

    $(this).toggleClass('is-active');
		$('body').toggleClass('open');

  });

} )( jQuery );


