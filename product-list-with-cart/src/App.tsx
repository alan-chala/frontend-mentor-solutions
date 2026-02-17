import { Desserts } from "./components/Desserts";
import { useCart } from "./hooks/useCart";

function App() {
  const { db } = useCart();

  return (
    <>
      <main className="max-w-7xl mx-auto py-10 px-6">
        <Desserts db={db} />
      </main>
    </>
  );
}

export default App;
