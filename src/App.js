import KomangResto from "./Components/Komang-resto";
import { AppProvider } from "./Context/App-context-";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1 className="text-center mb-2 mt-2 uppercase font- text-lg drop-shadow-2xl">Komang Resto</h1>
        <KomangResto />
      </div>
    </AppProvider>
  );
}

export default App;
