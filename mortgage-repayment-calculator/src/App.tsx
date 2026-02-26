import { Form } from "./components/Form";
import { Result } from "./components/Result";

function App() {
  return (
    <main className="max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl">
      <Form />
      <Result />
    </main>
  );
}

export default App;
