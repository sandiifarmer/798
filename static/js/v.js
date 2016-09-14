define(['validate'], function(validate){
var row = $('.am-row');
var ul = $('.work-ul');
var one = $('.edit-one');

var option = {
	'admin-a' : [
		{
			type : 'empty',
			input : row.eq( 0 ).children('input'),
			tip : '请输入邮箱'
		},{
			type : 'empty',
			input : row.eq( 1 ).children('input'),
			tip : '请输入手机号'
		},{
			type : 'len',
			input : row.eq( 2 ).children('input'),
			rule : [6,8],
			tip : '密码须为6-8位字符'
		},{
			type : 'equal',
			input : [
				row.eq( 2 ).children('input'),
				row.eq( 3 ).children('input')
			],
			tip : '两次输入的密码不相同'
		},{
			type : 'check',
			input : row.eq( 6 ).children('.am-right').children('i').children('input'),
			tip : '请选择开设课程'
		},{
			type : 'check',
			input : row.eq( 7 ).children('.am-right').children('i').children('input'),
			tip : '请选择学生年龄'
		},{
			type : 'empty',
			input : row.eq( 8 ).children('.am-icon-hidden'),
			tip : '请上传头像'
		},{
			type : 'check',
			input : row.eq( 9 ).children('.am-right').children('i').children('input'),
			tip : '请选择语言'
		}
	],
	'modify-a' : [
		{
			type : 'empty',
			input : row.eq( 1 ).children('input'),
			tip : '请输入手机号'
		},{
			type : 'check',
			input : row.eq( 4 ).children('.am-right').children('i').children('input'),
			tip : '请选择开设课程'
		},{
			type : 'check',
			input : row.eq( 5 ).children('.am-right').children('i').children('input'),
			tip : '请选择学生年龄'
		},{
			type : 'empty',
			input : row.eq( 7 ).children('.am-icon-hidden'),
			tip : '请上传头像'
		},{
			type : 'check',
			input : row.eq( 8 ).children('.am-right').children('i').children('input'),
			tip : '请选择语言'
		}
	],
	'admin-s' : [
		{
			type : 'len',
			input : row.eq( 0 ).children('input'),
			rule : [11,11],
			tip : '电话不正确'
		},{
			type : 'empty',
			input : row.eq( 1 ).children('input'),
			tip : '请输入邮箱'
		},{
			type : 'len',
			input : row.eq( 2 ).children('input'),
			rule : [6,8],
			tip : '密码须为6-8位字符'
		},{
			type : 'equal',
			input : [
				row.eq( 2 ).children('input'),
				row.eq( 3 ).children('input')
			],
			tip : '两次输入的密码不相同'
		},{
			type : 'empty',
			input : row.eq( 4 ).children('.am-icon-hidden'),
			tip : '请上传头像'
		},{
			type : 'empty',
			input : row.eq( 5 ).children('input'),
			tip : '请输入姓名'
		}
	],
	'modify-s' : [
		{
			type : 'empty',
			input : row.eq( 1 ).children('input'),
			tip : '请输入邮箱'
		},{
			type : 'empty',
			input : row.eq( 2 ).children('input'),
			tip : '请输入姓名'
		},{
			type : 'empty',
			input : row.eq( 3 ).children('.am-icon-hidden'),
			tip : '请上传头像'
		}
	],
	'edit' : [
		{
			type : 'len',
			input : one.eq( 1 ).children('input'),
			rule : [6,8],
			tip : '密码须为6-8位字符'
		},{
			type : 'equal',
			input : [
				one.eq( 1 ).children('input'),
				one.eq( 2 ).children('input')
			],
			tip : '两次输入的密码不相同'
		}
	]
};

var pageName = $('#page-name').attr('data-page-name');
var opt = option[ pageName ];
if( opt ) validate( opt );

});