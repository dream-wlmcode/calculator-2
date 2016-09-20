$(function(){
	var numJoin = '';
	var operator = '';
	var numJoinf = '';
	var result = '';
	//清屏
	$("#clear").click(function(){
		numJoin = '0';
		$("#show").html(numJoin);
	});



	//显示屏数字拼接
	$(".num").click(function(){
		if(operator=='.'){
			numJoin = '';
			numJoinf = '';
			result = '';
			operator = '';
		}

		if($(this).html()=='.'){
			if(numJoin.indexOf('.')<0){
				numJoin += $(this).html();
				$("#show").html(numJoin);		
			}
		}else{
			numJoin += $(this).html();
			$("#show").html(numJoin);
		}

		//0不能作为第一个数字显示
		if(numJoin.indexOf('0')==0){
			if(numJoin.indexOf('.')!=1){
				numJoin = numJoin.substring(1,numJoin.length);
				$("#show").html(numJoin);
			}else{
				numJoin = numJoin.substring(0,numJoin.length);
				$("#show").html(numJoin);
			}
		}		

	});

	//清除一个数字
	$("#clearOne").click(function(){
		numJoin = numJoin.substring(0,numJoin.length-1);
		$("#show").html(numJoin);
		if(numJoin == ''){
			numJoin = '0';
			$("#show").html(numJoin);
		}
	});

	//+-×÷
	$("#plus").click(function(){
		operator = '+';
		numJoinf = numJoin;
		numJoin = '';
	});

	//减法
	$("#minus").click(function(){
		operator = '-';
		numJoinf = numJoin;
		numJoin = '';
	});

	//乘法
	$("#times").click(function(){
		operator = '×';
		numJoinf = numJoin;
		numJoin = '';
	});

	//除法
	$("#divide").click(function(){
		operator = '÷';
		numJoinf = numJoin;
		numJoin = '';
	});
	

	$("#equal").click(function(){
		switch(operator){
			case '+':
				if(result==''){
					result = parseFloat(numJoinf) + parseFloat(numJoin);
					
				}else{
					result += parseFloat(numJoin);
				}
				operator = '.';
				$("#show").html(result);
				break;
			case '-':
				if(result==''){
					result = parseFloat(numJoinf) - parseFloat(numJoin);
					
				}else{
					result -= parseFloat(numJoin);
				}
				operator = '.';
				$("#show").html(result);
				break;
			case '×':
				if(result==''){
					result = parseFloat(numJoinf) * parseFloat(numJoin);
					
				}else{
					result *= parseFloat(numJoin);
				}
				operator = '.';
				$("#show").html(result);
				break;
			case '÷':
				if(result==''){
					result = parseFloat(numJoinf) / parseFloat(numJoin);
					
				}else{
					result /= parseFloat(numJoin);
				}
				operator = '.';
				$("#show").html(result);
				break;
		}
	});

	$(".num").click(function(){
		if(operator==''){

		}
	});


});