// navbar dropdown function
$( ".leftpanel .navbar .dropwdown a" ).click(function(e) {
  if($(this).parent().hasClass("dropwdown")){
	e.preventDefault();
	if($(this).parent().hasClass("dropwdown_active")){
		$(this).parent().removeClass("dropwdown_active");
	}else{
		$(this).parent().addClass("dropwdown_active");
	}
  }
});

// notification dropdown function
$( ".top_nav .notification_c .notification_c_icon" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().hasClass("notification_c_active")){
		$(this).parent().removeClass("notification_c_active");
	}else{
		$(this).parent().addClass("notification_c_active");
	}

	if ($(window).width() < 772) {
		$(".screen_view").removeClass("leftmenu_sm");
		$(".screen_view").removeClass("rightmenu_sm");
		$(".screen_view").removeClass("bothmenu_ac");

		$(".username_options").removeClass("username_options_active");
		$(".searchbar_menu").removeClass("active_search");
	}
});

// Username dropdown function
$( ".top_nav .username_options .clickable" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().hasClass("username_options_active")){
		$(this).parent().removeClass("username_options_active");
	}else{
		$(this).parent().addClass("username_options_active");
	}

	if ($(window).width() < 772) {
		$(".screen_view").removeClass("leftmenu_sm");
		$(".screen_view").removeClass("rightmenu_sm");
		$(".screen_view").removeClass("bothmenu_ac");

		$(".notification_c").removeClass("notification_c_active");
		$(".searchbar_menu").removeClass("active_search");
	}
});


// box right menu clicks
$( ".right_nav .dropf .box" ).click(function(e) {
	e.preventDefault();
	$(this).find("input").focus();
});

// Please select right menu
$( ".right_nav .dropf .clickable" ).click(function(e) {
	e.preventDefault();
	var getheightofboxes = $(".right_nav .dropf .eachone").height();
	if($(this).parent().hasClass("dropf_active")){
		$(this).parent().removeClass("dropf_active");
		$(".right_nav .dropf .boxes").css("max-height", "0");
	}else{
		$(this).parent().addClass("dropf_active");
		$(".right_nav .dropf_active .boxes").css("max-height", getheightofboxes);
	}
});


// clicking left/right logo
$( ".leftpanel .logo_pl" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().parent().hasClass("leftmenu_sm")){
		$(this).parent().parent().removeClass("leftmenu_sm");
		$(this).parent().parent().removeClass("bothmenu_ac");
	}else{
		$(this).parent().parent().addClass("leftmenu_sm");
		if($(this).parent().parent().hasClass("rightmenu_sm")){
			if ($(window).width() < 772) {
				$(this).parent().parent().removeClass("rightmenu_sm");
			}
			else {
				$(this).parent().parent().addClass("bothmenu_ac");
			}
		}
	}
	if ($(window).width() < 772) {
		$(".notification_c").removeClass("notification_c_active");
		$(".username_options").removeClass("username_options_active");
		$(".searchbar_menu").removeClass("active_search");
	}
});
$( ".right_nav .title" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().parent().hasClass("rightmenu_sm")){
		$(this).parent().parent().removeClass("rightmenu_sm");
		$(this).parent().parent().removeClass("bothmenu_ac");
	}else{
		$(this).parent().parent().addClass("rightmenu_sm");
		if($(this).parent().parent().hasClass("leftmenu_sm")){
			if ($(window).width() < 772) {
				$(this).parent().parent().removeClass("leftmenu_sm");
			}
			else {
				$(this).parent().parent().addClass("bothmenu_ac");
			}
		}
	}
	$(".right_nav .dropf_active .boxes").css("max-height", "unset");
	if ($(window).width() < 772) {
		$(".notification_c").removeClass("notification_c_active");
		$(".username_options").removeClass("username_options_active");
	}
});

$( ".top_nav .searchbar_menu svg" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().hasClass("active_search")){
		$(this).parent().removeClass("active_search");
	}else{
		$(this).parent().addClass("active_search");
		$(this).parent().find("input").focus();
		$(".notification_c").removeClass("notification_c_active");
		$(".username_options").removeClass("username_options_active");
		$(".screen_view").removeClass("leftmenu_sm");
		$(".screen_view").removeClass("rightmenu_sm");
		$(".screen_view").removeClass("bothmenu_ac");
	}
});




// on resize everything
$( window ).resize(function() {
	// Make def right box if it get resized
	$(".right_nav .dropf_active .boxes").css("max-height", "unset");

	if ($(window).width() < 772) {
		$(".screen_view").removeClass("leftmenu_sm");
		$(".screen_view").removeClass("rightmenu_sm");
		$(".screen_view").removeClass("bothmenu_ac");
	}

});