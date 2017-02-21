/*
 * 团购项目-团购详情js
 */

//页面加载后
$(document).ready(function(){
	//开团中获得高度
	var kwidth=$(".startSlide .teamSlideBox").width();
	$(".startSlide .teamSlideBox").height(kwidth);
	
	
})

//电话咨询
$("body").on('tap','.callTel',function(){
	var telNumb = $(this).attr("data-tel");
	location.href=telNumb;
})

//初始化swiper
var mySwiper = new Swiper ('.gdTop', {
	direction: 'horizontal',
	pagination: '.swiper-pagination',
	autoplay : 2000,
}) 

//团购详情倒计时
updateEndTime();
var updateTime;
function updateEndTime(){
	 var date = new Date();
	 var time = date.getTime();  //当前时间距1970年1月1日之间的毫秒数
	 $(".settime").each(function(){
		 var endDate =this.getAttribute("data-time"); //结束时间字符串
		 //转换为时间日期类型
		 var endDate1 = eval('new Date(' + endDate.replace(/\d+(?=-[^-]+$)/, 
		 function (a) {  
		 	return parseInt(a, 10) - 1; 
		 	}).match(/\d+/g) + ')'
		 );
		 var endTime = endDate1.getTime(); //结束时间毫秒数
		 var lag = (endTime - time) / 1000; //当前时间和结束时间之间的秒数
		  if(lag > 0){
			   var second = Math.floor(lag % 60);   
			   var minite = Math.floor((lag / 60) % 60);
			   var hour = Math.floor((lag / 3600) % 24);
			   var day = Math.floor((lag / 3600) / 24);
			   
			   if(second<10){second = "0" + second;}
			   if(minite<10){minite ="0" + minite;}
			   if(hour<10){hour ="0" + hour; }
			   if(day<10){day ="0" + day;}
			   $(this).html('<i>'+day+'</i><b>天</b><i>'+hour+'</i><b>时</b><i>'+minite+'</i><b>分</b><i>'+second+'</i><b>秒</b>');
		  }else{
		  		clearTimeout(updateTime);
		  		$(this).html('<i>00</i><b>天</b><i>00</i><b>时</b><i>00</i><b>分</b><i>00</i><b>秒</b>');
				return false; 
		  }
		   
	 });
	 updateTime =  setTimeout(function(){  updateEndTime()},1000);
	
}

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




