import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Mainbody from "../../components/mainbody/Mainbody";
import "./Attendence.scss";

const Attendence = () => {
  return (
    <>
        <Sidebar />
        <Topbar />
        <Mainbody />
    </>
  )
}

export default Attendence