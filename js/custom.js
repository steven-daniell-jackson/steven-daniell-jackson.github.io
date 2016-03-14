var appMaster = {
	menuToggler: function(){
		// Menu Toggler
	    $('#menuToggler').on('click', function(e) {
	    	e.preventDefault();
	    	/* Act on the event */
	    	$('#wrapper').toggleClass('toggled');
	    });
	    
	}
}