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

[Solve the data type problem set](../problem-solving/02-data-types/problems.md)

## Homework

Design a data model for an online order using at least eight variables. Add a comment explaining the type chosen for each value.

## Checkpoint

Choose suitable types for a person's name, age, salary, employee code, account status, and missing middle name. Explain each choice.

---

Previous: [Python Fundamentals](../01-python-fundamentals/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Type Conversion](../03-type-conversion/lesson.md)
