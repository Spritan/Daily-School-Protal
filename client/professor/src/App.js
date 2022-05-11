import Home from "./pages/home/Home";
import Attendence from "./pages/attendence/Attendence";
import Profile from "./pages/profile/Profile";
import PeerLearning from "./pages/peerLearning/PeerLearning";
import Assignments from "./pages/assignments/Assignments";
import ClassTest from "./pages/classTest/ClassTest";
import Login from "./pages/login/Login";
import NewNotice from "./pages/newNotice/NewNotice";
import NewTest from "./pages/newTest/NewTest";
import NewAssignment from "./pages/newAssignment/NewAssignment";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={localStorage.getItem('professor')?<Home />:<Login/>} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/peerLearning" element={<PeerLearning />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/classTest" element={<ClassTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newNotice" element={<NewNotice />} />
        <Route path="/newTest" element={<NewTest />} />
        <Route path="/newAssignment" element={<NewAssignment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;