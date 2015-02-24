
	$(document).ready(function() {
       	$("#menucontainer a, #cssmenu a").bind("click",function(event){
           event.preventDefault();
           var target = $(this).attr("href");
           /********* MENU CONTROLLER ***********/
 			if(target!='#home'){
           		//console.log('home is not here');
	           	var winheight =  0.76*$(window).height();
	           	//console.log('height is '+winheight);
	           	$("#cssmenu").stop().animate({
	           		top:winheight
	           	}, 700);
	           	
           }else{
           		//console.log('home IS here');
           		var winheight =  $(window).height();
	           	//console.log('height is '+winheight);
	           	$("#cssmenu").stop().animate({
	           		top:winheight
	           	}, 700);
	           	
           }

           /************ BOARD CONTROLLER ****************/
           if(target!='#events'){
           		var bheight = $(".board").offset().top;
           		//console.log('panel top height '+bheight);
           		$(".board").stop().animate({
           			top:-100
           		},1500);
           }else{
           		$(".board").stop().animate({
           			top:0
           		},2500);
           }	


           $("html, body").stop().animate({
               scrollLeft: $(target).offset().left,
			   scrollTop: $(target).offset().top
           }, 1200);

           /***** Wave Motions Control ******/

           //console.log($(window).width()+"-->"+$(target).offset().left);
           var shiftWave1 = 0.1*$(window).width();
           var offsetWave1 = $(target).offset().left * 0.2;
           //console.log(-offsetWave1-shiftWave1);
           $(".wave1").stop().animate({
           		left : -offsetWave1-shiftWave1
           }, 1500);

           var shiftWave2 = 0.07*$(window).width();
           var offsetWave2 = $(target).offset().left * 0.05; 
           //console.log(-offsetWave2-shiftWave2);
           $(".wave2").stop().animate({
           		left : -offsetWave2-shiftWave2
           }, 1500);

           $(".island").stop().animate({left: -$(target).offset().left},1200);
           $(".social_baloon").stop().animate({left: -$(target).offset().left},1200);
       	});
		
		/******* Home Page Menu Control ******/
		$("#box1").hover(
		function() {
			$(this).css("height","35%");
			$("#box2, #box3, #box4, #box5").css("height","15%");
		}, function () {
			$("#box1, #box2, #box3, #box4, #box5").css("height","19.5%");
			}
		);

		$("#box2").hover(
			function() {
				$(this).css("height","35%");
				$("#box1, #box3, #box4, #box5").css("height","15%");
			}, function () {
				$("#box1, #box2, #box3, #box4, #box5").css("height","19.5%");
			}
		);

		$("#box3").hover(
			function() {
				$(this).css("height","35%");
				$("#box1, #box2, #box4, #box5").css("height","15%");
			}, function () {
				$("#box1, #box2, #box3, #box4, #box5").css("height","19.5%");
			}
		);

		$("#box4").hover(
			function() {
				$(this).css("height","35%");
				$("#box1, #box2, #box3, #box5").css("height","15%");
			}, function () {
				$("#box1, #box2, #box3, #box4, #box5").css("height","19.5%");
			}
		);

		$("#box5").hover(
			function() {
				$(this).css("height","35%");
				$("#box1, #box2, #box3, #box4").css("height","15%");
			}, function () {
				$("#box1, #box2, #box3, #box4, #box5").css("height","19.5%");
			}
		);
		


		/** panel control ***/
		$("#pbox1 a").bind("click",function(event){
			event.preventDefault();
		   	/* up working **/
			var nhei = (((-1)*$("#pbox2").offset().top)-(2*$(window).height()));
			$("#pbox2,#pbox3,#pbox4,#pbox5").animate({
				top:nhei
			},1500);
			var x=(-1)*($("#pbox1").offset().left-$("#panelcontainer").offset().left);
			$("#pbox1").stop().animate({
				left:x

			},1500);
			console.log("dist from left is "+$("#pbox2").offset().left+' dist of panel is '+$("#secondpanel").offset().left+' dist of board is '+$("#board2").offset().left);
			/**/
		});
		$("#pbox2 a").bind("click",function(event){
			event.preventDefault();
		   	/* up working **/
			var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
			$("#pbox1,#pbox3,#pbox4,#pbox5").stop().animate({
				top:nhei
			},1500);
			//$("#pbox2,#secondpanel").css("z-index",6015);
			//$("#board2").css("z-index",6016);
			var x=(-1)*($("#pbox2").offset().left-$("#panelcontainer").offset().left);
			$("#pbox2").stop().animate({
				left:x
			},1500);
			console.log("dist from left is "+$("#pbox2").offset().left+' dist of panel is '+$("#secondpanel").offset().left+' dist of board is '+$("#board2").offset().left);
			/**/
		});
		$("#pbox3 a").bind("click",function(event){
			event.preventDefault();
		   	/* up working **/
			var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
			$("#pbox1,#pbox2,#pbox4,#pbox5").stop().animate({
				top:nhei
			},1500);
			var x=(-1)*($("#pbox3").offset().left-$("#panelcontainer").offset().left);
			$("#pbox3").stop().animate({
				left:x
			},1500);
			/**/
		});
		$("#pbox4 a").bind("click",function(event){
			event.preventDefault();
		   	/* up working **/
			var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
			$("#pbox1,#pbox2,#pbox3,#pbox5").stop().animate({
				top:nhei
			},1500);
			var x=(-1)*($("#pbox4").offset().left-$("#panelcontainer").offset().left);
			$("#pbox4").stop().animate({
				left:x
			},1500);
			/**/
		});
		$("#pbox5 a").bind("click",function(event){
			event.preventDefault();
		   	/* up working **/
			var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
			$("#pbox1,#pbox2,#pbox3,#pbox4").stop().animate({
				top:nhei
			},1500);
			var x=(-1)*($("#pbox5").offset().left-$("#panelcontainer").offset().left);
			$("#pbox5").stop().animate({
				left:x
			},1500);
			/**/
		});

		/**** register button control *****/
		$("#regbutton").bind("click",function(event){
			event.preventDefault();
			console.log('the top value is '+$("#regbutton").offset().top);
			console.log('the outertrue form is '+$("#reg_embeddform").outerHeight(true)+' and outerh is '+$("#reg_embeddform").outerHeight());
			$("#reg_embeddform").css('visibility','visible');
		});
	});