define(function(){

function GetComment(){
	this.btn = $('.cm-more');
	this.box = $('.cm-ul');
	this.pageSize = 8;
	this.url = window.url.getComment;

	this.bind();
}

GetComment.prototype = {
	bind : function(){
		var self = this;
		self.btn.on('click', function(){
			if( self.btn.hasClass('gray') ) return;
			self.prepare();
		});
	},

	prepare : function(){
		var self = this;
		var param = {};
		param.pageSize = self.pageSize;
		param.artistId = $( document.body ).attr('data-artist-id');
		var pageNo = self.btn.attr('data-page-no');
		param.pageNo = pageNo ? pageNo : 2;
		self.request(param);
	},

	request : function(param){
		var self = this;
		self.doing();
		$.post(self.url, param, function( data ){
			if( data.code != 200 ){
				self.done();	
			}else if( !data.content.length ){
				self.no();
			}else{
				self.done();
				self.render( data.content );
				self.pageNo();
			}
		}, 'json');
	},

	render : function( arr ){
		var self = this;
		$.each(arr, function(){
			var html =
			'<li>'
			+'	<div><img src="'+ this.pic +'"></div>'
			+'	<span>'+ this.name +'</span>'
			+'	<p>'+ this.content +'</p>'
			+'	<i>'+ this.time +'</i>'
			+'</li>';
			self.box.append( html );
		});
	},

	pageNo : function(){
		var self = this;
		var pageNo = self.btn.attr('data-page-no');
		pageNo = pageNo ? parseInt( pageNo ) + 1 : 3;
		self.btn.attr({'data-page-no' : pageNo});
	},

	doing : function(){ this.btn.addClass('gray').text('加载中'); },
	done : function(){ this.btn.removeClass('gray').text('加载更多'); },
	no : function(){ this.btn.addClass('gray').text('没有更多了'); }	
};

return GetComment;

});