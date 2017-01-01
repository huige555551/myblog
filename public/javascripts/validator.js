//
// var validator = {
// 	form : {
// 		username:{
// 			status : false,
// 			errorMessage : "用户名6~18位英文字母、数字或下划线，必须以英文字母开头!"
// 		}
// 		,
// 		studentId:{
// 			status : false,
// 			errorMessage : "学号8位数字，不能以0开头"
// 		}
// 		,
// 		password:{
// 			status : false,
// 			errorMessage : "密码为6~12位数字、大小写字母、中划线、下划线"
// 		}
// 		,
// 		repeatPassword:{
// 			status : false,
// 			errorMessage : "两次密码输入一致"
// 		}
// 		,
// 		telephone:{
// 			status : false,
// 			errorMessage : "电话11位数字，不能以0开头"
// 		}
// 		,
//
// 		email:{
// 			status : false,
// 			errorMessage : "邮箱格式不对"
// 		}
// 	},
// 	isUsernameValid:function (username){
// 		return /^[a-zA-Z][a-zA-Z_0-9]{5,18}$/.test(username);
// 	},
// 	isRepeatpasswordValid:function (password){
// 		return $("#password").val()==password;
// 	},
// 	isPasswordValid:function (password){
// 		return /^[a-zA-Z][a-zA-Z0-9_\-]{5,12}$/.test(password);
// 	},
// 	isStudendIdValid:function (studentId){
// 		return /^[1-9]\d{7}$/.test(studentId);
// 	},
// 	isTelephoneValid:function (telephone){
// 		return /^[1-9]\d{10}$/.test(telephone);
// 	},
// 	isEmailValid:function (email){
// 		return /^[a-zA-Z_\-\d]+@(([a-zA-Z_\-\d])+\.)+[a-zA-Z]{2,4}$/.test(email);
// 	},
// 	showMessage:function (e,message){
// 		$(e).next().text(message).css("color","red");
// 	},
// 	formIsvalued:function (username,password,repeatPassword,studentId,telephone,email)
// 	{
// 		return (this.isUsernameValid(username)&&this.isRepeatpasswordValid(repeatPassword)&&this.isPasswordValid(password)&&this.isStudendIdValid(studentId)&&this.isTelephoneValid(telephone)&&this.isEmailValid(email));
// 	},
//
// 	hiddenMessage:function (e)
// 	{
// 		$(e).next().text('').hide();
// 	}
//
// };
// if(typeof module=='object')
// 	module.exports = validator;