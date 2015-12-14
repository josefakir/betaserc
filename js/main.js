function mostrar1(){
	$('#s2_logo').fadeIn('slow',function(){
		$('#s2_t1').fadeIn(1000,function(){
			$('#s2_t2').fadeIn(1000,function(){
				$('#s2_chica').fadeIn(1000);
			});
		 });
	});
}
function ocultar1(){
	$('#s2_logo').fadeOut('fast');
	$('#s2_t1').fadeOut('fast');
	$('#s2_t2').fadeOut('fast');
	$('#s2_chica').fadeOut('fast');
}
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
		    				case '1':
		    					console.log(slide);
		    					mostrar1();
		    				break;
		    				case '2':
		    					console.log(slide);
		    				break;
		    				case '3':
		    					console.log(slide);
		    				break;
		    				case '4':
		    					console.log(slide);
		    				break;
		    				case '5':
		    					console.log(slide);
		    				break;
		    				case '6':
		    					console.log(slide);
		    				break;
		    				case '7':
		    					console.log(slide);
		    				break;
		    				case '8':
		    					console.log(slide);
		    				break;
		    				case '9':
		    					console.log(slide);
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