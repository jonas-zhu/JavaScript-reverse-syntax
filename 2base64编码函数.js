
// base64 编码函数
// 逆向几乎天天见


// 内置函数btoa, output：aGVsbG8=
let value = "hello";
console.log(btoa(value));

// 内置函数atob, output：hello
let value = "aGVsbG8=";
console.log(atob(value));

// 使用第三方库实现，例如CryptoJS， output：aGVsbG8=
const CryptoJS = require("crypto-js");

let value = 'hello';
let trans = CryptoJS.enc.Utf8.parse(value);
let encrypted = CryptoJS.enc.Base64.stringify(trans);
console.log(encrypted);

// 自己编写一套base64编码算法和解码算法
function Base64() {
    this.encode = function(val) {
        // 编码逻辑
        return val
    }
    this.decode = function(val) {
        // 解码逻辑
        return val
    }
}
encrypt = new Base64();
console.log(encrypt.encode("encode"));



