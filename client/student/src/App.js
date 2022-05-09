import Home from "./pages/home/Home";
import Attendence from "./pages/attendence/Attendence";
import Profile from "./pages/profile/Profile";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
