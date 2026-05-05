import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/grammar.css";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";

import { handleDrop, handleDragOver, handleFileChange } from "../components/dragdrop"; 
import egg from "../assets/egg.svg";
import book2 from "../assets/book2.png";

function Grammar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleUpload = () => {
    const fakeResult = {
      files: files.map((file) => ({
        name: file.name,
        mostSimilar: "file10.pdf",
        similarity: Math.floor(Math.random() * 100),
      })),
    };

    navigate("/GrammarResult", { state: fakeResult });
  };

  const handleCancel = () => {
    setFiles([]);
  };

  return (
    <div className="homepage-container">
      <Header toggleSidebar={() => setIsSidebarOpen(true)} />

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="file-container">
        <div className="upload-box">
          <h1 className="Title">Grammar checker</h1>


          {/* dropping shows if no files yet */}
        {files.length === 0 && (
          <div
            className="drop-area"
            onDrop={(e) => handleDrop(e, setFiles)}
            onDragOver={handleDragOver}
          >
            <p>Drop files here or click to choose files</p>

            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, setFiles)}
              className="file-input"
            />
          </div>
        )}

        {/* SHOW FILE LIST AFTER UPLOAD */}
        {files.length > 0 && (
          <div className="file-list">
            {files.map((file, index) => (
              <div className="file-item" key={index}>
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>

        <div className="btns"> {/* compare btn is for check too */}
          <button className="compare-btn" onClick={handleUpload}>
           Check
          </button>

          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        <img className="egg1" src={egg} alt="Egg" />
        <img className="books" src={book2} alt="books" />
      </div>
    </div>
  );
}

export default Grammar;