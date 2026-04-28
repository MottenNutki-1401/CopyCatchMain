from spellchecker import SpellChecker

spell = SpellChecker()

def analyze_spelling(text, filename):
    # split words
    words = text.split()

    # total words count
    total_words = len(words)

    # find misspelled words
    misspelled = spell.unknown(words)

    misspelled_count = len(misspelled)

    # avoid division by zero
    if total_words == 0:
        score = 0
    else:
        score = ((total_words - misspelled_count) / total_words) * 100

    return {
        "file": filename,
        "misspelled": misspelled_count,
        "total_words": total_words,
        "score": round(score, 2)
    }