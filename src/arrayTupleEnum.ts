const chaiFlavour: string[] = ["masala", "lemon", "ginger"];
const chaiPrice: number[] = [20, 25];
const rating: Array<number> = [4.5, 5];

type Chai = {
  name: string;
  price: number;
};

//array of object
const menu: Chai[] = [
  { name: "Masala", price: 20 },
  { name: "Ginger", price: 25 },
];
menu.push({ name: "Lemin", price: 30 });

const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Mumbai"); // readonly property

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(table);

let chaiTuple: [string, number];
chaiTuple = ["Masala", 23];

let userInfo: [string, number, boolean?];
userInfo = ["het", 1];

const location: readonly [number, number] = [28.66, 32.22];

const chaiItems: [type: string, price: number] = ["masala", 20];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVE, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);

enum RandomENum {
  ID = 1,
  NAME = "User",
}

const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugar.HIGH;

let t: [string, number] = ["chai", 10];
t.push("sugar");
