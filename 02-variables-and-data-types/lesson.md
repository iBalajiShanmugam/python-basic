---
layout: default
title: Variables and Data Types
parent: Lessons
nav_order: 2
permalink: /lessons/variables-and-data-types/
course_lesson: true
course_index: "02"
previous_page: /lessons/fundamentals/
previous_title: Python Fundamentals
next_page: /lessons/type-conversion/
next_title: Type Conversion
---

# 02 - Variables and Data Types

## A simple picture

A variable is like a name sticker on a box. The sticker helps us find the value inside. The data type tells Python what kind of value it is, just as a label may say “books,” “toys,” or “water.”

## Variables

A variable is a readable name attached to a value. Python creates or updates the name when you assign with `=`.

```python
customer_name = "Meera"
items = 3
print(customer_name, items)
```

A variable does not permanently lock a type:

```python
value = 10
value = "ten"
```

This flexibility is useful, but clear programs usually keep one meaning for a variable.

## Common built-in types

### `int` - whole numbers

```python
age = 28
temperature_change = -4
```

Use integers for counts, indexes, and whole-number measurements.

### `float` - decimal numbers

```python
price = 149.50
average = 82.75
```

Floating-point arithmetic can contain tiny precision differences. For beginner calculations, it is enough to understand that floats represent approximate decimal values.

### `complex` - real and imaginary parts

```python
signal = 3 + 4j
print(signal.real, signal.imag)
```

Complex numbers are used in scientific and engineering calculations; they are not needed for most business programs.

### `bool` - true or false

```python
is_logged_in = True
has_paid = False
```

Booleans are often produced by comparisons and used in conditions.

### `str` - text

```python
employee_code = "007"
```

The quotes make this text. Keeping a code as a string preserves leading zeroes.

### `None` - absence of a value

```python
middle_name = None
```

`None` is not zero, an empty string, or `False`. It means that a value is missing or not available. Check it with `is None`.

<details markdown="1">
<summary>Optional preview: types used in later courses</summary>

These additional types are useful for files, networks, and advanced APIs. You do not need them in the Basic projects:

```python
raw_data = b"ABC"       # bytes: fixed binary data
editable_data = bytearray(b"ABC")  # bytearray: changeable binary data
unique_values = frozenset({1, 2, 3}) # frozenset: an unchangeable set
```

Use ordinary strings, lists, sets, and dictionaries for the Basic projects. Binary data and immutable sets are useful when working with files, networks, or advanced APIs.

</details>

## Inspecting types

```python
print(28, type(28))
print(19.5, type(19.5))
print(True, type(True))
print("Python", type("Python"))
print(None, type(None))
```

`type()` is useful while learning and debugging. In larger programs, choose clear data models rather than repeatedly checking types.

## Real-world example

```python
product_name = "Notebook"
product_code = "N-007"
unit_price = 45.50
quantity = 4
in_stock = True
supplier_note = None
```

Each type matches the meaning of the field. `product_code` is text even though it contains digits.

<details markdown="1">
<summary>Optional preview: values that can and cannot change</summary>

## Mutable and immutable values

Numbers, booleans, strings, and tuples cannot be changed in place. Lists and dictionaries can be changed; they are introduced later. This difference matters when multiple names refer to the same collection.

</details>

> **Important fact:** quotation marks change meaning. `25` is an integer that can be used as a quantity; `"25"` is text made from the characters `2` and `5`.

## Bug Hunter

### Bug 1 — missing quotation marks

```python
city = Chennai
print(city)
```

### Bug 2 — a code is not a quantity

```python
student_code = 007
print(student_code)
```

Python 3 does not allow a decimal integer literal with a leading zero. A student code is an identifier, so store it as text.

### Bug 3 — unclear meaning

```python
x = "Notebook"
y = 45.50
```

The code runs, but another learner cannot easily understand the names.

<details markdown="1">
<summary>Show Bug Hunter fixes</summary>

```python
city = "Chennai"

student_code = "007"

product_name = "Notebook"
unit_price = 45.50
```

</details>

<details markdown="1">
<summary>Optional deeper look: how does Python know a type?</summary>

Every Python value is an object that remembers its own type. A variable name does not have a permanently fixed type; the name refers to an object, and the object has the type. That is why `type(value)` can inspect the value at runtime.

</details>

## Common mistakes

- Treating a phone number as a number and losing leading zeroes.
- Using `0` when “not provided” should be `None`.
- Assuming a decimal is always exact.
- Giving vague names such as `x` and `data` when the meaning is known.

## Practice

Try these problems on this page. For every answer, write down why you chose the data type.

### Problems

1. Choose types for a name, age, salary, employee code, active status, and missing value.
2. Print the type of an integer, decimal, boolean, string, and `None`.
3. Store the length and width of a rectangle using numeric variables, then print both types.
4. Store a phone number that begins with zero without losing that zero.
5. Store whether an item is available using the boolean value `True`.
6. Predict the type of six different values before using `type()` to check.
7. Explain why a postal code and a quantity may look similar but need different types.
8. Create variables for a product record and display all fields.
9. Store a missing middle name with `None`, then print the value and its type.
10. Design the data types for a student record and justify each choice.

<details markdown="1">
<summary>Show hints</summary>

1. Think about the operations each field needs.
2. Use `type(value)`.
3. Whole measurements can use `int`; measurements with decimal parts can use `float`.
4. Put the phone number inside quotes.
5. Use a clear name such as `is_available` and store `True`.
6. Quoted values are strings; comparisons produce booleans.
7. A postal code is an identifier, not a quantity to calculate.
8. Use clear names such as `product_name` and `unit_price`.
9. Use `middle_name = None`, then print `middle_name` and `type(middle_name)`.
10. Make a small table with field, type, and reason.

</details>

<details markdown="1">
<summary>Show solution ideas</summary>

1. Use `str`, `int`, `float`, `str`, `bool`, and `None` respectively.
2. Put each value into `print(type(value))`.
3. Store values such as `length = 10` and `width = 4.5`, then use `type()`.
4. `phone_number = "0123456789"`.
5. `free_delivery = order_total >= free_delivery_limit`.
6. `42` is `int`, `4.2` is `float`, `True` is `bool`, text is `str`, and `None` is `NoneType`.
7. A postal code must preserve formatting; a quantity is used in arithmetic.
8. Store the fields in separate variables and use an f-string.
9. `if value is None: print("Missing")`.
10. Choose types based on meaning and describe the reason in comments.

</details>

## Homework

Design a data model for an online order using at least eight variables. Add a comment explaining the type chosen for each value.

## Checkpoint

Choose suitable types for a person's name, age, salary, employee code, account status, and missing middle name. Explain each choice.
