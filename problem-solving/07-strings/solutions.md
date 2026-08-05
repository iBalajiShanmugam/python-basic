# Solution notes

1. `len(sentence.replace(" ", ""))` for ordinary spaces.
2. `text[::-1]`.
3. `word == word[::-1]` after normalization.
4. Loop through `text.lower()` and count vowels separately.
5. `name.strip().title()`.
6. `' '.join(text.split())`.
7. `len(sentence.split())`.
8. `sentence.lower().find(target.lower())`.
9. `sorted(left.replace(" ", "").lower()) == sorted(right...)`.
10. Validate length, allowed characters, and reserved names as required.
