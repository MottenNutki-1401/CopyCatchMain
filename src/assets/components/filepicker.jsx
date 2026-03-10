import "../../styles/picker.css"
import { useState } from "react";

function FilePicker() {
        const [selectedFile, setSelectedFile] = useState(null);
           const [fileType, setFileType] = useState("pdf");


           const handleDrop = (e) => { e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              setSelectedFile(file);  
            }
          };
          const handleDragOver = (e) => { e.preventDefault(); 
          };


  return (
    <div className="file-picker">

          <div className="drop-area" 
          onDrop={handleDrop}
          onDragOver={handleDragOver}>

            <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])
            }/> 
          </div>
          
         {selectedFile && <p>{selectedFile.name}</p>}
            <button className="submit-btn" type="submit">Upload</button>
            <button className="cancel-btn" type="submit">Cancel</button>

    </div>
  );
}

export default FilePicker;