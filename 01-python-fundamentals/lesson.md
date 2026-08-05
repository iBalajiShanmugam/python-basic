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

You can ask Python for the keyword list instead of memorizing it:

```python
import keyword

print(keyword.kwlist)
print(keyword.iskeyword("class"))  # True
print(keyword.iskeyword("student"))  # False
```

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
list = [1, 2, 3]

# Prefer this:
numbers = [1, 2, 3]
```

If you use `list` as a variable, calling `list("abc")` later will no longer work as expected in that scope.

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
