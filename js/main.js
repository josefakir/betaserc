$(document).ready(function(){
	$('#splash').fadeIn('slow');
	$(".item").swipe({
	    //Generic swipe handler for all directions
	    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	    	if(direction=="left"){
	    		slide = $(this).attr('rel')
	    		margen = 1024 * slide * -1;
	    		if(slide < 9){
	    			$('#itemcontainer').animate({
		    			left : margen + 'px'
		    		},function(){
		    			switch(slide){
		    				case 1:
		    					alert(slide)
		    				break;
		    			}
		    		});
	    		}
	    	}
	    	if(direction=="right"){
	    		slide = $(this).attr('rel')
	    		margen = 1024 * (slide-2) *-1;
	    		if(slide>1){
	    			$('#itemcontainer').animate({
		    			left : margen + 'px'
		    		});
	    		}
	    	}
	    }
	});
})