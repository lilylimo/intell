/*
 * 团购项目-团购订单js
 */

//页面加载后
$(document).ready(function(){
	//
	
	
})

//分页导航切换
var orderIndex="";
$(".orderHeard").on("tap","li",function(){
	orderIndex = $(this).index();
	$(this).addClass("active").siblings("li").removeClass("active");
})

//下拉刷新
function pullDownAction(){
	console.log("上拉加载")
}











