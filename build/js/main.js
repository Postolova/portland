$( document ).ready( function() {
	$( ' .information-menu__items' ).on( 'click', function() {
		$('.information-menu-second').removeClass('visible'); 
		$(this).next(' .information-menu-second ').toggleClass(' visible ');
	});
});