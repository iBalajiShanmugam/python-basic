# 06 - Control Flow

## What you will learn

Conditions, loops, `range()`, and transfer statements.

```python
score = 72
if score >= 90:
    grade = "A"
elif score >= 60:
    grade = "B"
else:
    grade = "C"
```

Use `for` when iterating over a known sequence and `while` when repeating until a condition changes.

```python
for number in range(1, 4):
    print(number)
```

`break` exits a loop, `continue` skips to the next iteration, and `pass` is a placeholder.

## Practice

[Solve the control-flow problem set](../problem-solving/06-control-flow/problems.md)

## Homework

Build a menu-driven quiz with five questions, a score counter, and a final result. Include an option to exit before completing all questions.

## Checkpoint

Write a loop that counts down from ten and stops at five. Then write a separate program that prints the largest of three values without using `max()`.
