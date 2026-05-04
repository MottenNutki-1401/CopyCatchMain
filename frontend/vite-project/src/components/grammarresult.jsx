import { useLocation, useNavigate } from "react-router-dom";
import "../styles/grammar.css";

import egg from "../assets/egg.svg";

import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import { useState } from "react";

function GrammarResult() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const resultData = location.state;

  if (!resultData) {
    return (


      <div>
        <h2>No results found </h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (

  

  <div className="file-container2">


    <Header toggleSidebar={() => setIsSidebarOpen(true)} />
    <Sidebar
      isOpen={isSidebarOpen}
      closeSidebar={() => setIsSidebarOpen(false)}
    />

    <div className="result-layout2">

        <div className="table-wrapper2">

  <div className="result-table2">

    {/* left side HEADER */}
    <div className="table-header2">
      <span>File Name</span>
      <span>Grammatical Mistake</span>
      <span>Total Words</span>
      <span>Grammar Score</span>
    </div>

     {/* ROWS */}
    {resultData.files.map((file, index) => (
      <div className="table-row1" key={index}>
        <span>{file.name}</span>

        {/* for test gram micount */}
        <span>{Math.floor(Math.random() * 20) + 1}</span>

        {/* fake total words */}
        <span>{Math.floor(Math.random() * 500) + 200}</span>

        {/* fake gram score */}
        <span>{Math.floor(Math.random() * 30) + 70}%</span>
      </div>
    ))}

  </div>
</div>

      {/* RIGHT SIDE = DETAILS / MISTAKES */}
      <div className="mistake-panel2">
        <div className="nekobox1">
       <h2 >Grammatical Mistakes</h2>
       <button className= "dl-but"> download</button>
       </div>

        {/* this will come from another file later */}
        <div className="mistake-box2">
          Select a file to view mistakes
        </div>
      </div>

    </div>
     <img className="egg2" src={egg} alt="Egg" />
  </div>
);
}

export default GrammarResult;