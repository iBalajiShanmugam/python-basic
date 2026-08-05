# 01 - Python Fundamentals

This lesson explains the basic rules Python uses to read and run a program.

## Your first program

Create `hello.py`:

```python
message = "Hello, Python!"
print(message)
```

Run it with `python hello.py`. Python executes the assignment first and then calls `print()`.

## Statements and expressions

A statement is an instruction Python can execute:

```python
name = "Asha"       # assignment statement
print(name)         # function-call statement
```

An expression produces a value:

```python
2 + 3               # value: 5
"Py" + "thon"      # value: "Python"
```

Expressions can be part of statements: `print(2 + 3)`.

## Comments

Comments explain intent to people and are ignored by Python.

```python
# Calculate the total before displaying it.
total = price * quantity
```

Write comments for decisions or business rules, not for obvious syntax.

## Indentation and blocks

Python uses indentation to show that statements belong to a block:

```python
temperature = 32
if temperature > 30:
    print("Warm day")
    print("Drink water")
print("Program complete")
```

The two indented lines run only when the condition is true. Use four spaces consistently. This is invalid because the body is not indented:

```python
# if True:
# print("Missing indentation")
```

## Identifiers and naming

An identifier is a name for a variable, function, class, or module.

Valid examples:

```python
student_name = "Ravi"
score2 = 90
_internal_value = 1
```

Invalid examples include `2score`, `student-name`, `first name`, and `class`, because names cannot start with digits, contain hyphens/spaces, or use keywords.

Names are case-sensitive: `total`, `Total`, and `TOTAL` are different names. Prefer descriptive `snake_case` names such as `total_price`.

## Keywords

Keywords already have a meaning in Python, such as `if`, `else`, `for`, `while`, `True`, `False`, and `None`. Do not use them as variable names. You can inspect the current keyword list:

```python
import keyword
print(keyword.kwlist)
```

## Reading code from top to bottom

```python
price = 100
discount = 10
final_price = price - discount
print(final_price)
```

The final value is `90` because `final_price` is calculated after both earlier assignments. Later assignments replace the value associated with a name.

## Common mistakes

- Mixing tabs and spaces.
- Using a name that begins with a digit.
- Forgetting quotes around text.
- Expecting a comment to execute.
- Using a keyword as a variable name.
- Assuming `Name` and `name` are the same.

## Guided practice

Change the first program to print your name, city, and a learning goal. Then intentionally remove indentation and read the error message before fixing it.

## Practice

[Solve the fundamentals problem set](../problem-solving/01-fundamentals/problems.md)

## Homework

Create a `profile.py` program that prints a formatted profile using at least five descriptive variables and comments explaining the data.

## Checkpoint

Explain the difference between a statement and an expression, identify three valid variable names, and fix an indentation error without using auto-formatting.

---

[Course home](../README.md) · [Course map](../COURSE_MAP.md) · Next: [Variables and Data Types](../02-variables-and-data-types/lesson.md)
