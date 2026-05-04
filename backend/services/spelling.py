from spellchecker import SpellChecker

spell = SpellChecker()

def analyze_spelling(text, filename):
    words = text.split()

    total_words = len(words)
    misspelled = spell.unknown(words)
    misspelled_count = len(misspelled)

    score = ((total_words - misspelled_count) / total_words) * 100 if total_words else 0

    return {
        "file": filename,
        "misspelled": misspelled_count,
        "total_words": total_words,
        "score": round(score, 2),
        "misspelled_words": list(misspelled),
        "original_text": text
    }