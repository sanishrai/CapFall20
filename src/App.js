import React from "react";
import HelloWorld from "./Components/HelloWorld";
import "./App.css";

function App() {
  return (
    // Demonstrating using hook tags in the main app file to add components to main app
    <div>
      <HelloWorld name="World" />
    </div>
  );
}

export default App;
