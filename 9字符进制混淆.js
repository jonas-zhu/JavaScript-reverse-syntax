
// 几乎每天都在逆向的时候看到混淆


// 十六进制混淆
let objects = {
    "\x66\x69\x74\x65\x72": function () {
        // 假装这里一顿操作
        return "\x6c\x74\x65";
    }
};

// unicode混淆
let object = {
    "\u0073\u0069\u0067\u006e\u0056\u0061\u006c\u0075\u0065":function () {
        // 假装1这里一顿操作
        return "ENG987KJS732njH7273NH23"
    }
};


// 数组混淆，将字符串放在数组中，通过下标访问
// SI209U+230D86+7NB-1
// http://www.sfhfpc.com/?SI209U+230D86+7NB=_

let vales = ["sign", "publicKey", "Base64", "encrypt", "toString", "decode", "atob", "btoa"];
let url = "http://www.sfhfpc.com/";
vales[0] = "SI209U+230D86+7NB=";
let full = url + "?" + vales[0] + "_";
console.log(vales[0]);
console.log(full);

// 变量名混淆
// SI209U+230D86+7NB-1
// http://www.sfhfpc.com/?SI209U+230D86+7NB=_
let _sh78x6 = ["sign", "publicKey", "Base64", "encrypt", "toString", "decode", "atob", "btoa"];
let _ac87x5 = "http://www.sfhfpc.com/";
_sh78x6[0] = "SI209U+230D86+7NB=";
let _ac87x6 = _ac87x5 + "?" + _sh78x6[0] + "_";
console.log(_sh78x6[0]);
console.log(_ac87x6);

// 数组+十六进制——Unicode+变量名混淆
let _sh78x6 = ["\x73\x69\x67\x6e", "\x70\x75\x62\x6c\x69\x63\x4b\x65\x79", "\x42\x61\x73\x65\x36\x34",
"\x5f\x61\x63\x38\x37\x78\x35"];
_sh78x6[3] = "\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0073\u0066\u0068\u0066\u0070\u0063\u002e\u0063\u006f\u006d\u002f";
_sh78x6[0] = "\u0053\u0049\u0032\u0030\u0039\u0055 \u002b\u0032\u0033\u0030\u0044\u0038\u0036 \u002b\u0037\u004e\u0042\u003d";
let _ac87x6 =_sh78x6[3] + "\x3f" +_sh78x6[0] + "\x5f";
function _$BCD( ){
    // 假装这里有很多操作
    return _sh78x6[4]
}
console.log(_sh78x6[0]);
console. log(_ac87x6);
console. log(_$BCD);




