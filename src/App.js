import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";
import {Footer} from "./Components/Footer"

function App() {
  const [category, setCategory] = useState("general")
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </div>
  );
}

export default App;
