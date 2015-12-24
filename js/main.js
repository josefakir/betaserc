function mostrar1(){
	$('#s2_logo').fadeIn('slow',function(){
		$('#s2_t1').fadeIn(1000,function(){
			$('#s2_t2').fadeIn(1000,function(){
				$('#s2_chica').fadeIn(1000);
			});
		 });
	});
}
function mostrar2(){
	$('#s3_1').fadeIn('slow',function(){
		$('#s3_2').fadeIn(1000,function(){
			$('#s3_3').fadeIn(1000,function(){
				$('#s3_4').fadeIn(1000);
			});
		 });
	});
}
function mostrar3(){
	$('#s4_1').fadeIn('slow',function(){
		$('#s4_2').fadeIn(1000,function(){
			$('#s4_3').fadeIn(1000,function(){
				$('#s4_4').fadeIn(1000);
			});
		 });
	});
}
function mostrar4(){
	$('#s5_1').fadeIn('slow',function(){
		$('#s5_2').fadeIn(1000,function(){
			$('#s5_3').fadeIn(1000,function(){
				$('#s5_4').fadeIn(1000);
			});
		 });
	});
}
function mostrar5(){
	$('#s6_1').fadeIn('slow',function(){
		$('#s6_2').fadeIn(1000,function(){
			$('#s6_3').fadeIn(1000,function(){
				$('#s6_4').fadeIn(1000);
			});
		 });
	});
}
function mostrar6(){
	$('#s7_1').fadeIn('slow',function(){
		$('#s7_2').fadeIn(1000,function(){
			$('#s7_3').fadeIn(1000);
		 });
	});
}
function mostrar7(){
	$('#s8_1').fadeIn('slow',function(){
		$('#s8_2').fadeIn(1000,function(){
			$('#s8_3').fadeIn(1000,function(){
				$('#s8_4').fadeIn(1000);
			});
		 });
	});
}
function mostrar8(){
	$('#s9_1').fadeIn('slow',function(){
		$('#s9_2').fadeIn(1000,function(){
			$('#s9_3').fadeIn(1000);
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
		    					mostrar2();
		    				break;
		    				case '3':
		    					mostrar3();
		    					console.log(slide);
		    				break;
		    				case '4':
		    					mostrar4();
		    					console.log(slide);
		    				break;
		    				case '5':
		    					mostrar5();
		    					console.log(slide);
		    				break;
		    				case '6':
		    					mostrar6();
		    					console.log(slide);
		    				break;
		    				case '7':
		    					mostrar7();
		    					console.log(slide);
		    				break;
		    				case '8':
		    					mostrar8();
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