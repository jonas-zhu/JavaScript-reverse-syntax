
const CryptoJS = require("crypto-js");

// 编码
let value = "123456";
let trans = CryptoJS.enc.Utf8.parse(value);
let encrypted = CryptoJS.enc.Base64.stringify(trans);

// 解码
let trans_encrypted = CryptoJS.enc.Base64.parse(encrypted);
let decrypted = trans_encrypted.toString(CryptoJS.enc.Utf8);

/*
打印明文、编码结果和解码结果
 */

console.log(value);
console.log(encrypted);
console.log(decrypted);

