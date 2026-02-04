// JavaScript Document
var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',function(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(username === '奔赴' || password === '123456'){
		alert("登陆成功……即将跳转")
		window.location.href = 'https://www.1024txt.com/book/600105/'
		
	}else{
	alert('用户名或密码错误，请重试！')
	return;
		}
})
