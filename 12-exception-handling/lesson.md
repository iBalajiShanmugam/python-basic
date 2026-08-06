---
layout: default
title: Exception Handling
parent: Lessons
nav_order: 12
permalink: /lessons/exception-handling/
course_lesson: true
course_index: "12"
previous_page: /lessons/file-handling/
previous_title: File Handling
next_page: /lessons/modules-and-packages/
next_title: Modules and Packages
---

# 12 - Exception Handling

An exception is a runtime event that stops normal execution unless the program handles it.

## A simple picture

An exception is like an emergency card passed from one helper to another. Normal work pauses. A helper that knows this exact problem may handle it and continue safely; otherwise the card keeps moving outward.

```text
risky operation -> exception -> matching except block -> recovery
```

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

> **Important fact:** `try` does not mean “ignore every problem.” It marks an operation that may fail in an expected way. Catch only exceptions you understand and can handle correctly.

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

## Bug Hunter

### Bug 1 — wrong exception type

```python
try:
    age = int("ten")
except ZeroDivisionError:
    print("Please enter a whole number")
```

### Bug 2 — risky operation outside `try`

```python
number = int(input("Number: "))
try:
    print(number)
except ValueError:
    print("Please enter a whole number")
```

### Bug 3 — error silently hidden

```python
try:
    total = 100 / 0
except Exception:
    pass
```

<details markdown="1">
<summary>Show Bug Hunter fixes</summary>

```python
# Bugs 1 and 2
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a whole number")

# Bug 3
try:
    total = 100 / 0
except ZeroDivisionError:
    print("The denominator cannot be zero")
```

</details>

<details markdown="1">
<summary>Optional deeper look: how does an exception find a handler?</summary>

When an exception is raised, Python stops the current normal path and looks for a matching handler. If the current function has none, Python finishes that call frame and checks its caller. This process is called **stack unwinding**. `finally` blocks and context-manager cleanup still run during unwinding.

</details>

## Practice

Try these problems on this page. For each one, name the operation that can fail and the friendly message the user should see.

### Problems

1. Safely convert user input into an integer.
2. Handle division by zero.
3. Handle a missing file.
4. Reject a negative age with `raise`.
5. Keep asking until the user enters a valid number.
6. Predict which exception each short program raises.
7. Make a calculator continue after invalid operations.
8. Validate a menu choice and report a useful message.
9. Use `else` and `finally` correctly in a file-reading program.
10. Build a robust command-line expense entry program.

<details markdown="1">
<summary>Show hints</summary>

1. Catch `ValueError` around `int()`.
2. Catch `ZeroDivisionError` or check the divisor first.
3. Catch `FileNotFoundError`.
4. Check the value and raise `ValueError` with a clear message.
5. Put input inside a loop and leave only after success.
6. Read the failing operation and match it to an exception type.
7. Catch expected errors inside the loop.
8. Check membership in the allowed choices.
9. `else` is for success; `finally` runs every time.
10. Validate each field before saving it.

</details>

<details markdown="1">
<summary>Show solution ideas</summary>

1. Put `int(text)` inside `try` and handle `ValueError`.
2. Handle `ZeroDivisionError` with a message about the denominator.
3. Catch the missing path and offer a recovery message.
4. `if age < 0: raise ValueError("age cannot be negative")`.
5. Use `while True`, `break` after successful conversion, and a specific handler.
6. Bad numeric text is `ValueError`; zero division is `ZeroDivisionError`; a missing path is `FileNotFoundError`.
7. Keep the loop outside the individual operation attempt.
8. Use `if choice not in allowed`.
9. Put success-only code in `else` and cleanup in `finally`.
10. Catch expected errors at the user-interface boundary and keep the program running.

</details>

## Homework

Make the expense tracker reject invalid amounts, negative values, missing descriptions, and unavailable files with helpful messages.

## Checkpoint

Make a calculator that continues running after invalid input and handles division by zero. Explain which exception each handler catches.
