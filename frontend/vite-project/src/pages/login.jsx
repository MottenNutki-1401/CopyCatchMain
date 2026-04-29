import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import egg from "../assets/egg.svg";
import learn from "../assets/learn.svg";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
      >
        <div className="hugs">
          <h1 className="helo">Welcome!</h1>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button className="login-btn" type="submit">
            LOGIN
          </button>

          <p className="version">CopyCatch v1.</p>
        </div>

        <img className="egg1" src={egg} alt="Egg" />
        <img className="egg2" src={egg} alt="Egg" />
        <img className="learn" src={learn} alt="nerd" />
      </form>
    </div>
  );
}

export default Login;