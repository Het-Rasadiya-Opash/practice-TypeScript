function getMsg(msg: string | number) {
  if (typeof msg === "string") {
    return `${msg} is String`;
  }
  return `${msg} is Number`;
}

console.log(getMsg("het"));

function sendMsg(msg?: string) {
  if (msg) {
    return `Send Msg -> Receved : ${msg}`;
  }
  return `Msg not sending`;
}
console.log(sendMsg("Hello"));

function orderFood(item: "Panipuri" | "Burger" | number) {
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

function serve(d: drink | softDrink) {
  if (d instanceof drink) {
    return d.serve();
  }
  return d.serve();
}

console.log(serve(new drink()));

type process = {
  type: string;
  sugar: number;
};

function makeFood(obj: any): obj is process {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

const cha = {
  type: "Milk",
  sugar: 100,
};

console.log(makeFood(cha));

function serveOrder(item: process | string) {
  if (makeFood(item)) {
    return `Serving ${item.type} ${item.sugar}`;
  }
  return `${item}`;
}






type MasalChai = {
  type: "masala";
  spicelevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};
type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
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

function brew(order: MasalChai | GingerChai) {
  if ("spicelevel" in order) {
  }
}

// function isStringArray(arr: unknown): arr is string[]{
  
// };
