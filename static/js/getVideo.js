define(function(){

function GetVideo(opt){
	this.type = opt.type;
	this.pageSize = opt.pageSize || 8;
	this.btn = opt.btn || $('.tv-more');
	this.box = opt.box || $('.tv-ul');

	this.bind();
}

GetVideo.prototype = {
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
		var pageNo = self.btn.attr('data-page-no');
		param.pageNo = pageNo ? pageNo : 2;
		if( self.type == 'artist' ){
			var url = window.url.getArtistVideo;
			param.artistId = $( document.body ).attr('data-artist-id');
		}
		if( self.type == 'search' ){
			var url = window.url.getSearchVideo;
			param.q = $( document.body ).attr('data-key-word');	
		}
		self.request(url, param);
	},

	request : function(url, param){
		var self = this;
		self.doing();
		$.post(url, param, function( data ){
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
			'<a href="'+ this.url +'">'
			+'	<span class="tv-p">'
			+'		<img src="'+ this.pic +'">'
			+'		<b>'+ this.time +'</b>'
			+'	</span>'
			+'	<span class="tv-t">'+ this.title +'</span>'
			+'</a>';
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

return GetVideo;

});