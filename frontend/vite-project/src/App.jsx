import { useState } from "react";
import ResultsTable from "./components/ResultsTable";
import SpellingTable from "./components/SpellingTable";
import ActionButtons from "./components/ActionButtons";

import { uploadFiles, getSimilarity, getSpelling } from "./api/api";

function App() {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [spellingResults, setSpellingResults] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  // Similarity
  const handleAnalyze = async () => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const uploadData = await uploadFiles(formData);
      const simData = await getSimilarity(uploadData);

      setResults(simData.results || []);
      setSpellingResults([]); // clear other table

    } catch (error) {
      console.error("Similarity error:", error);
    }
  };

  // Spelling
  const handleSpelling = async () => {
  if (files.length === 0) {
    alert("Please select files first!");
    return;
  }

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  try {
    // STEP 1: upload
    const uploadData = await uploadFiles(formData);
    console.log("UPLOAD:", uploadData);

    // STEP 2: call spelling API
    const spellData = await getSpelling(uploadData); // ⭐ THIS LINE WAS MISSING

    console.log("SPELL:", spellData);

    // STEP 3: update UI
    setSpellingResults(spellData.results || []);
    setResults([]); // clear similarity table

  } catch (error) {
    console.error("Spelling error:", error);
  }
};
  return (
    <div style={{
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#e4fc8e"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "200vh"
      }}>

        <h2 style={{ marginBottom: "20px", color: "#0b7002" }}>
          Upload Student Submissions
        </h2>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ marginBottom: "20px" }}
        />

        {/*Buttons component */}
        <ActionButtons 
          onAnalyze={handleAnalyze}
          onSpelling={handleSpelling}
        />

        {/* Results */}
        {results.length > 0 && (
          <ResultsTable results={results} />
        )}

        {spellingResults.length > 0 && (
          <SpellingTable results={spellingResults} />
        )}

      </div>

    </div>
  );
}

export default App;