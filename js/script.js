$(document).ready(function() {
 
	var mobile = 'ontouchend' in window;
	jQuery('.video-container').each(function() {
		
		var $this = jQuery(this);
		if(!mobile) {
			
			// to keep the video poster for desktop, comment out or remove the line below
			$this.attr('data-videoposter', '');
			
			return;
			
		}
 
		$this.removeClass('video-container').addClass('mobile-video-fallback-image').css(
			
			'background-image', 'url(' + $this.attr('data-videoposter') + ')'
			
		);
		
	});
	
})();