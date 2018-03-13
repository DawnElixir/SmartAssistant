$(document).ready(function(){
    $("#trans").on("click",trans);
    $("#chat").on("click",chat);
    //监听回车
    $("#centerInput").bind("keydown",function(e){
        // 监听回车兼容FF和IE和Opera
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            //回车发送
            $("#chat").click();
        }
    });
});


function trans() {
    var appid = '20180307000132354';
    var key = 'F8JG1o8hamrCXreDWpWa';
    var salt = (new Date).getTime();
    var query = $("#source").val();
    var from = 'auto';
    var to = 'zh';
    var src = $("#source").val();
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign,
            src: src
        },
        success: function (data) {
            document.getElementById("result").innerHTML = data.trans_result["0"].dst;
        }
    });

}

function chat(){
    var text = document.getElementById("source").value;
    $.ajax({
        url:"http://www.tuling123.com/openapi/api",//接口地址
        type:"post",
        dataType:"json",
        data:{
            key:'fe2bea9d100442f89ef3d383fd360a5f',//APIKey
            info:text//用户文本
        },
        success:function(data,status){
            if(data.code == "100000"){//成功
                var show = document.getElementById("result");
                var m = "<li><div><span>我：</span><span>" + text +"</span></div></li>"
                var t = "<li><div><span>稽气人：</span><span>" + data.text +"</span></div></li>";
                show.innerHTML = show.innerHTML +m + t;
                $("#source").val("");
                $("#center").animate({scrollTop:$('#center')[0].scrollHeight},500);
            }
        }
    });

}