
// Array基本操作
// 逆向中常见到，尤其是验证码轨迹参数等，一般都会添加到数组


// 定义一个空数组-1
let mousePos = [];

// 定义一个空数组-2
let mousePos = new Array();

// 向数组添加元素，output：[[100, 50, 1586998787]]
mousePos.push([100, 50, 1586998787]);
console.log(mousePos);

// 删除并返回一个元素，output: [100, 50, 1586998787]
console.log(mousePos.pop());

// 数组转字符串-1，output:
// 100, 50, 1586998787; 103,51, 1586998789; 106，50, 1586998793; 110, 50, 1586998797; 117, 49, 1586998808
let mousePos = new Array();
mousePos.push([100, 50, 1586998787]);
mousePos.push([100, 50, 1586998789]);
mousePos.push([100, 50, 1586998793]);
mousePos.push([100, 50, 1586998797]);
mousePos.push([100, 50, 1586998808]);
console.log(mousePos.join(";"));

// 数组转字符串-2，output：
// 100, 50, 1586998787; 103,51, 1586998789; 106，50, 1586998793; 110, 50, 1586998797; 117, 49, 1586998808
let mousePos = new Array();
mousePos.push([100, 50, 1586998787]);
mousePos.push([100, 50, 1586998789]);
mousePos.push([100, 50, 1586998793]);
mousePos.push([100, 50, 1586998797]);
mousePos.push([100, 50, 1586998808]);
console.log(mousePos.toString());


// 其他方法请查询文档
