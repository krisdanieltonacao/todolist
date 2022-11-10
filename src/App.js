import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
