$(function(){
	$('#he').click(function(){
		$('html,body').animate({scrollTop: $('#home').offset().top}, 600);
	}); 
	
	$('#am').click(function(){
		$('html,body').animate({scrollTop:$('#aboutme').offset().top}, 600);
	});
	
	$('#pt').click(function(){
		$('html,body').animate({scrollTop:$('#photo').offset().top}, 600);
	});
	$('#he1').click(function(){
		$('html,body').animate({scrollTop: $('#home').offset().top}, 600);
	}); 
	
	$('#am1').click(function(){
		$('html,body').animate({scrollTop:$('#aboutme').offset().top}, 800);
	});
	
	$('#pt1').click(function(){
		$('html,body').animate({scrollTop:$('#photo').offset().top}, 800);
	});
	$('#he2').click(function(){
		$('html,body').animate({scrollTop: $('#home').offset().top}, 300);
	}); 
	
	$('#am2').click(function(){
		$('html,body').animate({scrollTop:$('#aboutme').offset().top}, 800);
	});
	
	$('#pt2').click(function(){
		$('html,body').animate({scrollTop:$('#photo').offset().top}, 800);
	});
});