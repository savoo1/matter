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
	if($(this).hasClass("multi_select_list_box")){
		if(!$(this).hasClass("nomore")){
			$(this).addClass("multi_select_list_box_active");
			$(this).addClass("nomore");
		}
	}else{
		$(this).find("input").focus();
	}
	setTimeout(function(){  
		var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
		$(".showed_menu_active").css("min-height", heightofcontonload + "px");
	}, 250);
});
$(".right_nav .dropf .box .tit").on('click', function() {
	var that = this;
	if($(this).parent().hasClass("multi_select_list_box_active")){
		$(this).parent().removeClass("multi_select_list_box_active");
		setTimeout(function(){  
			console.log($(that).parent().removeClass("nomore"));
		}, 100);
	}
	setTimeout(function(){  
		var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
		$(".showed_menu_active").css("min-height", heightofcontonload + "px");
	}, 250);
});
$(".multi_select_list_box .multiselect .arrowright").on('click', function() {
	var that = this;
	if($(this).parent().parent().hasClass("multi_select_list_box_active")){
		$(this).parent().parent().removeClass("multi_select_list_box_active");
		setTimeout(function(){  
			console.log($(that).parent().parent().removeClass("nomore"));
		}, 100);
	}
	setTimeout(function(){  
		var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
		$(".showed_menu_active").css("min-height", heightofcontonload + "px");
	}, 250);
});
$(".right_nav .dropf .box .multiselect .listforselect p").click(function(e) {
	if($(this).hasClass("activep")){
		$(this).removeClass("activep")
	}else{
		$(this).addClass("activep")
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
		$(".searchbar_menu").removeClass("active_search");
	}
});

$( ".top_nav .searchbar_menu svg, .top_nav .searchbar_menu .svg_icon" ).click(function(e) {
	e.preventDefault();
	if($(this).parent().hasClass("active_search")){
		$(this).parent().removeClass("active_search");
	}else{
		$(this).parent().addClass("active_search");
		if ($(window).width() > 772) {
			$(this).parent().find("input").focus();
		}
		$(".notification_c").removeClass("notification_c_active");
		$(".username_options").removeClass("username_options_active");
		$(".screen_view").removeClass("leftmenu_sm");
		$(".screen_view").removeClass("rightmenu_sm");
		$(".screen_view").removeClass("bothmenu_ac");
	}
});



// open new menu on click navbar right
$( ".right_nav .open_new_menu" ).click(function(e) {
	e.preventDefault();
	$(".showed_menu_active").removeClass("showed_menu_active");

	var showclassname = "." + $(this).attr("name");
	var heightofcont = $(showclassname).find(".dropf").height();
	$(".showed_menu").css("min-height", "0");
	$(showclassname).css("min-height", heightofcont + "px");
	$(showclassname).addClass("showed_menu_active");
	heightofcontonload = $(".showed_menu_active").find(".dropf").height();
	var new_title = $(this).attr("alt");
	if(new_title != null){
		$(".right_nav .title h1 span").html(new_title);
	}
});
setTimeout(function(){  
	var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
	$(".showed_menu_active").css("min-height", heightofcontonload + "px");
}, 100);



// popup option icons down right
// $( ".popup_map .options .slide_switcher2" ).click(function(e) {
// 	e.preventDefault();
// 	if($(this).hasClass("slide_switcher_flat")){
// 		if($(this).hasClass("slide_switcher_off")){
// 			$(this).find("span").html("ON")
// 			$(this).addClass("slide_switcher_on");
// 			$(this).removeClass("slide_switcher_off");
// 			$(this).removeClass("slide_switcher_flat");
// 		}else{
// 			$(this).find("span").html("OFF")
// 			$(this).addClass("slide_switcher_off");
// 			$(this).removeClass("slide_switcher_on");
// 			$(this).removeClass("slide_switcher_flat");
// 		}
// 	}else{
// 		$(this).find("span").html("FLAT")
// 		$(this).addClass("slide_switcher_flat");
// 	}
// });




