define(function(){

	function Nav(tab, nav){
		this.tab = tab;
		this.nav = nav;
		this.range = this.getRange();

		this.bindNav();
		this.bindScroll();
	}

	Nav.prototype = {

		getRange : function(){
			var self = this;
			var range = [];
			self.tab.each(function(){
				var top = $( this ).offset().top;
				range.push( top );
			});
			return range;
		},

		bindNav : function(){
			var self = this;
			self.nav.on('click', function(e){
				var i = $( e.currentTarget ).index();
				var top = self.range[ i ];
				$( document.body ).animate({
					scrollTop : top
				}, 1000);
				self.checkNav( i );
			});
		},

		bindScroll : function(){
			var self = this;
			var iNew = 0;
			var iOld = 0;
			$( window ).on('scroll', function(){
				iNew = self.getNewI();
				if( iNew === iOld ) return;
				if( !iNew || !iOld){
					$('.nav-box').toggleClass('nav-float');	
				}
				self.checkNav( iNew );
				iOld = iNew;
			});
		},

		getNewI : function(){
			var self = this;
			var top = $( window ).scrollTop();
			if( !top ) return 0;
			top += 200;
			var len = self.range.length;
			for( var i = 0; i < len; i++ ){
				var _top = self.range[ i ];
				if( _top >= top ) return i - 1;
			}
			return len - 1;
		},

		checkNav : function( i ){
			var self = this;
			var li = self.nav.eq( i );
			if( li.hasClass('checked') ) return;
			li
				.addClass('checked')
				.siblings('.checked').removeClass('checked');
		}
	};

	return Nav;
});