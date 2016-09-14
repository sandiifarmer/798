define(function(){

function AddComment(){
	this.btn = $('.cm-submit');
	this.box = $('.cm-ul');
	this.input = $('.cm-box').children('textarea');
	this.url = window.url.addComment;

	this.bind();
}

AddComment.prototype = {
	bind : function(){
		var self = this;
		self.btn.on('click', function(){
			if( self.btn.hasClass('gray') ) return;
			var login = $('.top-login');
			if( login.length ){
				login.trigger('click');
				return;
			}
			self.prepare();
		});
	},

	prepare : function(){
		var self = this;
		var param = {};
		param.artistId = $( document.body ).attr('data-artist-id');
		param.content = $.trim( self.input.val() );
		if( !param.content ) return;
		if( param.content.length > 100 ){
			alert('评论不得超过一百字');
			return;
		}
		self.request(param);
	},

	request : function(param){
		var self = this;
		self.doing();
		$.post(self.url, param, function( data ){
			self.done();
			if( data.code != 200 ) return;
			self.render( param.content );
		}, 'json');
	},

	render : function( content ){
		var self = this;
		var pic = $('.top-head').css('background-image').slice(4,-1);
		var name = $('.top-head').siblings('span').text();
		var time = new Date().toLocaleString();
		var html =
			'<li>'
			+'	<div><img src="'+ pic +'"></div>'
			+'	<span>'+ name +'</span>'
			+'	<p>'+ content +'</p>'
			+'	<i>'+ time +'</i>'
			+'</li>';
		self.box.prepend( html );
		self.input.val('');
	},

	doing : function(){ this.btn.addClass('gray').text('提交中'); },
	done : function(){ this.btn.removeClass('gray').text('确定'); }	
};

return AddComment;

});