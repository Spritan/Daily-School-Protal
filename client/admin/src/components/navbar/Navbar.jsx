import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav class="navbar">
        <div class="navlogo">Admin</div>
        <a href="#" class="ham">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navlinks">
          <ul>
            <li>
                <Link to="">Register a Professor</Link>
            </li>

            <li>
              <select>
                <option>Student</option>
                <a href="/professor/student">
                  <option>Register a Student</option>
                </a>
                <option>
                  <a href="/professor/student">Update a Student</a>
                </option>
              </select>
            </li>

            <li>
              <select>
                <option>Parent</option>
                <option>
                  <a href="/professor/parent">Register a Parent</a>
                </option>
                <option>
                  <Link to="/professor/parent">Update a Parent</Link>
                </option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