// on resize everything
var Widthofwin_prev_resize = $(window).width();
$( window ).resize(function() {
	// Make def right box if it get resized
	$(".right_nav .dropf_active .boxes").css("max-height", "unset");
	if(Widthofwin_prev_resize > 772){
		if ($(window).width() < 772) {
			$(".screen_view").removeClass("leftmenu_sm");
			$(".screen_view").removeClass("rightmenu_sm");
			$(".screen_view").removeClass("bothmenu_ac");
		}
	}
	var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
	$(".showed_menu_active").css("min-height", heightofcontonload + "px");
});

// Please select right menu
var j_height = 1;
var heightofcontonload = $(".showed_menu_active").find(".dropf").height();
$( ".right_nav .dropf .clickable" ).click(function(e) {
	if(!$(this).hasClass("open_new_menu")){
		e.preventDefault();
		var getheightofboxes = $(this).parent().find(".eachone").height() + 1000;
		if($(this).parent().hasClass("dropf_active")){
			$(this).parent().removeClass("dropf_active");
			if(j_height == 1){
				$(this).parent().find(".boxes").css("max-height", "0");
				$(".showed_menu_active").css("min-height", "0px");	
				$(".multi_select_list_box_active").removeClass("multi_select_list_box_active");
				$(".nomore").removeClass("nomore");
				j_height = 0;	
			}
		}else{
			$(this).parent().addClass("dropf_active");
			$(this).parent().find(".boxes").css("max-height", getheightofboxes);
			j_height = 1;
			$(".showed_menu_active").css("min-height", heightofcontonload + "px");
		}
	}
});


// on focus input
$( "input" )
  .focusout(function() {
  	var placeholder = $(this).attr("name");
  	$(this).attr("placeholder", placeholder);
  });
  $( "input" ).focus(function() {
    $(this).attr("placeholder", "");
  });

// close popup if click anywhere else
$(document).click(function(event) {
	if (!$(event.target).closest(".notification_c").length) {
		$(".notification_c").removeClass("notification_c_active");
	}

	if (!$(event.target).closest(".username_options").length) {
		$(".username_options").removeClass("username_options_active");
	}
	if (!$(event.target).closest(".dropdownbtn_select_active").length) {
		$(".dropdownbtn_select_active").removeClass("dropdownbtn_select_active");
	}
});


// removeright sm on some click
$(".open_menu_onsm").click(function(event) {
	if ($(window).width() > 772) {
		$(".screen_view").removeClass("rightmenu_sm");
	}
});



// close pupup
$(".confirmbox .btns .close").click(function(e) {
	e.preventDefault();
	$(".wrapper_confirm").removeClass("wrapper_confirm_active");
});


// on load made maxheight of directions route
if ($(window).width() < 772) {
	var getheightofrightnav = $(".right_nav .right_nav_phone").height();
	$(".right_nav .dropf .boxes .directions_max_h").css("height", "calc("+getheightofrightnav + "px - 13rem)")
}


// open popup
$( ".open_popup" ).click(function(e) {
	e.preventDefault();
	var classforpopup = "." + $(this).attr("name");
	$(classforpopup).addClass("popup_active");
});
$( ".close_popup" ).click(function(e) {
	e.preventDefault();
	$(".popup_active").removeClass("popup_active");
});


// open dropdown menu on dropdown btns
$( ".dropdownbtn_select" ).click(function(e) {
	if($(this).hasClass("dropdownbtn_select_active")){
		$(this).removeClass("dropdownbtn_select_active");
	}else{
		$(".dropdownbtn_select_active").removeClass("dropdownbtn_select_active");
		$(this).addClass("dropdownbtn_select_active")
	}
});

// on click add selected right menu
$( ".right_nav .dropf .box .tit" ).click(function(e) {
	$(".right_selected").addClass("right_selected_for_remove");
	if(!$(this).parent().hasClass("right_selected")){
		$(this).parent().addClass("right_selected");
	}else{
		$(".right_selected").removeClass("right_selected");
	}
	$(".right_selected_for_remove").removeClass("right_selected");
	$(".right_selected_for_remove").removeClass("right_selected_for_remove");
});
$( ".right_nav .dropf .box input" )
.focusout(function() {
	$(".right_selected").removeClass("right_selected");
});









