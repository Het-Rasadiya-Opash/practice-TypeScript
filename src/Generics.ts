//generic Function
function WrapInArray<T>(item: T): T[] {
  return [item];
}
console.log(WrapInArray("Lemon"));
console.log(WrapInArray(32));
console.log(WrapInArray({ flavour: "Ginger" }));

//generic Function
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
console.log(pair("Het", 1));

//generic Interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = {
  content: 9,
};
console.log(numberBox);
const nameBox: Box<string> = {
  content: "het",
};
console.log(nameBox);

interface ApiPromise<T> {
  status: number;
  data: T;
}
const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};


