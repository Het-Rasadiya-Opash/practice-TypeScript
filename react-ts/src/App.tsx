import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { ChaiList } from "./components/ChaiList";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/OrderForm";
import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "masla", price: 30 },
  { id: 2, name: "ginger", price: 35 },
  {
    id: 3,
    name: "lemon",
    price: 50,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <ChaiCard name="Lemon" price={20} isSpecial={true} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) =>
            console.log("Placed Order", order.name, order.cups)
          }
        />
      </div>
    </>
  );
}

export default App;
