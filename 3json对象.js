
// # json对象
// # 有网络请求发送，就很有可能用到json对象


// 将对象转换为字符串，output：{"username": "sfhfpc", "password": "123456"}
var params = {
    "username": "sfhfpc",
    "password": "123456"
};
console.log(JSON.stringify(params));

// 将字符串转换为对象，output：{"username": "sfhfpc", "password": "123456"} object
var params = '"username": "sfhfpc", "password": "123456"}';
console.log(JSON.parse(params), typeof(JSON.parse(params)));
