# 12 - Exception Handling

An exception is a runtime event that stops normal execution unless the program handles it.

## Types of problems

- A syntax error means Python cannot understand the program.
- A runtime exception occurs while understandable code is running.
- A logic error runs successfully but produces the wrong result.

Examples of runtime exceptions:

```python
int("ten")       # ValueError
10 / 0           # ZeroDivisionError
open("missing")  # FileNotFoundError
```

## Basic `try` and `except`

```python
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a whole number.")
else:
    print(f"Age recorded: {age}")
```

Put only the risky operation in the `try` block. Catch the specific exception you expect.

## Multiple exceptions

```python
try:
    numerator = float(input("Numerator: "))
    denominator = float(input("Denominator: "))
    print(numerator / denominator)
except ValueError:
    print("Use numeric values.")
except ZeroDivisionError:
    print("The denominator cannot be zero.")
```

Different errors deserve different recovery messages.

## `else` and `finally`

`else` runs only when no exception occurred. `finally` runs whether the operation succeeded or failed:

```python
file = None
try:
    file = open("notes.txt", encoding="utf-8")
    print(file.read())
except FileNotFoundError:
    print("Notes file does not exist.")
finally:
    if file is not None:
        file.close()
```

For files, prefer `with open(...)`; it handles cleanup automatically.

## Raising an exception

Use `raise` when a function receives data that violates its contract:

```python
def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age
```

Raising an exception is not the same as handling it. The caller can decide how to present the problem.

## Validation loop

```python
while True:
    try:
        number = int(input("Enter a number: "))
        break
    except ValueError:
        print("That was not a whole number. Try again.")
```

The loop repeats only for the expected invalid-input case.

## Common mistakes

- Catching every error with bare `except`.
- Putting the entire program inside one huge `try` block.
- Showing a technical traceback to a beginner user when recovery is possible.
- Silently ignoring an exception with `pass`.
- Using exceptions to hide a logic error.

## Practice

[Solve the exception-handling problem set](../problem-solving/12-exceptions/problems.md)

## Homework

Make the expense tracker reject invalid amounts, negative values, missing descriptions, and unavailable files with helpful messages.

## Checkpoint

Make a calculator that continues running after invalid input and handles division by zero. Explain which exception each handler catches.

---

Previous: [File Handling](../11-file-handling/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Modules and Packages](../13-modules-and-packages/lesson.md)
