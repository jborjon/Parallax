var scrollPercent = 0.4;

function parallax() {
	var scrolled = $(window).scrollTop();
	$(".background").css("top", -(scrolled * scrollPercent) + "px");
}

$(window).scroll(function(e) {
	parallax();
});

