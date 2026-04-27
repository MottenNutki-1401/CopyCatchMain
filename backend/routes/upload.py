from fastapi import APIRouter, UploadFile, File, HTTPException
# httpexception => return error like if file not supported

from services.similarity import compute_all_similarities
from services.preprocess import clean_text
from services.text_extractor import extract_text  # txt extraction

import os  # interact with os, creating folders etc


router = APIRouter()  # router obj inside this file


UPLOAD_FOLDER = "uploads"  # uploaded files will be stored here
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # prevents error if exists


# making rules: allowed file types
ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt"}


@router.post("/upload")  # this endp will receive the files
async def upload_files(files: list[UploadFile] = File(...)):

    saved_files = []  # storing names of saved files
    texts = []  # storing extracted + cleaned text

    for file in files:

        # get file extension
        extension = os.path.splitext(file.filename)[1].lower()

        # Check if the extension is NOT in the allowed list
        if extension not in ALLOWED_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail=f"{file.filename} is not a supported file type"
            )

        # Create file path
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        # Save file to uploads folder
        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # extract text from the saved file
        text = extract_text(file_path)

        # print preview (for debugging)
        print(f"\n--- {file.filename} ---")
        print(text[:200])

        # preprocessing text (cleaning)
        cleaned = clean_text(text)

        # store cleaned text
        texts.append(cleaned)

        # store filename
        saved_files.append(file.filename)

    # compute similarity for ALL files
    results = compute_all_similarities(texts, saved_files)

    return {
        "message": "Files uploaded and analyzed",
        "results": results
    }