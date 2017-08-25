
		var validate = function(){
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;

		var testing_username = "gerardfierro";
		var testing_email = "gerard@gmail.com";
		var testing_password = "gerardfierro";


		if(username == '' && password == '') {
			document.getElementById('message').innerHTML = 'Please fill out both spaces';
		}
		else
			if ((username == '' && password == testing_password) || (username == testing_username && password == '')){
				document.getElementById('message').innerHTML = 'Please fill out both spaces';
			}

		else
			if((username == testing_username || username == testing_email) && password == testing_password){
				document.getElementById('message').innerHTML = 'Success!';
				 }
		else{
			document.getElementById('message').innerHTML = 'Your password or username are incorrect!';
					}



		console.log(username);
		}
