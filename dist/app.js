"use strict";
let age;
age = 50;
let nameMan;
nameMan = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var IsLoading;
(function (IsLoading) {
    IsLoading[IsLoading["LOADING"] = 0] = "LOADING";
    IsLoading[IsLoading["READY"] = 1] = "READY";
})(IsLoading || (IsLoading = {}));
const page = {
    load: IsLoading.READY,
};
if (page.load === IsLoading.LOADING) {
    console.log("Страница загружается");
}
if (page.load === IsLoading.READY) {
    console.log("Страница загружена");
}
let union;
union = "Text";
union = 10;
let literal;
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
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map