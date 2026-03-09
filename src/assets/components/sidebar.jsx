import "../../styles/sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "" }`}>
        <button className="closed-btn" onClick={closeSidebar}>
            Close meow
        </button>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
     
      </ul>
    </div>
  );
}
export default Sidebar;