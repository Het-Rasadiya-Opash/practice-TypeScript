// type ChaiOrder = { type: string; sugar: number; strong: boolean };

// function makeChai(order: ChaiOrder) {
//   console.log(order);
// }

// function serveChai(order: ChaiOrder) {
//   console.log(order);
// }

// type TeaRecipe = {
//   water: number;
//   milk: number;
// };

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// interface CupSize {
//   size: "small" | "large";
// }

// class Chai implements CupSize {
//   size: "small" | "large" = "large";
// }

// interface Response {
//   ok: boolean;
// }
// class myResponse implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";
function orderChai(tea: TeaType) {
  console.log(tea);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "het",
};

const u2: User = {
  username: "het",
  bio: "developer",
};

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "App",
  version: 1.0,
};
//cfg.appName = "Web"; // error throw
