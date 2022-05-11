import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import studentContext from "../../context/student/studentContext";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const { studentLogin } = useContext(studentContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginStudent = async () => {
      const res = await studentLogin(email, password);
      if (res === "error") {
        navigate("/error");
      }
      localStorage.setItem('student', JSON.stringify(res.data.otherInfo))
      navigate('/')
    };
    loginStudent();
  };

  return (
    <div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                // autocomplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <a href="#" className="link">Forgot Your Password?</a> */}
          </div>
          <div className="action">
            {/* <button>Register</button> */}
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
