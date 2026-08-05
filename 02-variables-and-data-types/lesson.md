# 02 - Variables and Data Types

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

## A few more built-in types

The PDF introduces a few types that you will meet later. You do not need to use them in your first projects, but you should recognize their names:

```python
raw_data = b"ABC"       # bytes: fixed binary data
editable_data = bytearray(b"ABC")  # bytearray: changeable binary data
unique_values = frozenset({1, 2, 3}) # frozenset: an unchangeable set
```

Use ordinary strings, lists, sets, and dictionaries for the Basic projects. Binary data and immutable sets are useful when working with files, networks, or advanced APIs.

## Inspecting types

```python
values = [28, 19.5, True, "Python", None]
for value in values:
    print(value, type(value))
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

## Mutable and immutable values

Numbers, booleans, strings, and tuples cannot be changed in place. Lists and dictionaries can be changed; they are introduced later. This difference matters when multiple names refer to the same collection.

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
3. Calculate the area of a rectangle using two numeric variables.
4. Store a phone number that begins with zero without losing that zero.
5. Store whether a customer is eligible for free delivery.
6. Predict the type of six different values before using `type()` to check.
7. Explain why a postal code and a quantity may look similar but need different types.
8. Create variables for a product record and display all fields.
9. Write a program that reports whether a value is `None`.
10. Design the data types for a student record and justify each choice.

<details>
<summary>Show hints</summary>

1. Think about the operations each field needs.
2. Use `type(value)`.
3. Area is length multiplied by width.
4. Put the phone number inside quotes.
5. Store the result of a comparison in a boolean variable.
6. Quoted values are strings; comparisons produce booleans.
7. A postal code is an identifier, not a quantity to calculate.
8. Use clear names such as `product_name` and `unit_price`.
9. Use `value is None`.
10. Make a small table with field, type, and reason.

</details>

<details>
<summary>Show solution ideas</summary>

1. Use `str`, `int`, `float`, `str`, `bool`, and `None` respectively.
2. Put each value into `print(type(value))`.
3. `area = length * width`.
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

---

Previous: [Python Fundamentals](../01-python-fundamentals/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Type Conversion](../03-type-conversion/lesson.md)
