import Home from "./pages/home/Home";
import Attendence from "./pages/attendence/Attendence";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendence" element={<Attendence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
