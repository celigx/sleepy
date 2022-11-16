import "./App.css";
import OutputTime from "./components/Result";
import ChooseTime from "./components/SelectTime";

function App() {
  return (
    <div className="lg:container lg:flex lg:items-center lg:h-screen lg:mx-auto">
      <ChooseTime />
      <OutputTime />
    </div>
  );
}

export default App;
