import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Bio from "./components/Bio";
import Header from "./components/Header";
import PersonalProject from "./components/PersonalProject";

function App() {
  return (
    <div>
      <Header />
      <PersonalProject />
      <Bio />
    </div>
  );
}

export default App;
