
/*
return 也有语法的
逆向中常见到多行return
骚气的很呢
*/


// 单行return，这很常规
function _tokenValue(v) {
    // 假装这里对着V值一顿转换和操作
    let _token = v.json("-");
    return _token
}
console.log(_tokenValue([56, 78, 33]));

// 多行return-1，return处给了多个值，但是真正返回的只有最后一个
// output：56-78-33
function first() {
    console.log("调用我，我很骚气");
    return "first";
}

let second = function () {
    console.log("调用我，我很傲气");
    return "second";
}

function _tokenvalue(v) {
    // 假装这里对着V值一顿转换和操作
    let _token = v.join("-");
    return first(),
        second(),
        _token;
}
console.log(_tokenValue([56, 78, 33]));

// 多行return-2，output：second
// 跟上面是一样的， 只不过换了一个案例对比，依旧只返回最后一个
function first() {
    console.log("调用我，我很骚气");
    return "first";
}

let second = function () {
    console.log("调用我，我很傲气");
    return "second";
}

function _tokenvalue(v) {
    // 假装这里对着V值一顿转换和操作
    let _token = v.join("-");
    return first(),
        _token,
        second();
}
console.log(_tokenValue([56, 78, 33]));
