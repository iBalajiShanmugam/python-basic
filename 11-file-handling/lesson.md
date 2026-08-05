# 11 - File Handling

Variables disappear when a program ends. Files let a program store information for the next run.

## Opening a file

```python
file = open("notes.txt", "r", encoding="utf-8")
content = file.read()
file.close()
```

The `encoding` makes text handling explicit. Calling `close()` matters, but the safer approach is `with`.

## The `with` statement

```python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Learn Python\n")
```

The file closes automatically when the block ends, even when an error occurs.

## File modes

| Mode | Meaning |
|---|---|
| `"r"` | read; file must exist |
| `"w"` | write; replaces existing content |
| `"a"` | append at the end |
| `"x"` | create; fails if file exists |

Be careful with `"w"`: it can erase existing content.

## Reading methods

```python
with open("notes.txt", encoding="utf-8") as file:
    all_text = file.read()

with open("notes.txt", encoding="utf-8") as file:
    first_line = file.readline()

with open("notes.txt", encoding="utf-8") as file:
    for line in file:
        print(line.rstrip())
```

`rstrip()` removes the line ending for display. Avoid calling `.read()` on a huge file when line-by-line processing is enough.

## Relative paths

`open("notes.txt")` looks relative to the program's current working directory, not necessarily the folder containing the `.py` file. Print the current directory while debugging:

```python
from pathlib import Path
print(Path.cwd())
```

`pathlib.Path` is a modern way to work with paths:

```python
from pathlib import Path
path = Path("data") / "notes.txt"
path.parent.mkdir(exist_ok=True)
path.write_text("Hello\n", encoding="utf-8")
```

## CSV basics

CSV stores rows and columns. Use the `csv` module instead of manually splitting commas when data may contain commas:

```python
import csv

with open("students.csv", newline="", encoding="utf-8") as file:
    for row in csv.DictReader(file):
        print(row["name"], row["marks"])
```

## JSON basics

JSON represents dictionaries, lists, strings, numbers, booleans, and null values:

```python
import json

students = [{"name": "Meera", "marks": 86}]
with open("students.json", "w", encoding="utf-8") as file:
    json.dump(students, file, indent=2)

with open("students.json", encoding="utf-8") as file:
    loaded_students = json.load(file)
```

## Real-world example: expenses

```python
with open("expenses.txt", "a", encoding="utf-8") as file:
    file.write("food,250\n")

total = 0
with open("expenses.txt", encoding="utf-8") as file:
    for line in file:
        category, amount = line.strip().split(",")
        total += float(amount)
print(f"Total: {total:.2f}")
```

## Common mistakes

- Using write mode when append mode was intended.
- Forgetting `encoding="utf-8"` for text files.
- Assuming a relative path starts beside the script.
- Forgetting to handle a missing file.
- Storing comma-containing data by manually splitting CSV lines.

## Practice

Try these problems on this page. Before coding, decide what the file should contain and which mode you need.

### Problems

1. Write three lines to a text file.
2. Read and print a file line by line.
3. Count lines and words in a file.
4. Append a new expense to a file.
5. Copy one file into another file.
6. Read a CSV-style file and calculate a total column.
7. Save a list of students as JSON.
8. Load JSON and display students above a mark threshold.
9. Build a file-based notes application.
10. Build an expense tracker that saves data and calculates a total.

<details>
<summary>Show hints</summary>

1. Use write mode and include a newline after each line.
2. Iterate over the file object.
3. Use `splitlines()` and `split()`.
4. Use append mode so old expenses remain.
5. Read the source, then write the destination.
6. Split each row and convert the number column.
7. Use the `json` module and `json.dump()`.
8. Load the JSON into Python objects, then filter them.
9. Decide commands such as add, list, and exit.
10. Choose one record format and use it consistently.

</details>

<details>
<summary>Show solution ideas</summary>

1. `with open(path, "w", encoding="utf-8") as file: file.write(text)`.
2. Use `for line in file` and `line.rstrip()`.
3. Read the text and count `splitlines()` and `split()`.
4. Open with mode `"a"` and write one record followed by `\n`.
5. Use a read block and a separate write block.
6. Parse the header, then add the numeric field from each row.
7. `json.dump(students, file, indent=2)`.
8. `students = json.load(file)` followed by a loop or filter.
9. Keep file operations in small functions.
10. Store each expense with a category and amount, then read and add amounts.

</details>

## Homework

Create a journal program that appends dated entries to a file and provides a command to display all previous entries.

## Checkpoint

Write a program that appends one expense per line and reads the file to calculate the total.

---

Previous: [Functions](../10-functions/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Exception Handling](../12-exception-handling/lesson.md)
