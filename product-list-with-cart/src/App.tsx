import { useCart } from "./hooks/useCart";
import { Desserts } from "./components/Desserts";
import { Cart } from "./components/Cart";

function App() {
  const { db, cart, addToCart } = useCart();

  return (
    <>
      <main className="max-w-7xl mx-auto py-10 px-6 gap-6 grid md:grid-cols-3">
        <Desserts db={db} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </>
  );
}

export default App;
