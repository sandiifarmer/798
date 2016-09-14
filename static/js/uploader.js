define(function(){
	function Uploader(opt){
		this.btn = opt.btn;
		this.file = opt.file;
		this.pic = opt.pic;
		this.hidden = opt.hidden;
		this.url = opt.url || window.url.imgUpload;
		this.origin = opt.pic.css('backgroundImage');

		this.bind();
	}

	Uploader.prototype = {

		bind : function(){
			var self = this;
			self.btn.on('click', function(){
				if( self.btn.hasClass('uping') ) return;
				self.file.trigger('click');
			});
			self.file.on('change', function(){
				self.uping();
				self.doup();
			});
		},

		doup : function(){
			var self = this;
			self.file.wrap('<form enctype="multipart/form-data"/>');
			self.file.parent("form").ajaxSubmit({
	        	url : self.url,
	            type : "post",
	            success : function( data ) {
	            	self.file.unwrap();
	            	if(data.code == 200){            		
	              	  	self.upok( data );
	            	}else{
	            		self.upfail();
	            	}
	         	}
	        });
		},

		uping : function(){
			var self = this;
			var img = 'url(/static/img/loading.gif)';
			self.pic.css({backgroundImage : img});
			self.pic.removeClass('upfail').addClass('uping');
			self.btn.removeClass('upfail').addClass('uping');
		},

		upok : function( data ){
			var self = this;
			var img = 'url('+ data.imgUrl +')';
			self.pic.css({backgroundImage : img});
			self.hidden.val( data.imgUrl );
			self.pic.removeClass('upfail').removeClass('uping');
			self.btn.removeClass('upfail').removeClass('uping');
		},

		upfail : function(){
			var self = this;
			var img = self.origin;
			self.pic.css({backgroundImage : img});
			self.pic.addClass('upfail').removeClass('uping');
			self.btn.addClass('upfail').removeClass('uping');
		}
	};

	return Uploader;
});