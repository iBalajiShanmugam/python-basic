# 11 - File Handling

## What you will learn

How to persist text data safely.

```python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Learn Python\n")

with open("notes.txt", encoding="utf-8") as file:
    content = file.read()
```

The `with` statement closes the file even when a problem occurs. Use `"r"` to read, `"w"` to replace, and `"a"` to append. Be careful with relative paths and never overwrite important files accidentally.

## Practice

[Solve the file-handling problem set](../problem-solving/11-file-handling/problems.md)

## Homework

Create a journal program that appends dated entries to a file and provides a command to display all previous entries.

## Checkpoint

Write a program that appends one expense per line and then reads the file to calculate the total.
