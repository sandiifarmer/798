define(function(){

$.get(window.url.loginStatus, function( data ){
	if( data.code == 200 ){
		var bgImg = 'url('+ data.img +')';
		$('.top-head').css({backgroundImage : bgImg});
		$('.top-name').text( data.realname );
		$('.top-user').attr({href : data.url}).removeClass('hide');
		$('.top-login').addClass('hide');
	}else{
		$('.top-login').removeClass('hide');
		$('.top-user').addClass('hide');
	}
}, 'json');
	
});