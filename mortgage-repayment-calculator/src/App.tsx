import { useMortgage } from "./hooks/useMortgage";

import { Form } from "./components/Form";
import { Result } from "./components/Result";

function App() {
  const { calculateMortgage, totalMortgage, setTotalMortgage } = useMortgage();

  return (
    <main className="max-w-5xl bg-white grid md:grid-cols-2 overflow-hidden md:rounded-3xl">
      <Form
        calculateMortgage={calculateMortgage}
        setTotalMortgage={setTotalMortgage}
      />
      <Result totalMortgage={totalMortgage} />
    </main>
  );
}

export default App;
