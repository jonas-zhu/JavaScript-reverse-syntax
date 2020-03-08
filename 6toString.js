
// toString()在逆向中非常常见

// 对象转字符串， output： 5，6，8
let param = [5,6,8];
console.log(param.toString());

// 字符转二进制，output：110， 数字6的二进制为0000 0110
let value = 6;
console.log(param.toString());

// 字符转十六进制，output：1a。数字26的十六进制为1A
let value = 26;
console.log(value.toString(16));

// 布尔值转换字符串，output: false
let value = false;
console.log(value.toString());

// 判断类型，output：[object Array]
let arr = [1,2,3];
console.log(toString.call(arr));
