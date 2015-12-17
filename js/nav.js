$( document ).ready(function() {
	var mn = $(".main-nav");
	    mns = "main-nav-scrolled";
	    hdr = $('header').height();
	    mf = $(".footer-inner");
	    mfs = "footer-inner-scrolled";
	    ftr = $('footer').height();
	
	$(window).scroll(function() {
	  if( $(document).scrollTop() > hdr ) {
	    $(mn).addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }

	  if( $(document).scrollTop() > ftr ) {
	    $(mf).addClass(mfs);
	  } else {
	    mf.removeClass(mfs);
	  }
	});
});