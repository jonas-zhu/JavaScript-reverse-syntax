
// 函数相关
// 逆向天天见，各种骚操作由此衍生


// 函数自动执行-1
(function auto() {
    console.log("自动执行");
})();

// 函数自动执行-2
$(function auto() {
    console.log("自动执行");
});

// 函数调用
function second() {
    console.log(first());
}
function first() {
    return "Hi there.";
}

// 函数定义-1
function say1() {
    return "定义函数";
}

// 函数定义-2
var say2 = function () {
    return "定义函数";
}

// 函数定义-3
var obj = {
    "say": function () {
        return "对象内的成员";
    }
};

