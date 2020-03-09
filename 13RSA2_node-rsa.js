/*
node-rsa模块：后端用的nodejs(express)框架，因为crypto模块需要利用OpenSSL库来实现它的加密技术，我选择了 node-rsa模块；

jsencrypt模块：前端自然是用jsencrypt模块，这个也可以用script引入html使用，因为我是用webpack写的，所以直接在文件中引入jsencrypt模块；
*/

// 后端代码
const   express = require('express');
const   app = express();
const 	NodeRSA = require('node-rsa');
const 	newkey = new NodeRSA({b: 1024});
	  	newkey.setOptions({encryptionScheme: 'pkcs1'});	//因为jsencrypt自身使用的是pkcs1加密方案,只有从后台改咯
let   	public_key = newkey.exportKey('pkcs8-public'),//公钥,
	  	private_key = newkey.exportKey('pkcs8-private'); //私钥
   	  	console.log({a:public_key,b:private_key});
let   	pubkey = new NodeRSA(public_key),
	  	prikey = new NodeRSA(private_key);
	  	pubkey.setOptions({encryptionScheme: 'pkcs1'});//因为jsencrypt自身使用的是pkcs1加密方案,只有从后台改咯
	  	prikey.setOptions({encryptionScheme: 'pkcs1'});//因为jsencrypt自身使用的是pkcs1加密方案,只有从后台改咯
// 	   	加密 	&&	  解密方法
//		let encrypted = pubkey.encrypt(yourstring,'base64');
//		var decrypted = prikey.decrypt(encrypted, 'utf8');
let   	body_parse =  function(req){
	  	return JSON.parse(Object.keys(req.body)[0]+req.body[Object.keys(req.body)[0]])
};
let   	decrypted = function(req,eve,_attr){
	 	 var _user = body_parse(req)[_attr],//_attr是传输回来的对象中装有密文的属性
			str = Buffer.from(_user, 'base64').toString().replace(/%$#%/g,"+");//转回符号'+'
	 	 var 	data = JSON.parse(prikey.decrypt(str, 'utf8')); //后端解密
	  	if(eve){
		 	eve(data);
	  	}
};

// 前端代码
const JSEncrypt = require("jsencrypt"); // 引入模块
const obj = {username:"sweetheart",password:"mylove"};
const jencrypt = new JSEncrypt.JSEncrypt(); // 实例化加密对象
localStorage.setItem("crosspu",data['crosspu']);
jencrypt.setPublicKey(localStorage.getItem("crosspu"));
var encryptoPasswd = jencrypt.encrypt(JSON.stringify(obj)) // 加密明文
//因为base64传输到后台的时候"+"号被会转为空格，故而需要先替换，后台解析的时候转回来
var rr ={imfor:btoa(encryptoPasswd).replace(/\+/g,"%$#%")}


window = this;
navigator = {};
const NodeRSA = require("node-rsa");
const key = new NodeRSA({b: 128});

const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
const decrypted = key.decrypt(encrypted, 'utf-8');


console.log(encrypted);
console.log(decrypted);

