/*
 * 团购项目-团购活动js
 */

//团购倒计时
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

function pullDownAction(){
	console.log("上拉加载")
}


