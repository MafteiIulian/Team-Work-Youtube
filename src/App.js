import "./App.css";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import NavCategories from "./Components/NavCategories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavCategories />
      <Content />
    </div>
  );
}

export default App;
