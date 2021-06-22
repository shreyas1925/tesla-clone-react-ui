import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <>
        {/* <h1>Hello Tesla</h1> */}
        <Header />
        <Home />
      </>
    </div>
  );
}

export default App;
