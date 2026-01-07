"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMsg(msg) {
    if (typeof msg === "string") {
        return `${msg} is String`;
    }
    return `${msg} is Number`;
}
console.log(getMsg("het"));
function sendMsg(msg) {
    if (msg) {
        return `Send Msg -> Receved : ${msg}`;
    }
    return `Msg not sending`;
}
console.log(sendMsg("Hello"));
function orderFood(item) {
    if (item === "Panipuri") {
        return `Panipuri`;
    }
    if (item == "Burger") {
        return `Burger`;
    }
    return `item order ${item}`;
}
console.log(orderFood("Panipuri"));
class drink {
    serve() {
        return `Serving Drink`;
    }
}
class softDrink {
    serve() {
        return `Serving Soft Drink`;
    }
}
function serve(d) {
    if (d instanceof drink) {
        return d.serve();
    }
    return d.serve();
}
console.log(serve(new drink()));
function makeFood(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
const cha = {
    type: "Milk",
    sugar: 100,
};
console.log(makeFood(cha));
function serveOrder(item) {
    if (makeFood(item)) {
        return `Serving ${item.type} ${item.sugar}`;
    }
    return `${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            console.log("Masala Chai making");
            break;
        case "ginger":
            console.log("Ginger Chai making");
            break;
        case "elaichi":
            console.log("Elaichi Chai makin");
            break;
    }
}
MakeChai({ type: "masala", spicelevel: 1 });
function brew(order) {
    if ("spicelevel" in order) {
    }
}
// function isStringArray(arr: unknown): arr is string[]{
// };
//# sourceMappingURL=typeNarrrowing.js.map