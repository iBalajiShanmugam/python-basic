# 03 - Type Conversion

## What you will learn

How to convert values and how to recognize invalid conversions.

```python
age_text = "25"
age = int(age_text)
price = float("19.50")
label = str(42)
has_items = bool(["item"])
```

`input()` always returns a string. Convert it before performing numeric calculations.

```python
quantity = int(input("Quantity: "))
price = float(input("Price: "))
print(quantity * price)
```

`int("3.5")` raises `ValueError`; `int(3.5)` works and discards the fractional part. Conversion does not magically make invalid data valid.

## Practice

[Solve the type conversion problem set](../problem-solving/03-type-conversion/problems.md)

## Homework

Write a program that reads a person's age in years and converts it into approximate months and days. State your assumption about the number of days in a year.

## Checkpoint

Explain why `input()` needs conversion for arithmetic and predict the result of `bool(0)`, `bool(1)`, `bool("")`, and `bool("False")`.
