import { useState } from "react";

function App() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    const response = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={{
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "210vh",
      backgroundColor: "#f1f3f4"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>

        <h2 style={{ 
          marginBottom: "20px",
          backgroundColor: "#0b7002" }}>
          Upload Student Submissions
        </h2>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ marginBottom: "20px",  backgroundColor: "#008b5b"   }}
        />

        <br />

        <button
          onClick={handleUpload}
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Upload Files
        </button>

      </div>

    </div>
  );
}

export default App;