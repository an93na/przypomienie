import "@picocss/pico";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App" style={{margin:'2vw', borderRadius: "5px"}}>
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
