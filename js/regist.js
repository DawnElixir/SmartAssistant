function fnRegist(){
 var oUname = document.getElementById("regist_name")
 var oUpass = document.getElementById("regist_pass")
 var oError = document.getElementById("regist_error_box")
 var isError = true;
 if (oUname.value.length > 20 || oUname.value.length < 6) {
  oError.innerHTML = "用户名请输入6-20位字符";
  isError = false;
  return;
 }else if((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
  oError.innerHTML = "首字符必须为字母";
  return;
 }else for(var i=0;i<oUname.value.charCodeAt(i);i++){
  if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57) && (oUname.value.charCodeAt(i)<97)||(oUname.value.charCodeAt(i)>122)){
   oError.innerHTML = "必须为字母跟数字组成";
   return;
  }
 }

 if (oUpass.value.length > 20 || oUpass.value.length < 6) {
  oError.innerHTML = "密码请输入6-20位字符"
  isError = false;
  return;
 }
    $.ajax({
        url:"dewusang.xin:8080/api/register",
        type:"post",
        // datatype:"",
        data:{
            username: oUname,
            password: oUpass
        },
        success:function (data) {
            alert(data.result);
            window.location.href="login.html"
        },
        error:function (err) {
            alert(err);
        }
    });
}