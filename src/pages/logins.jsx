import "../styles/login.css";

function Logins({ onLogin }) {
  return (
    <div className="login-container">
      <h1>Hello there!</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Logins;