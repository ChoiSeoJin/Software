function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(".signinbtn").click(function() {
	var signupid = $("#signupid").val();
	var signuppwd = $("#signuppwd").val();
	var pwdcfm = $("#pwdcfm").val();

	var idbool = validateEmail(signupid);
	var pwdbool;
	var cfmbool;
	
	if(signuppwd.length <= 5) {
		pwdbool = 0;
	} else {
		pwdbool = 1;
	}

	if( signuppwd != pwdcfm) {
		cfmbool = 0;
	} else {
		cfmbool = 1;
	}

	if(idbool == false) {
		$('#upid').removeClass("validationinactive");
	} else {
		$('#upid').addClass("validationinactive");
	}

	if(pwdbool == 0) {
		$('#uppwd').removeClass("validationinactive");
	} else {
		$('#uppwd').addClass("validationinactive");
	}

	if(cfmbool == 0) {
		$('#upcfm').removeClass("validationinactive");
	} else {
		$('#upcfm').addClass("validationinactive");
	}


	if(idbool && pwdbool && cfmbool) {
		$.ajax({
			type:'post',
			url: '/login/addmember',
			data: {
				id:signupid,
				password:signuppwd
			},
			
			success: function(data) {
				if(data== "NO") {
					$('#upid').removeClass("validationinactive");
				} else {
					$('#inpwd').addClass("validationinactive");
					$('.fade.in').removeClass("modal-backdrop");
					$('.modal-center').css("display","");
					$('.usernamediv').text(signupid);
					$('.logindiv').addClass("tempinactive");
					$('.logoutdiv').removeClass("tempinactive");
				}
			}
		});
	}

});


$(".signinbtn").click(function() {
	var signupid = $("#signinid").val();
	var signuppwd = $("#signinpwd").val();
	$.ajax({
		type:'post',
		url: '/login/member',
		data: {
			id:signupid,
			password:signuppwd
		},		
		success: function(data) {
			if(data== "NO") {
				$('#inpwd').removeClass("validationinactive");
			} else {
				$("#loginModal").removeClass("in");
				$("#loginModal").attr("aria-hidden","true");
				$('#loginModal').css("display","");
				$('#loginModal').css("display","none");
				$('#loginModal').css("padding-right","");
				$('body').removeClass('modal-open');
				$('body').css("padding-right","");
				$('#loginModal > .modal-backdrop').remove();
				$('.usernamediv').text(signupid);
				$('.logindiv').addClass("tempinactive");
				$('.logoutdiv').removeClass("tempinactive");
				
			}
		}
	});

});

$('.logoutdiv').click(function() {
	$('.logoutdiv').addClass("tempinactive");
	$('.logindiv').removeClass("tempinactive");
	$('.usernamediv').text("");
})

