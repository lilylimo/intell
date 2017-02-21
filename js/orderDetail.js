/*
 * 团购项目-订单详情js
 */

//页面加载后
$(document).ready(function(){
	//开团中获得高度
	var kwidth=$(".startSlide .teamSlideBox").width();
	$(".startSlide .teamSlideBox").height(kwidth);
	
	
})

//上拉加载
function pullDownAction(){
	console.log("上拉加载")
}

//打开弹层方法
function openRPop(id){
	$(".rightpopBg").fadeIn();
	$("#"+id).animate({"right":"0"},500);
}
//关闭弹层方法
function closeRPop(){
	$(".rightpopBg").fadeOut();
	$(".rightPop").animate({"right":"-100%"},500);
}
//点击下箭头 打开弹层
$(".openStore").on("tap",function(){
	openRPop("storePop");
});
//点击背景 关闭弹层
$(".rightpopBg").on("tap",function(){
	closeRPop();
});
//电话咨询
$("body").on('tap','.callTel',function(){
	var telNumb = $(this).attr("data-tel");
	location.href=telNumb;
})

//打开弹层方法
function openCPop(id){
	$(".centerBg").fadeIn();
	$("#"+id).fadeIn();
}
//关闭弹层方法
function closeCPop(){
	$(".centerBg").fadeOut();
	$(".codePop").fadeOut();
}
//点击亲密代付 打开弹层
$("#useNow").on("tap",function(){
	openCPop("codePop");
});
//点击背景 关闭弹层
$(".centerBg").on("tap",function(){
	closeCPop();
});




