import "./App.css";
import Header from "./Components/HeaderPage/Header";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage className="home" />
    </div>
  );
}

export default App;
