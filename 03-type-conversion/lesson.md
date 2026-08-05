# 03 - Type Conversion

## Why conversion is needed

`input()` returns a string even when the user types digits:

```python
first = input("First number: ")
second = input("Second number: ")
print(first + second)  # 23 if the inputs were 2 and 3
```

The strings are joined. Convert them before arithmetic:

```python
first = int(input("First number: "))
second = int(input("Second number: "))
print(first + second)  # 5
```

## Common conversion functions

### `int()`

```python
print(int("25"))
print(int(4.9))       # 4: fractional part is discarded
```

`int("4.9")` fails because the text is not an integer literal. Convert through `float()` if decimal input is intentionally allowed.

### `float()`

```python
price = float("19.50")
print(price * 2)
```

### `str()`

```python
order_id = 105
message = "Order: " + str(order_id)
```

For formatted output, an f-string is usually clearer: `f"Order: {order_id}"`.

### `bool()`

Most values are truthy or falsy:

```python
print(bool(0))       # False
print(bool(1))       # True
print(bool(""))      # False
print(bool("False")) # True: non-empty text
print(bool([]))      # False
```

Do not convert the string `"False"` to a boolean expecting `False`; it is non-empty text.

### `complex()`

```python
number = complex(3, 4)
print(number)  # (3+4j)
```

This is useful for complex-number work, not ordinary price or age input.

## Errors during conversion

```python
int("ten")   # ValueError
int("3.5")   # ValueError
int(None)     # TypeError
```

At this stage, read the error and correct the input. Later, exception handling will let you show a friendly message and ask again.

## Converting several fields

```python
quantity = int(input("Quantity: "))
price = float(input("Price: "))
total = quantity * price
print(f"Total: {total:.2f}")
```

Convert each field according to its meaning. Do not convert everything to `float` just because calculations are involved.

## Common mistakes

- Forgetting that `input()` returns `str`.
- Calling `int()` on decimal text.
- Treating non-empty text such as `"no"` as boolean false.
- Converting before checking what format the user is allowed to enter.

## Practice

Try these problems on this page. For each one, write the original type and the type you need after conversion.

### Problems

1. Convert a text age to an integer and print the next age.
2. Convert two text prices to floats and add them.
3. Convert total minutes into hours and remaining minutes.
4. Convert a numeric string into an integer only when it contains a valid whole number.
5. Predict the result of `bool(0)`, `bool(1)`, `bool("")`, and `bool("False")`.
6. Identify which of five conversion expressions will raise an error.
7. Accept a decimal mark and display its rounded integer form.
8. Convert Celsius text input to Fahrenheit.
9. Write three examples that cause `ValueError` when passed to `int()`.
10. Create a conversion plan for quantity, price, and discount inputs.

<details>
<summary>Show hints</summary>

1. Use `int()` before adding one.
2. Use `float()` for both values.
3. Use `//` for complete hours and `%` for remaining minutes.
4. Check the format before calling `int()`.
5. Empty values are false; non-empty strings are true.
6. Check both the argument type and its contents.
7. Convert text to `float()` before rounding.
8. Fahrenheit is Celsius times 9/5 plus 32.
9. Use words, decimal text, and empty text.
10. Convert count to `int`, money to `float`, and reject negative values.

</details>

<details>
<summary>Show solution ideas</summary>

1. `age = int(age_text); print(age + 1)`.
2. `total = float(first) + float(second)`.
3. `hours, minutes = divmod(total_minutes, 60)`.
4. For the beginner case, use `text.isdigit()` before `int(text)`.
5. The results are `False`, `True`, `False`, and `True`.
6. `int("12")` works; `int("12.5")`, `int("ten")`, and `int("")` raise `ValueError`.
7. `rounded = round(float(mark_text))`.
8. `fahrenheit = float(celsius_text) * 9 / 5 + 32`.
9. Examples: `int("ten")`, `int("3.5")`, and `int("")`.
10. Convert and validate each field separately before calculating.

</details>

## Homework

Write a program that reads a person's age in years and converts it into approximate months and days. State your assumption about the number of days in a year.

## Checkpoint

Explain why `input()` needs conversion for arithmetic and predict `bool(0)`, `bool(1)`, `bool("")`, and `bool("False")`.

---

Previous: [Variables and Data Types](../02-variables-and-data-types/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Operators](../04-operators/lesson.md)
