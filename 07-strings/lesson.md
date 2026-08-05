# 07 - Strings

## What you will learn

Indexing, slicing, immutability, formatting, and common string methods.

```python
text = "Python"
print(text[0])       # P
print(text[-1])      # n
print(text[1:4])     # yth
print(text.lower())
```

Strings are immutable. Methods return a new string instead of changing the original.

```python
name = "  Ravi  "
clean_name = name.strip().title()
```

## Practice

[Solve the string problem set](../problem-solving/07-strings/problems.md)

## Homework

Build a text analyzer that reports character count, word count, vowel count, and the longest word in a sentence.

## Checkpoint

Write a program that normalizes a sentence by removing outer spaces, converting it to lowercase, and counting its characters.
