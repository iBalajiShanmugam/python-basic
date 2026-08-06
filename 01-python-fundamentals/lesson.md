---
layout: default
title: Python Fundamentals
parent: Lessons
nav_order: 1
permalink: /lessons/fundamentals/
course_lesson: true
course_index: "01"
previous_page: /setup/
previous_title: Setup
next_page: /lessons/variables-and-data-types/
next_title: Variables and Data Types
---

# 01 - Python Fundamentals

This lesson explains the basic rules Python uses to read and run a program.

## A simple picture

A program is like a recipe. Python reads one instruction, completes it, and then moves to the next instruction. A variable name is like a clear label placed on a box so we can find its value later.

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

## Spaces at the beginning of a line

For now, begin each instruction at the left side of the file:

```python
name = "Asha"
print(name)
```

Later, Python will use four spaces at the beginning of a line to group instructions inside conditions, loops, and functions. Those ideas are taught step by step in their own chapters. Do not add beginning spaces randomly because Python treats them as part of the program structure.

## Identifiers and naming

An identifier is a name used for a variable, function, class, module, or other object in a Python program.

### Rules for identifiers

Python applies these rules:

1. An identifier may contain uppercase letters, lowercase letters, digits, and underscores.
2. It must begin with a letter or an underscore. It cannot begin with a digit.
3. After the first character, digits are allowed.
4. Spaces and symbols such as `-`, `$`, `@`, and `!` are not allowed.
5. An identifier is case-sensitive. `total`, `Total`, and `TOTAL` are different names.
6. A Python keyword cannot be used as an identifier.
7. There is no small fixed length limit, but very long names reduce readability.
8. Python supports many Unicode letters, but beginners should prefer ordinary English letters for portable code.

### Valid identifiers

```python
student_name = "Ravi"
score2 = 90
_internal_value = 1
total_price = 250
```

### Invalid identifiers

```python
# 2score = 90          # cannot begin with a digit
# student-name = "Ravi"  # hyphen is an operator, not part of a name
# first name = "Ravi"    # spaces are not allowed
# price$ = 100           # $ is not allowed
# class = "Python"      # class is a keyword
```

The underscore in `student_name` is a character inside the name. It is not the same as a hyphen. Python reads `student-name` as subtraction between two names.

### Keywords

Keywords are words that already have a special meaning in Python. Common examples are `if`, `else`, `for`, `while`, `def`, `class`, `return`, `import`, `True`, `False`, and `None`.

You do not need to memorize every keyword now. The official list can be explored after you learn modules in Chapter 13.

`True`, `False`, and `None` are also protected Python constants. Do not try to redefine them.

### Naming conventions

The rules above determine whether a name is accepted. Naming conventions determine whether the code is easy to read:

| What you are naming | Recommended style | Example |
|---|---|---|
| Variable or function | `snake_case` | `total_price`, `calculate_tax()` |
| Constant | `UPPER_SNAKE_CASE` | `MAX_RETRIES` |
| Class | `PascalCase` | `StudentRecord` |
| Internal-by-convention name | leading underscore | `_cache` |

The leading underscore does not make a variable truly private. It communicates an intention to other programmers. Python does not prevent access to `_cache`.

Avoid names that hide the meaning of a built-in function:

```python
# Avoid this:
print = "display"

# Prefer this:
display_label = "display"
```

If you use `print` as a variable, calling `print("Hello")` later will no longer work because the familiar built-in name was replaced in that part of the program.

## Reading code from top to bottom

```python
price = 100
discount = 10
final_price = price - discount
print(final_price)
```

The final value is `90` because `final_price` is calculated after both earlier assignments. Later assignments replace the value associated with a name.

> **Important fact:** Python normally runs a file from the first executable line to the last. A name must receive a value before that name is used.

## Bug Hunter

### Bug 1 — missing quotes

```python
message = Hello, Python!
print(message)
```

Text must be surrounded by matching quotation marks.

### Bug 2 — invalid name

```python
2nd_score = 90
print(2nd_score)
```

A name cannot begin with a digit.

### Bug 3 — different capital letters

```python
student_name = "Maya"
print(Student_name)
```

Python treats `student_name` and `Student_name` as different names.

<details>
<summary>Show Bug Hunter fixes</summary>

```python
message = "Hello, Python!"
print(message)

second_score = 90
print(second_score)

student_name = "Maya"
print(student_name)
```

</details>

<details>
<summary>Optional deeper look: what does assignment do?</summary>

Python creates values as objects. The assignment `score = 90` connects the name `score` to the integer object `90`. Programmers call this **binding a name to an object**. At this stage, the simple mental model “the variable stores the value” is enough.

</details>

## Common mistakes

- Mixing tabs and spaces.
- Using a name that begins with a digit.
- Forgetting quotes around text.
- Expecting a comment to execute.
- Using a keyword as a variable name.
- Assuming `Name` and `name` are the same.

## Guided practice

Change the first program to print your name, city, and one thing you want to build. Then intentionally remove one closing quote, read the error message, and put the quote back.

## Practice

Try these problems on this page. Create a separate file such as `fundamentals_practice.py` for your answers.

### Problems

1. Print a three-line personal profile.
2. Store a product name and price, then print them with labels.
3. Fix a program that has two missing quotation marks.
4. Decide which of these names are valid: `student_name`, `2score`, `first-name`, `class`, `_total`.
5. Print a receipt header using three separate `print()` calls.
6. Create variables for a library book and display one sentence about it.
7. Predict the final value after three assignments to the same variable.
8. Rewrite a program using descriptive `snake_case` names.
9. Print the first five multiples of a number.
10. Explain why `class`, `2name`, and `first name` cannot be identifiers.

<details>
<summary>Show hints</summary>

1. Use one `print()` call for each line.
2. Use two variables and an f-string or multiple print values.
3. Statements inside a block need four spaces.
4. Check the first character, symbols, spaces, and keywords.
5. Keep the header values separate.
6. Use names such as `book_title` and `author_name`.
7. Read assignments from top to bottom; the last assignment wins.
8. Replace unclear names with lowercase words joined by underscores.
9. Use a loop and multiplication.
10. Explain one rule for each invalid name.

</details>

<details>
<summary>Show solution ideas</summary>

1. Store the profile fields and print each with a label.
2. `print(f"{product_name}: Rs. {price:.2f}")`.
3. Indent each statement that belongs to the `if` block.
4. `student_name` and `_total` are valid; the others break identifier rules.
5. Use three `print()` calls with text such as `"--- Receipt ---"`.
6. `print(f"{book_title} was written by {author_name}.")`.
7. The variable contains the value from its final assignment.
8. Examples include `total_price`, `student_count`, and `book_title`.
9. For `number` in `range(1, 6)`, print `number * value`.
10. They begin with a digit, contain a space, or use a keyword.

</details>

## Homework

Create a `profile.py` program that prints a formatted profile using at least five descriptive variables and comments explaining the data.

## Checkpoint

Explain the difference between a statement and an expression, identify three valid variable names, and fix a missing quotation mark by reading Python's error message.

---

[Course home](../README.md) · [Course map](../COURSE_MAP.md) · Next: [Variables and Data Types](../02-variables-and-data-types/lesson.md)
