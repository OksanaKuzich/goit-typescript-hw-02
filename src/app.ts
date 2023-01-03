let age: number;
age = 50;

let nameMan: string;
nameMan = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

// Tuple - неизменяемый массив
let person: [string, number];
person = ["Max", 21];

// Enum
enum IsLoading {
  LOADING,
  READY,
}
const page = {
  load: IsLoading.READY,
};
if (page.load === IsLoading.LOADING) {
  console.log("Страница загружается");
}
if (page.load === IsLoading.READY) {
  console.log("Страница загружена");
}

// Union Type
let union: string | number;
union = "Text";
union = 10;

// Literal Type
let literal: "enable" | "disable";
literal = "enable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type pageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};
const page1: pageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};
const page2: pageType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
