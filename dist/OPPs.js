"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour = "Masla";
    secretIngredients = "Cardamom";
    revel() {
        return this.secretIngredients;
    }
}
const c = new Chai();
console.log(c.flavour);
console.log(c.revel());
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
const b = new Branch();
console.log(b.getName());
class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
console.log(w.getBalance());
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too Sweet");
        this._sugar = value;
    }
}
const mc = new ModernChai();
mc.sugar = 3;
console.log(mc);
class EkChai {
    flavour;
    static ShopName = "ChaiSHop";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.ShopName);
//# sourceMappingURL=OPPs.js.map