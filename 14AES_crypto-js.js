/*AES 加密算法是一种对称加密算法
AES加密过程涉及到4种操作，分别是字节替代、行移位、列混淆和轮密钥加。
解密过程分别为对应的逆操作。由于每一步操作都是可逆的，按照相反的顺序进行解密即可恢复明文。
加解密中每轮的密钥分别由初始密钥扩展得到。
算法中16个字节的明文、密文和轮密钥都以一个4x4的矩阵表示。
https://blog.csdn.net/qq_38289815/article/details/80900813
 CryptoJS为JavaScript库，提供了各种各样的加密算法，包括MD5、SHA1、SHA256、AES、Rabbit等
*/

window = this;
navigator = {};

// 导入第三方加密模块jsencrypt
const CryptoJS = require("crypto-js");


let value = '123456'; // 待加密的字符串
let secret_value = 'af25-87hk-a35v-5'; // 一个字符8位，AES支持3种长度的密钥：128位、192位、256位
let iv_value = '1234-87hk-a35v-5'; // 初始化向量 initial vector 16


// 密钥和初始化向量处理
let secret = CryptoJS.enc.Utf8.parse(secret_value);
let iv = CryptoJS.enc.Utf8.parse(iv_value);
// let secret = secret_value;
// let iv = iv_value;
// 加密
let encrypted = CryptoJS.AES.encrypt(value, secret, {
    iv: iv,
    // 工作模式：mode支持CBC、CFB、CTR、ECB、OFB，默认CBC，常用CBC、ECB（不含iv参数）
    mode: CryptoJS.mode.CBC,
    // 填充模式：NoPadding、PKCS7Padding、ZeroPadding, 默认PKCS7，即Pkcs5
    padding: CryptoJS.pad.Pkcs7
});

// 将加密结果转换为字符串
encrypted = encrypted.toString();

// 解密：传入密文、密钥和向量并设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    // iv、mode、padding要与加密的一致
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

// 将解密结果转换为utf8字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

/* 打印明文、密文和解密结果
123456
+dzxYavI9ATFL3uYPmz6vg==
123456
*/

console.log(value);
console.log(encrypted);
console.log(decrypted);
