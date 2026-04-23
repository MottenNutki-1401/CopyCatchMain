from fastapi import APIRouter, UploadFile, File, HTTPException
#httpexception=> return error like if file not supported
from typing import List, Annotated#expecting multi files
from services.text_extractor import extract_text #txt extraction
import os #interact with os, creating folders etc

router = APIRouter() #router obj inside this file

UPLOAD_FOLDER ="uploads" #uploaded files will be stored here
os.makedirs(UPLOAD_FOLDER, exist_ok=True) #exist_ok=True prevents an error if the folder already exists


#making rules: text files allowed only
ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt"}

@router.post("/upload") #this endp wil recieve the files
async def upload_files(files: Annotated[List[UploadFile], File(...)]):
    saved_files = [] #storing names of saved files

    for file in files:
        file_path = os.path.join(UPLOAD_FOLDER,file.filename)

        extension = os.path.splitext(file.filename)[1].lower()

         # Check if the extension is NOT in the allowed list
        if extension not in ALLOWED_EXTENSIONS:

            # If the file type is invalid, raise an HTTP error
            # status_code 400 means "Bad Request"
            raise HTTPException(
                status_code=400,
                detail=f"{file.filename} is not a supported file type"
            )

        # Create the full path where the file will be saved
        # Example: uploads/essay.pdf
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_path, "wb") as buffer:
         buffer.write(await file.read())

        # extract text from the saved file
        text = extract_text(file_path)

        # print preview (first 200 characters)
        print(f"\n--- {file.filename} ---")
        print(text[:200])

        saved_files.append(file.filename)

    return {
        "message": "Files uploaded successfully",
        "files": saved_files
    }