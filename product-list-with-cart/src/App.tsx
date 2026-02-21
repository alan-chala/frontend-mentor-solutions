import { useCart } from "./hooks/useCart";
import { Desserts } from "./components/Desserts";
import { Cart } from "./components/Cart";
import { ConfirmOrder } from "./components/ConfirmOrder";
import { Shadow } from "./components/Shadow";

function App() {
  const {
    db,
    cart,
    addToCart,
    deleteFromCart,
    decrementQuantity,
    incrementQuantity,
    handleActiveOrder,
    activeOrder,
  } = useCart();

  return (
    <>
      <main
        className={`max-w-7xl mx-auto py-10 px-6 gap-6 grid place-content-center grid-cols-1 md:grid-cols-3 ${activeOrder ? "-z-10" : ""}`}
      >
        <Desserts
          db={db}
          cart={cart}
          addToCart={addToCart}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <Cart
          cart={cart}
          deleteFromCart={deleteFromCart}
          handleActiveOrder={handleActiveOrder}
        />
        {activeOrder && (
          <>
            <ConfirmOrder cart={cart} />
            <Shadow />
          </>
        )}
      </main>
    </>
  );
}

export default App;
