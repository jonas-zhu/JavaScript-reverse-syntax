// RSA加密算法是一种非对称加密算法

window = this;
navigator = {};

// 导入第三方加密模块jsencrypt
const JSEncrypt = require("C:/Users/41520/jsencrypt/bin/jsencrypt");

// 场景：服务端向用户端传输数据。
// 设置用户端的私钥和公钥（用于加密解密）
// 公钥
const Public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVpyfPkWhxi1n5+Ir0zXJDDm0QjwQzKiXvxrhNlXCojekz3PyUnCAgU0S50hsTynJp+Xe4usPswMP+pPUZ99N/EZEXwxmcgPFXpgMxPedvTvyRIxpjfOOnOzgWO30CaEp7P6WNgunw5mXz302oA0xbuOQm97vQtKZbloEm0iWVgwIDAQAB";
// 私钥
const Private_key = "MIICXAIBAAKBgQCVpyfPkWhxi1n5+Ir0zXJDDm0QjwQzKiXvxrhNlXCojekz3PyUnCAgU0S50hsTynJp+Xe4usPswMP+pPUZ99N/EZEXwxmcgPFXpgMxPedvTvyRIxpjfOOnOzgWO30CaEp7P6WNgunw5mXz302oA0xbuOQm97vQtKZbloEm0iWVgwIDAQABAoGAPuYPpH0wEbEJMzgUZ0nGQYrZqkEB+eM4KKw0IF+0BxQGNQcnnep00kFNPHCjctD+/62bdSgCWwq2FdwNLEnuOOuhYRHa1jbtmoAZlO0o3/rbGtLntBNs7Tl4C/cdOe0SZxHC/3kY8XB+5rfGuB0pdUHdChIicbU/ETSVt+vYa6ECQQD5rd6Y9h/Ds8rkyAlcjvbwL1aysA9hYS44ACK2qKMpR7npuREIuPNe0uIFLKVpT+oHMw2UL6lSbnuDgE02cl/RAkEAmXEIOuo6HRJDpIC/hYren8ZAZXsYSnP6PYaes460aZoAp0EArDBHbjLzTlqroWW2R6x4r8yLF2BwWw87dVApEwJBAMKppJttiWZzjwTAUUwwyqaIwfee/N7Xfcl7kZUH9e4BVhm7iGRcjqKnmECghnaNL9FdJIEch88VBIeKSKjik4ECQDe2pvpdWcR8gTsV1HS0u6jf3zn5vBQskEwOuUkRI8jENkCEha3/ya/lqBpnKbJssAbORPPwHQDb72/g1AIAnSkCQDuDTIv6lUc2SxWSxuUJspH+IPOf4BgoFtE1T55FB5xqKROu28Ykq2MUZx+IZ7D5oOj6mB2DAWZ3gWnIZmg4zAM=";
// 服务端向用户端传输的明文
const value = "1234567890";

// 初始化加密库
let encrypt = new JSEncrypt.JSEncrypt();

// 服务端使用用户端的公钥对明文进行加密加密
encrypt.setPublicKey(Public_key);
//加密明文数据
let rsaencode = encrypt.encrypt(value);
// 打印加密好的密文
console.log(rsaencode);

// 用户端使用自己的私钥解密密文
let decrypt = new JSEncrypt.JSEncrypt();
decrypt.setPrivateKey(Private_key);
// let rsaencode = "dkdQzM/h7DRaSYY0t/KQQ5GPDVXFr9TYV1hZjiRKGvtMGqlQXmTKHTA91zcc8CrihycqdAJixz3SCABmX5BHjpJrZvImYP2uJPyIE/2/rzOy1ZyHC6RxJKHKu3N4RDdYS3vxmTaThd9238rG8cqyhuezT9x/ccaIZftYLINB6/w="
let rsadecode = decrypt.decrypt(rsaencode);
console.log(rsadecode);
