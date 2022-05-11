import {
    ChevronRightOutlined,
    // PlaylistAddCheckIcon,
    DashboardOutlined,
    GroupOutlined,
    GroupsOutlined,
    LogoutOutlined,
    MedicationOutlined,
    PersonOutlineOutlined,
    StoreOutlined
  } from "@mui/icons-material";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import "./sidebar.scss";
  import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
  import AssignmentIcon from '@mui/icons-material/Assignment';
  import AssessmentIcon from '@mui/icons-material/Assessment';
  import SchoolIcon from '@mui/icons-material/School';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  
  const Sidebar = () => {
    // All useStates
    const [isToggled, setisToggled] = useState(false);
    const navigate = useNavigate();
  
  
    // For toggling button
    const handleToggle = () => {
      setisToggled(!isToggled);
    };
  
    return (
      <>
        <nav className={`sidebar ${!isToggled && "close"}`}>
          <header>
            <div className="image-text">
              <span className="image"><img src="/assets/logo.png" alt="" /></span>
              <div className="text logo-text">
                <span className="name">DSP</span>
              </div>
            </div>
            <ChevronRightOutlined
              className="bx bx-chevron-right toggle"
              onClick={handleToggle}
            />
          </header>
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
  
                <li className="nav-link">
                  <Link to="/">
                    <DashboardOutlined className="sidebar-icon" />
                    <span className="text nav-text">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/profile">
                    <AccountCircleIcon className="sidebar-icon" />
                    <span className="text nav-text">My Profile</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/attendence">
                    <PlaylistAddCheckIcon className="sidebar-icon" />
                    <span className="text nav-text">Attendence</span>
                  </Link>
                </li>
  
                <li className="nav-link">
                  <Link to="/assignments">
                    <AssignmentIcon className="sidebar-icon" />
                    <span className="text nav-text">Assignments</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/classTest">
                    <AssessmentIcon className="sidebar-icon" />
                    <span className="text nav-text">Class-test</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/peerLearning">
                    <GroupsOutlined className="sidebar-icon" />
                    <span className="text nav-text">Peer-learning</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/medicines">
                    <SchoolIcon className="sidebar-icon" />
                    <span className="text nav-text">Mentoring</span>
                  </Link>
                </li>
                {/* <li className="nav-link">
                  <Link to="/checkout/Patient">
                    <CreditCardOutlined className="sidebar-icon" />
                    <span className="text nav-text">Check-out</span>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="bottom-content">
              <li className="">
              <button className="btn_out" onClick={()=> {
                  localStorage.removeItem('student')
                  navigate('/login')
                  }}>
                  <LogoutOutlined className="sidebar-icon" />
                  <span className="text nav-text">Logout</span>
                {/* </Link> */}
                </button>
              </li>
  
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Sidebar;