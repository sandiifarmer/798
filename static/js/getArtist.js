define(function(){

function GetArtist(){
	this.pageSize = 6;
	this.btn = $('.block-btn');
	this.box = $('.block-ul');
	this.url = window.url.getArtist;
	this.typeId = this.btn.attr('data-type-id');

	this.bind();
}

GetArtist.prototype = {
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
		param.resultType = 'json';
		param.typeId = self.typeId;
		param.pageSize = self.pageSize;
		var pageNo = self.btn.attr('data-page-no');
		param.pageNo = pageNo ? pageNo : 2;
		param.keyWord = $( document.body ).attr('data-key-word');	
		self.request(param);
	},

	request : function( param ){
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
			'<a href="'+ this.url +'">'
			+'	<span class="block-pic">'
			+'		<img src="'+ this.pic +'">'
			+'	</span>'
			+'	<span class="block-info">'
			+'		<span>'+ this.name +'</span>'
			+'		<span>'+ this.klass +'</span>'
			+'		<span>'+ this.nation +'</span>'
			+'	</span>'
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

return GetArtist;

});