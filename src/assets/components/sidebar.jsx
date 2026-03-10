import "../../styles/sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  return (
   
   <div className={`sidebar ${isOpen ? "open" : "" }`}>
       
        <div className="sidebar-header">
        <button className="closed-btn" onClick={closeSidebar}>
          Close meow
        </button>
      </div>

    <div className="sidebar-nav">
            <ul>
      <li><button className="home-btn">Home</button></li>
      <li><button className="files-btn">Files</button></li>
      <li><button className="reports-btn">Reports</button></li>
            </ul>
      </div>

      <div className="logout-sidebar">
        <button className="logout-btn"type="button">Logout</button>
      </div>


    </div>
  );
}
export default Sidebar;