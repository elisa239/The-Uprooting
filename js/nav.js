$( document ).ready(function() {
	var mn = $(".main-nav");
	    mns = "main-nav-scrolled";
	    hdr = $('header').height();
	
	$(window).scroll(function() {
	  if( $(document).scrollTop() > hdr ) {
	    $(mn).addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});
});


