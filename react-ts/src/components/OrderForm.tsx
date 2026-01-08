import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Chai name</label>
      <input
        type="text"
        placeholder="Chai name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Chai name</label>
      <input
        type="number"
        placeholder="Cups"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
};
