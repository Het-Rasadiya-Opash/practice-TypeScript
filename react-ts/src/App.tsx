import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <ChaiCard name="Lemon" price={20} isSpecial={true} />
      </div>
      <div>
        <Counter/>
      </div>
    </>
  );
}

export default App;
