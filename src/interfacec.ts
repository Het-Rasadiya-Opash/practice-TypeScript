interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const masala: Chai = {
  flavour: "malsa",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Cafe",
};

interface DiscountCal {
  (price: number): number;
}
const apply50: DiscountCal = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("Stop");
  },
};

//index signature
interface ChaiRating {
  [flavour: string]: number;
}
const rating: ChaiRating = {
  masla: 5,
  ginger: 4,
};

//merge interface
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = {
  name: "het",
  age: 20,
};



interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {

}



