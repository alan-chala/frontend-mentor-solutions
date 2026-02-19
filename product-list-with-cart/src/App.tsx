import { useCart } from "./hooks/useCart";
import { Desserts } from "./components/Desserts";
import { Cart } from "./components/Cart";

function App() {
  const {
    db,
    cart,
    addToCart,
    deleteFromCart,
    decrementQuantity,
    incrementQuantity,
  } = useCart();

  return (
    <>
      <main className="max-w-7xl mx-auto py-10 px-6 gap-6 grid place-content-center grid-cols-1 md:grid-cols-3">
        <Desserts
          db={db}
          cart={cart}
          addToCart={addToCart}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <Cart cart={cart} deleteFromCart={deleteFromCart} />
      </main>
    </>
  );
}

export default App;
