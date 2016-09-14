define(function(){

function checkAll( opt ){
	for( var i = 0; i < opt.length; i++ ){
		if( !checkOne( opt[ i ] ) ) return false;
	}
	return true;
}
function checkOne( o ){
	if( !checkType[ o.type ]( o ) ){
		tip( o.tip );
		return false;	
	} 
	return true;
}
var checkType = {
	len : function( o ){
		var len = $.trim( o.input.val() ).length;
		if( len < o.rule[ 0 ] ) return false;
		if( len > o.rule[ 1 ] ) return false;
		return true;
	},
	equal : function( o ){
		if( o.input[ 0 ].val() !== o.input[ 1 ].val() ) return false;
		return true;
	},
	check : function( o ){
		var len = o.input.length;
		for( var i = 0; i < len; i++ ){
			if( o.input[ i ].checked ) return true;
		}
		return false;
	},
	empty : function( o ){
		var len = $.trim( o.input.val() ).length;
		if( len ) return true;
		return false;
	}
};
function tip( tip ){
	$('.validate-tip').text( tip || '输入不正确' );
}

return function( opt ){
	$('form')
		.append('<div class="validate-tip"></div>')
		.on('submit', function(){
			if( !checkAll( opt ) ) return false;
			return true;
		});
}

});