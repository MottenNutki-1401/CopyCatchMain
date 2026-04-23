import pdfplumber
import docx

# extract text from TXT
def extract_txt(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()


# extract text from DOCX
def extract_docx(file_path):
    doc = docx.Document(file_path)
    text = []

    for para in doc.paragraphs:
        text.append(para.text)

    return "\n".join(text)


# extract text from PDF
def extract_pdf(file_path):
    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""

    return text


# main function (auto detect file type)
def extract_text(file_path):
    if file_path.endswith(".txt"):
        return extract_txt(file_path)

    elif file_path.endswith(".docx"):
        return extract_docx(file_path)

    elif file_path.endswith(".pdf"):
        return extract_pdf(file_path)

    else:
        return ""