import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "../styles/spelling.css"
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";


function Grammar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="homepage-container">
      <Header toggleSidebar={() => setIsSidebarOpen(true)} />

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}

export default Grammar;