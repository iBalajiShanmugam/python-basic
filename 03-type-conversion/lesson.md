---
layout: default
title: Type Conversion
parent: Lessons
nav_order: 3
permalink: /lessons/type-conversion/
course_lesson: true
course_index: "03"
previous_page: /lessons/variables-and-data-types/
previous_title: Variables and Data Types
next_page: /lessons/operators/
next_title: Operators
---

# 03 - Type Conversion

## A simple picture

Imagine the text `"25"` written on a card. It looks like a number, but Python still treats it as text because it has quotation marks. Conversion is like moving the value from a “text” box into a “whole number” box.

## Why conversion is needed

Sometimes a value has the wrong type for the job. In this example, both values are strings because they have quotation marks:

```python
first_text = "2"
second_text = "3"
print(first_text + second_text)  # 23 because strings are joined
```

Convert the strings into integers before arithmetic:

```python
first_number = int(first_text)
second_number = int(second_text)
print(first_number + second_number)  # 5
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

> **Important fact:** conversion does not merely change a label. A successful conversion gives you a value of the requested type. Some information may be lost—for example, `int(4.9)` gives `4` and discards the decimal part.

## Converting several stored fields

```python
quantity_text = "3"
price_text = "19.50"

quantity = int(quantity_text)
price = float(price_text)

print(quantity, type(quantity))
print(price, type(price))
```

Convert each field according to its meaning. Do not convert everything to `float` merely because the text contains digits.

## Bug Hunter

### Bug 1 — decimal text sent directly to `int()`

```python
mark_text = "82.5"
mark = int(mark_text)
print(mark)
```

### Bug 2 — the result was not saved

```python
age_text = "10"
int(age_text)
print(type(age_text))
```

Conversion returns a value. It does not replace the original string automatically.

### Bug 3 — surprising boolean text

```python
answer = "False"
print(bool(answer))
```

Any non-empty string is truthy, even when its letters spell `False`.

<details>
<summary>Show Bug Hunter explanations</summary>

```python
# Bug 1: allow decimal text first, then remove its decimal part if intended.
mark = int(float(mark_text))

# Bug 2: store the returned integer under a name.
age = int(age_text)
print(type(age))

# Bug 3: do not use bool(text) to understand yes/no words.
# Comparisons are taught in the next chapter. For now, remember that
# every non-empty string becomes True.
answer_value = False
print(answer_value)
```

</details>

<details>
<summary>Optional deeper look: does conversion change the original value?</summary>

No. Built-in conversion functions such as `int()`, `float()`, and `str()` return an object representing the converted value. The original object still exists while something refers to it. Store the returned value when you need it later.

</details>

## Common mistakes

- Forgetting that quotation marks make a value a `str`.
- Calling `int()` on decimal text.
- Treating non-empty text such as `"no"` as boolean false.
- Converting before checking what format the user is allowed to enter.

## Practice

Try these problems on this page. For each one, write the original type and the type you need after conversion.

### Problems

1. Convert the text age `"10"` to an integer and print both types.
2. Convert the text price `"45.50"` to a float and print both values.
3. Convert the integer `25` to a string and join it with the text `"Age: "`.
4. Predict whether `int("40")`, `int("4.0")`, and `float("4.0")` work, then run them separately.
5. Predict the result of `bool(0)`, `bool(1)`, `bool("")`, and `bool("False")`.
6. Identify which of five conversion expressions will raise an error.
7. Convert the decimal text `"82.7"` to a float and then use `int()` to remove its decimal part.
8. Convert the values `0`, `1`, `""`, and `"hello"` to booleans.
9. Write three examples that cause `ValueError` when passed to `int()`.
10. Create a conversion plan for stored text values representing quantity, price, and discount.

<details>
<summary>Show hints</summary>

1. Save the original and converted values under different names.
2. Use `float()` and `type()`.
3. Use `str(25)` before joining the text.
4. Run one conversion at a time because an error stops the program.
5. Empty values are false; non-empty strings are true.
6. Check both the argument type and its contents.
7. Convert to `float` first and then to `int`.
8. Empty values and zero are false; non-empty text and non-zero numbers are true.
9. Use words, decimal text, and empty text.
10. Convert count to `int`, money to `float`, and reject negative values.

</details>

<details>
<summary>Show solution ideas</summary>

1. Use `age_text = "10"`, `age = int(age_text)`, and two `type()` calls.
2. Use `price_text = "45.50"` and `price = float(price_text)`.
3. Use `message = "Age: " + str(25)`.
4. `int("40")` and `float("4.0")` work; `int("4.0")` raises `ValueError`.
5. The results are `False`, `True`, `False`, and `True`.
6. `int("12")` works; `int("12.5")`, `int("ten")`, and `int("")` raise `ValueError`.
7. `whole_mark = int(float("82.7"))` gives `82`; it does not round up.
8. Use `bool()` on each value and compare the printed results.
9. Examples: `int("ten")`, `int("3.5")`, and `int("")`.
10. Plan `int` for quantity and `float` for price and discount; later chapters teach input validation.

</details>

## Homework

Create a conversion notebook in code. Start with five stored values such as `"12"`, `"9.5"`, `0`, `True`, and `25`. Convert each value to one sensible new type and explain the result in a comment.

## Checkpoint

Explain why `"25"` and `25` are different values. Then predict `bool(0)`, `bool(1)`, `bool("")`, and `bool("False")`.

---

Previous: [Variables and Data Types](../02-variables-and-data-types/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Operators](../04-operators/lesson.md)
