import "../../styles/header.css";

function Header({ toggleSidebar }) {
  return (
    <div className="header">
  
      <button className="sidebar-btn" onClick={toggleSidebar}>
       Open meow!
      </button>

      <div className="header-text">
      <h1>Welcome to CopyCatch! cheater</h1>
      <p>test meow hi hello</p>
    </div>
    </div>
  );
}
export default Header;