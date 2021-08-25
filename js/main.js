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
});

// Username dropdown function
$( ".top_nav .username_options .clickable" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().hasClass("username_options_active")){
		$(this).parent().removeClass("username_options_active");
	}else{
		$(this).parent().addClass("username_options_active");
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









// on resize everything
$( window ).resize(function() {
	// Make def right box if it get resized
	$(".right_nav .dropf_active .boxes").css("max-height", "unset");

});