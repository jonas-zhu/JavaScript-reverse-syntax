
/*逆向中偶有见到， hook常用
*/


// apply, 重新定义指定对象，参数用数组传递
// output：Jor-25-Norway-0slo
let person = {
    fullInfo: function (city, country) {
        return this.name + '-' + this.age + "-" + country + '-' + city;
    }
};

let person1 = {
    name: "Jor",
    age: "25",
};

console.log(person.fullInfo.apply(person1, ["0slo", "Norway"]));


// call, 重定义指定的对象，可以直接传参
// output：Jor-25-Norway-0slo
let person = {
    fullInfo: function (city, country) {
        return this.name + '-' + this.age + "-" + country + '-' + city;
    }
};

let person1 = {
    name: "Jor",
    age: "25",
};

console.log(person.fullInfo.call(person1, ["0slo", "Norway"]));

