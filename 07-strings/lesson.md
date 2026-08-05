# 07 - Strings

Strings represent text. They are ordered sequences of characters and are immutable.

## Creating strings

```python
single = 'Python'
double = "Python"
multi_line = """This text
uses more than one line."""
```

Choose consistent quotes. Use escaping when a string contains the same quote character:

```python
message = "He said, \"Learn Python.\""
```

## Indexing

Indexes start at zero:

```python
word = "Python"
print(word[0])   # P
print(word[2])   # t
print(word[-1])  # n
```

`word[6]` raises `IndexError` because the last valid index is 5.

## Slicing

`text[start:stop:step]` stops before `stop`:

```python
word = "Python"
print(word[0:2])  # Py
print(word[2:])   # thon
print(word[:4])   # Pyth
print(word[::2])  # Pto
print(word[::-1]) # nohtyP
```

## Immutability

You cannot replace one character in place:

```python
word = "cat"
# word[0] = "b"  # TypeError
word = "b" + word[1:]
print(word)       # bat
```

String methods return a new string:

```python
name = "  ravi sharma  "
clean_name = name.strip().title()
print(clean_name)  # Ravi Sharma
```

## Useful string methods

| Method | Purpose | Example |
|---|---|---|
| `.lower()` | lowercase | `text.lower()` |
| `.upper()` | uppercase | `text.upper()` |
| `.title()` | title case | `name.title()` |
| `.strip()` | remove outer whitespace | `text.strip()` |
| `.replace(a, b)` | replace text | `text.replace("old", "new")` |
| `.split()` | create a list of words | `sentence.split()` |
| `.join(items)` | combine strings | `", ".join(names)` |
| `.startswith()` | check beginning | `code.startswith("PY")` |
| `.endswith()` | check ending | `file.endswith(".py")` |
| `.find()` | find index or `-1` | `text.find("py")` |

## Searching and counting

```python
sentence = "Python makes problem solving easier"
print("Python" in sentence)       # True
print(sentence.lower().count("p"))
```

Use `.casefold()` instead of `.lower()` when building more language-aware case-insensitive comparisons.

## Real-world example: clean a username

```python
raw_username = input("Username: ")
username = raw_username.strip().lower()
if len(username) >= 5 and username.isalnum():
    print("Username accepted")
else:
    print("Use at least five letters or digits")
```

## Common mistakes

- Forgetting that indexes begin at zero.
- Assuming the slice stop index is included.
- Calling `.strip()` and expecting it to remove all internal spaces.
- Trying to modify a character directly.
- Comparing text without deciding whether case should matter.

## Practice

Try these problems on this page. Decide first whether spaces and letter case should matter.

### Problems

1. Count characters in a sentence, excluding spaces.
2. Reverse a string using slicing.
3. Check whether a word is a palindrome.
4. Count vowels and consonants.
5. Normalize a person's name.
6. Replace repeated spaces with one space.
7. Count the words in a sentence.
8. Find the first occurrence of a target word.
9. Check whether two words are anagrams.
10. Validate a username using length and allowed characters.

<details>
<summary>Show hints</summary>

1. Remove spaces or count only characters that are not spaces.
2. Use a slice with a step of `-1`.
3. Compare the word with its reverse.
4. Normalize to lowercase and check membership in `"aeiou"`.
5. Use `strip()` and `title()`.
6. Use `split()` and `join()`.
7. `split()` creates a list of words.
8. Use `find()` or `in`.
9. Normalize both words and compare their sorted characters.
10. Combine length and allowed-character checks.

</details>

<details>
<summary>Show solution ideas</summary>

1. `len(sentence.replace(" ", ""))` handles ordinary spaces.
2. `text[::-1]`.
3. `word == word[::-1]` after applying the chosen normalization.
4. Loop through the text and increment the correct counter.
5. `name.strip().title()`.
6. `' '.join(text.split())`.
7. `len(sentence.split())`.
8. `sentence.lower().find(target.lower())`.
9. Compare `sorted(left.lower())` and `sorted(right.lower())`.
10. Check length, letters/digits, and any extra username rules.

</details>

## Homework

Build a text analyzer that reports character count, word count, vowel count, and the longest word in a sentence.

## Checkpoint

Write a program that normalizes a sentence by removing outer spaces, converting it to lowercase, and counting its non-space characters.

---

Previous: [Control Flow](../06-control-flow/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Lists and Tuples](../08-lists-and-tuples/lesson.md)
