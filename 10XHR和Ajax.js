
/*发出XHR和Ajax请求的两种方式
逆向过程中通常需要找到参数构造或者请求发送的地方
看懂语法有助于逆向
 */

// ajax
$.ajax({
    // 构造请求头
    url: loginUrl + "?uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random()
    type: "POST",
    dataType: "text",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    data: {
        // 构造请求正文
        uuid: $("#uuid").val(),
        eid: $("#eid").val(),
    },
    error: function () {
        // 错误时触发
    },
    success: function () {
        // 成功返回响应正文触发
    },

});

// XHR , XMLHttpRequest
function SendXHR() {
    // 第一步
    var xhr = new XMLHttpRequest();
    // 第二步设置发送方法
    xhr.open("GET", "http://www.sfhfpc.com/index.html?p=123");
    // 第三步设置发送数据
    xhr.send(null);
    // 第四步，回调函数，拿到服务端数据后执行相关操作
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            // 接收服务端的全部信息
            console.log(xhr,responseText);
        }
    };
}

