from fastapi import APIRouter, UploadFile, File
from typing import List
import os

router = APIRouter()

UPLOAD_FOLDER ="uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_files(files:List[UploadFile] = File(...)):
    saved_files = []

    for file in files:
        file_path = os.path.join(UPLOAD_FOLDER,file.filename)

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        saved_files.append(file.filename)

    return {
        "message": "Files uploaded successfully",
        "files": saved_files
    }