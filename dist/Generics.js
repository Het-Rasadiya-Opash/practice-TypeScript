"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//generic Function
function WrapInArray(item) {
    return [item];
}
console.log(WrapInArray("Lemon"));
console.log(WrapInArray(32));
console.log(WrapInArray({ flavour: "Ginger" }));
//generic Function
function pair(a, b) {
    return [a, b];
}
console.log(pair("Het", 1));
const numberBox = {
    content: 9,
};
console.log(numberBox);
const nameBox = {
    content: "het",
};
console.log(nameBox);
//# sourceMappingURL=Generics.js.map