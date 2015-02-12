jQuery(document).ready(function() {

	jQuery('.top-menu-navigation ul').clone().appendTo('.rwd-top-nav');

	jQuery('.main-navigation ul').clone().appendTo('.rwd-main-nav');

	jQuery('#rwd-top-nav-btn').click(function(event) {
		event.preventDefault();
		jQuery('.rwd-top-nav').slideToggle();
	});

	jQuery('#rwd-main-nav-btn').click(function(event) {
		event.preventDefault();
		jQuery('.rwd-main-nav').slideToggle();
	});

});