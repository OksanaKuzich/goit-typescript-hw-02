var age;
age = 50;
var name;
name = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) {
    return 100 + a;
};
var anything;
anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Tuple - неизменяемый массив
var person;
person = ["Max", 21];
// Enum
var IsLoading;
(function (IsLoading) {
    IsLoading[IsLoading["LOADING"] = 0] = "LOADING";
    IsLoading[IsLoading["READY"] = 1] = "READY";
})(IsLoading || (IsLoading = {}));
var page = {
    load: IsLoading.READY
};
if (page.load === IsLoading.LOADING) {
    console.log("Страница загружается");
}
if (page.load === IsLoading.READY) {
    console.log("Страница загружена");
}
// Union Type
var union;
union = "Text";
union = 10;
// Literal Type
var literal;
literal = "enable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};