# 01 - Python Fundamentals

## What you will learn

Python files, indentation, comments, statements, expressions, identifiers, keywords, and naming conventions.

## Why it matters

Python uses whitespace and a small amount of syntax to express programs clearly. Understanding these rules prevents many beginner errors.

## First example

```python
# This is a comment.
message = "Python is readable"
print(message)
```

Python runs statements from top to bottom. `message = "..."` stores a value; `print(message)` displays it.

## Rules

- Indentation is meaningful; use four spaces.
- Names are case-sensitive: `name` and `Name` are different.
- Names may contain letters, digits, and underscores, but cannot start with a digit.
- Python keywords such as `if`, `for`, and `class` cannot be used as ordinary names.
- Prefer descriptive `snake_case` names.

## Common mistakes

```python
if True:
print("This is invalid")  # missing indentation
```

Correct:

```python
if True:
    print("This is valid")
```

## Practice

[Solve the fundamentals problem set](../problem-solving/01-fundamentals/problems.md)

## Homework

Create a `profile.py` program that prints a formatted profile using at least five descriptive variables and comments explaining the data.

## Checkpoint

Explain the difference between a statement and an expression, identify three valid variable names, and fix an indentation error without using an editor's auto-format feature.
