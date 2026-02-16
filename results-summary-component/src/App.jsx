import { Result } from "./components/Result";
import { Summary } from "./components/Summary";

function App() {
  return (
    <main className="shadow-xl min-h-screen flex items-center justify-center ">
      <section className="grid md:grid-cols-2 bg-white max-w-3xl md:rounded-4xl overflow-hidden">
        <Result />
        <Summary />
      </section>
    </main>
  );
}

export default App;
