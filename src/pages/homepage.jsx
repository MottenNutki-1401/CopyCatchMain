import { useState } from "react";
import "../styles/homepage.css"
import Header from "../assets/components/header.jsx";
import Sidebar from "../assets/components/sidebar.jsx";
import FilePicker from "../assets/components/filepicker.jsx";

function Homepage() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  return (
    <div className="homepage-container">
          <Header toggleSidebar={() => setIsSidebarOpen(true)} />
            <Sidebar 
            isOpen={isSidebarOpen}
            closeSidebar={() => setIsSidebarOpen(false)} />
          <h1>Upload File here!</h1>
          <FilePicker />
    </div>
  );
}


export default Homepage;