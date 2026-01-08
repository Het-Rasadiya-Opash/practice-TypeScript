// const chai = {
//   name: "Masala Chai",
//   price: 20,
//   isHot: true,
// };

// let tea: {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// tea = {
//   name: "Ginger Tea",
//   price: 25,
//   isHot: true,
// };

// type Tea = {
//   name: string;
//   price: number;
//   ingredients: string[];
// };

// const adrakChai: Tea = {
//   name: "Adrak Chai",
//   price: 25,
//   ingredients: ["ginger", "tea leaves"],
// };

// type Cup = {
//   size: string;
// };
// let smallCup: Cup = {
//   size: "200ml",
// };
// let bigCup = {
//   size: "500ml",
//   material: "Steel",
// };
// smallCup = bigCup;

// type Brew = {
//   brewTime: number;
// };
// const coffee = {
//   brewTime: 5,
//   beans: "Arabica",
// };

// const chaiBrew: Brew = coffee;

// type User = {
//   username: string;
//   password: string;
// };
// const u: User = {
//   username: "abc",
//   password: "123gh,mfbgjf",
// };

// type Item = {
//   name: string;
//   quantity: number;
// };
// type Address = {
//   street: string;
//   pin: number;
// };
// type Order = {
//   orderId: string;
//   irems: Item[];
//   address: Address;
// };

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// const updateChai = (updates: Partial<Chai>) => {
//   console.log("updateing chai wih ", updates);
// };
// updateChai({ price: 25 });
// updateChai({});

// type ChaiOrder = {
//   name?: string;
//   quantity?: number;
// };
// const placeOrder = (order: Required<ChaiOrder>) => {
//   console.log("Order CHai", order);
// };
// placeOrder({ name: "drink", quantity: 2 });

// type Chaii = {
//   name: string;
//   price: number;
//   isHot: boolean;
//   ingredients: string[];
// };

// type BasicChaiInfo = Pick<Chaii, "name" | "price">;

// const chaiInfo: BasicChaiInfo = {
//   name: "abc",
//   price: 12,
// };

type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type publicChai = Omit<Chaii, "secretIngredients">;

let chaiInfo: publicChai = {
  name: "chai",
  price: 25,
  isHot: true,
};
