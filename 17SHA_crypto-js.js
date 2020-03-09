
const CryptoJS = require("crypto-js");

let value = "Message";

// 加密可以切换 SHA1、SHA224、SHA256、SHA384、SHA512
let hash = CryptoJS.SHA256(value);


/*
Message
2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91
2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91
L3dmip37+NWEi57rSnFFypTG7ZI25Kdz9tyvpRMrL5E=
 */

console.log(value);
console.log(hash.toString()); // 结果与CryptoJS.enc.Hex相同
console.log(hash.toString(CryptoJS.enc.Hex));
console.log(hash.toString(CryptoJS.enc.Base64));