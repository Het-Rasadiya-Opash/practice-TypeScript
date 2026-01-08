let subs: number | string = 1000;

let apiRequest: "pending" | "success" | "error" = "error";

let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "middle";

let orders = ["12", "45", "90", "89"];
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "90") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
