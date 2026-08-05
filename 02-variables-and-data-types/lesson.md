# 02 - Variables and Data Types

## What you will learn

Variables and Python's common built-in types: `int`, `float`, `complex`, `bool`, `str`, and `None`.

## Core idea

A variable is a name pointing to a value. Python determines the value's type at runtime.

```python
name = "Anita"       # str
age = 21             # int
rating = 4.5         # float
is_active = True     # bool
middle_name = None   # no value

print(type(name))
```

Use data types to represent the meaning of data. A price is numeric; a product code may be text even when it contains digits.

## Mutable versus immutable

Numbers, booleans, strings, and tuples cannot be changed in place. Lists and dictionaries can be changed; collections are covered later.

## Common mistakes

Do not assume that everything that looks numeric should be an `int`. A phone number or postal code may need leading zeroes and is usually represented as a string.

## Practice

[Solve the data type problem set](../problem-solving/02-data-types/problems.md)

## Homework

Design a data model for an online order using at least eight variables. Add a comment explaining the type chosen for each value.

## Checkpoint

Choose suitable types for a person's name, age, salary, employee code, account status, and missing middle name. Explain each choice.
