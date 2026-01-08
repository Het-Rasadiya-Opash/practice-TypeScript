const chaiFlavour = ["masala", "lemon", "ginger"];
const chaiPrice = [20, 25];
const rating = [4.5, 5];
//array of object
const menu = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 25 },
];
menu.push({ name: "Lemin", price: 30 });
const cities = ["Delhi", "Jaipur"];
// cities.push("Mumbai"); // readonly property
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(table);
let chaiTuple;
chaiTuple = ["Masala", 23];
let userInfo;
userInfo = ["het", 1];
const location = [28.66, 32.22];
const chaiItems = ["masala", 20];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVE"] = 101] = "SERVE";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
var RandomENum;
(function (RandomENum) {
    RandomENum[RandomENum["ID"] = 1] = "ID";
    RandomENum["NAME"] = "User";
})(RandomENum || (RandomENum = {}));
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["HIGH"] = 3] = "HIGH";
})(Sugar || (Sugar = {}));
const s = Sugar.HIGH;
let t = ["chai", 10];
t.push("sugar");
export {};
//# sourceMappingURL=arrayTupleEnum.js.map