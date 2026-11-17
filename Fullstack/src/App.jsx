
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

import "./App.css";
import { Activity } from "react";
function App() {
  return (
    <div className="dashboard" id="home">
      <Navbar />
      <h1>Welcome to My Page!</h1>
      <div className="card-container" id="profile">
        <Card
          name="Gowri"
          department="IT"
          year="2028"
        />
        <Card
          name="Tharani"
          department="AIDS"
          year="2027"
        />
        <Card
          name="Rachuu"
          department="EEE"
          year="2028"
        />
      </div>
    </div>
  );
}
export default App;
