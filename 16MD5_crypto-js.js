
const CryptoJS = require("crypto-js");

let value = "Message";
let encrypted = CryptoJS.MD5(value);

// 4c2a8fe7eaf24721cc7a9f0175115bd4
console.log(encrypted.toString());

