# Solution notes

1. `with open(path, "w", encoding="utf-8") as file: file.write(text)`.
2. `for line in file: print(line.rstrip())`.
3. Use `content.splitlines()` and `content.split()`.
4. Use mode `"a"` and append a newline.
5. Use two `with` blocks or read before opening the destination.
6. Parse the header, then sum the numeric column.
7. `json.dump(students, file, indent=2)`.
8. `students = json.load(file)` then filter with a loop.
9. Begin with add, list, and search operations; keep storage separate.
10. Define a record format and recalculate the total from saved records.
