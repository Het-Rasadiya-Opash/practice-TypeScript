// class Chai {
//   flavour: string;
//   price: number;
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }
// const masalaChai = new Chai("masala", 25);
// console.log(masalaChai);

class Chai {
  public flavour: string = "Masla";
  private secretIngredients = "Cardamom";

  revel() {
    return this.secretIngredients;
  }
}
const c = new Chai();
console.log(c.flavour);
console.log(c.revel());

//protected
class Shop {
  protected shopName = "Chai corner";
}
class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}
const b = new Branch();
console.log(b.getName());

//private method 2 # using
class Walet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}
const w = new Walet();
console.log(w.getBalance());

//readonly
class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

//private -> getter setter
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}
const mc = new ModernChai();
mc.sugar = 3;
console.log(mc);

//static
class EkChai {
  static ShopName = "ChaiSHop";
  constructor(public flavour: string) {}
}
console.log(EkChai.ShopName);

//abstract
abstract class Drink {
  abstract make(): void;
}
class MyChai extends Drink {
  make() {
    console.log("");
  }
}


//composition
class Heater {
  heat() {}
}
class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}


