# 04 - Operators

## What you will learn

Arithmetic, comparison, logical, assignment, membership, identity, and precedence rules.

```python
total = 17 + 5
remainder = 17 % 5
whole = 17 // 5
is_valid = total >= 20 and remainder != 0
```

Use parentheses when they make the intended order clearer. `==` compares values; `is` checks object identity and is generally used for singleton values such as `None`.

Membership checks whether a value occurs in a container:

```python
allowed = "admin" in {"admin", "owner"}
```

## Practice

[Solve the operators problem set](../problem-solving/04-operators/problems.md)

## Homework

Build a shipping-cost expression using order value, package weight, membership status, and distance. Write at least three test cases.

## Checkpoint

Evaluate a mixed expression by hand, then verify it in Python. Explain the difference between `/`, `//`, and `%`, and between `==` and `is`.
