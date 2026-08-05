# 13 - Modules and Packages

As programs grow, one file becomes difficult to understand. Modules let you split related code into reusable files.

## Importing a standard module

```python
import math
print(math.sqrt(25))
```

The module name keeps the function's origin visible. You can import a selected name:

```python
from math import pi
print(pi)
```

Avoid importing everything with `from module import *`; it makes names unclear.

## Creating a custom module

Create `tax.py`:

```python
def calculate_tax(amount, rate):
    return amount * rate
```

Create `main.py` in the same folder:

```python
from tax import calculate_tax

tax = calculate_tax(1000, 0.18)
print(tax)
```

Python searches the project folder for `tax.py` when running `main.py` from that folder.

## The main guard

If a module contains demonstration code, protect it:

```python
def calculate_tax(amount, rate):
    return amount * rate

if __name__ == "__main__":
    print(calculate_tax(1000, 0.18))
```

When the file is run directly, `__name__` is `"__main__"`. When imported, the demonstration does not run.

## Aliases

```python
import number_utilities as numbers
print(numbers.is_prime(7))
```

Aliases are useful for long names, but use clear names and do not hide important meaning.

## Packages

A package groups related modules:

```text
expense_app/
    __init__.py
    storage.py
    calculations.py
    main.py
```

`storage.py` should handle persistence, `calculations.py` should contain business rules, and `main.py` should coordinate input and display. This separation makes each file easier to test.

## `pip` and project environments

Third-party packages are installed into the active virtual environment. Always activate `.venv` before installing project dependencies and record dependencies in a requirements file when the project needs them.

## Common mistakes

- Naming a file `math.py`, `json.py`, or another standard-library name.
- Running a script from a directory where its module cannot be found.
- Putting input code at module import time.
- Creating circular imports between modules.
- Placing all logic in `main.py` instead of separating responsibilities.

## Practice

Try these problems on this page. Draw the files first and write the responsibility of each file.

### Problems

1. Create a module containing a greeting function.
2. Import a function using two different import styles.
3. Create a constants module for tax rates.
4. Add a `__main__` block that demonstrates a module.
5. Split a calculator into two files.
6. Build a module containing number utility functions.
7. Import a module with an alias and explain why it helps.
8. Organize three related modules into a package.
9. Identify and fix a circular-import design.
10. Refactor the expense tracker into a small package with a main entry point.

<details>
<summary>Show hints</summary>

1. Put the function in `greetings.py`.
2. Try `import module` and `from module import name`.
3. Keep named constants in one module.
4. Put demonstration code under the main guard.
5. Keep calculations separate from input and display.
6. Group related number operations in one file.
7. An alias can make a long module name easier to use.
8. Give each module one clear responsibility.
9. Move shared code into a third module.
10. Separate storage, calculations, and the program entry point.

</details>

<details>
<summary>Show solution ideas</summary>

1. Define `greet(name)` in `greetings.py` and import it.
2. Both styles work; choose the one that keeps names clear.
3. Put names such as `GST_RATE` in `rates.py`.
4. Use `if __name__ == "__main__":`.
5. Use `operations.py` and `main.py`.
6. Put prime, factorial, and divisor functions in `number_utils.py`.
7. `import number_utils as numbers`.
8. Use `storage.py`, `calculations.py`, and `main.py`.
9. Move shared functionality into a neutral module.
10. Use separate modules for storage, expense logic, and the entry point.

</details>

## Homework

Refactor a previous project into at least three modules and document what responsibility belongs in each file.

## Checkpoint

Split a calculator into a module containing calculation functions and a separate main program containing input and display logic. Explain what the main guard does.

---

Previous: [Exception Handling](../12-exception-handling/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Continue to [Projects](../projects/README.md) or [Interview Problems](../interview-problems/README.md)
