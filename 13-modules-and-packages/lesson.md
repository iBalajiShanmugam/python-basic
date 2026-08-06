---
layout: default
title: Modules and Packages
parent: Lessons
nav_order: 13
permalink: /lessons/modules-and-packages/
course_lesson: true
course_index: "13"
previous_page: /lessons/exception-handling/
previous_title: Exception Handling
next_page: /practice/projects/
next_title: Guided Projects
---

# 13 - Modules and Packages

As programs grow, one file becomes difficult to understand. Modules let you split related code into reusable files.

## A simple picture

A module is one labelled drawer of reusable tools. A package is a toolbox containing several related drawers.

```text
expense_app package
├── storage.py       -> file tools
├── calculations.py  -> maths rules
└── main.py          -> starts the program
```

## Importing a standard module

An **import** asks Python to make code from another module available. The **standard library** is the collection of modules installed with Python.

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

> **Important fact:** Python executes a module's top-level statements the first time it is imported in a process. Keep input prompts, file changes, and demonstrations behind functions or the main guard.

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

## Bug Hunter

### Bug 1 — file hides a standard module

```text
project/
    math.py
    main.py
```

Inside `main.py`, `import math` may find the project's `math.py` instead of the standard library module.

### Bug 2 — demonstration runs during import

```python
# tools.py
def double(number):
    return number * 2

print(double(10))
```

### Bug 3 — circular imports

```text
students.py imports reports.py
reports.py imports students.py
```

<details markdown="1">
<summary>Show Bug Hunter fixes</summary>

1. Rename the project file to a specific name such as `math_practice.py`.
2. Put the demonstration under `if __name__ == "__main__":`.
3. Move shared values or functions into a third neutral module, or redesign the responsibilities so the modules do not depend on each other in a circle.

</details>

<details markdown="1">
<summary>Optional deeper look: what happens during import?</summary>

Python searches for a module, creates a module object, executes its top-level code, and stores the result in `sys.modules`, an internal cache. Later imports in the same process normally reuse that module object instead of executing it again. A partially initialised cached module is one reason circular imports are confusing.

</details>

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

<details markdown="1">
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

<details markdown="1">
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
