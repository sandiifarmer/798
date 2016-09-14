;(function(){

window.url = {
	getSearchVideo : '/static/data/v.json',
	getArtistVideo : '/static/data/v.json',
	loginStatus : '/static/data/login.json',
	addComment : '/static/data/ac.json',
	getComment : '/static/data/gc.json',
	getArtist : '/static/data/ga.json',

	getSearchVideo : '/798sys/search/course_more.htm',
	getArtistVideo : '/798sys/artist/artsList.htm',
	loginStatus : '/798sys/loginStatus.htm',
	getArtist : '/798sys/artist/list.htm',

	imgUpload : '/798sys/uploadImage.htm'

};

require.config({
	urlArgs : 't=' + ( new Date() ).getTime(),
	paths : {}
});

var ftn = {
home : function(){
	require(['nav','lib/swiper.min','login'],function(Nav){
		var nav = $('.nav-box').children('ul').children('li');
		var tab = $('.tab');
		new Nav(tab, nav);
		new Swiper('.swiper-box', {
			effect : 'fade',
			autoplay : 4000
		});		
	});
},
list : function(){
	require(['lib/swiper.min'],function(){
		new Swiper('.swiper-box', {
			effect : 'fade',
			autoplay : 5000
		});
	});
},
detail : function(){
	require(['getVideo','addComment','getComment'],function(GetVideo,AddComment,GetComment){
		new GetVideo({type : 'artist'});
		new AddComment();
		new GetComment();
	});
},
search : function(){
	require(['getVideo'],function(GetVideo){
		new GetVideo({type : 'search'});
	});
},
'admin-s' : function(){
	require(['uploader','v'],function(Up){
		new Up({
			btn : $('.am-icon-up'),
			pic : $('.am-icon-pic'),
			file : $('.am-icon-file'),
			hidden : $('.am-icon-hidden')
		});
	});
},
'modify-s' : function(){
	require(['uploader','v'],function(Up){
		new Up({
			btn : $('.am-icon-up'),
			pic : $('.am-icon-pic'),
			file : $('.am-icon-file'),
			hidden : $('.am-icon-hidden')
		});
	});
},
'admin-a' : function(){
	require(['uploader','v'],function(Up){
		new Up({
			btn : $('.am-icon-up'),
			pic : $('.am-icon-pic'),
			file : $('.am-icon-file'),
			hidden : $('.am-icon-hidden')
		});
		var li = $('.work-ul').children('li');
		var file = $('.work-ul').children('.file');
		var hidden = $('.work-ul').children('.hidden');
		li.each(function( i ){
			new Up({
				btn : $( this ),
				pic : $( this ),
				file : file.eq( i ),
				hidden : hidden.eq( i )
			});
		});		
	});
},
'modify-a' : function(){
	require(['uploader','v'],function(Up){
		new Up({
			btn : $('.am-icon-up'),
			pic : $('.am-icon-pic'),
			file : $('.am-icon-file'),
			hidden : $('.am-icon-hidden')
		});
		var li = $('.work-ul').children('li');
		var file = $('.work-ul').children('.file');
		var hidden = $('.work-ul').children('.hidden');
		li.each(function( i ){
			new Up({
				btn : $( this ),
				pic : $( this ),
				file : file.eq( i ),
				hidden : hidden.eq( i )
			});
		});
	});
},
'klass-upload' : function(){
	require(['getVideo'],function(GetVideo){
		new GetVideo({type : 'artist'});
	});
},
artist : function(){
	require(['getArtist'],function(GetArtist){
		new GetArtist();
	});
},
video : function(){ require(['login']); },
edit : function(){ require(['v']); },
todo : function(){
	var h = $( document.body ).height() - 60 - 250 - 64;
	$('.td-todo').css({height : h});
},
article : function(){
	var h = $( document.body ).height() - 11 - 250 - 64;
	$('.at-body').css({minHeight : h});
},
'banner-uploader' : function(){
	require(['uploader'],function(Up){
		var li = $('.work-ul').children('li');
		var file = $('.work-ul').children('.file');
		var hidden = $('.work-ul').children('.hidden');
		li.each(function( i ){
			new Up({
				btn : $( this ),
				pic : $( this ),
				file : file.eq( i ),
				hidden : hidden.eq( i )
			});
		});		
	});
}

};


var pageName = $('#page-name').attr('data-page-name');
if( ftn[ pageName ] ) ftn[ pageName ]();

})();