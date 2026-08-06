---
layout: default
title: Input and Output
parent: Lessons
nav_order: 5
permalink: /lessons/input-and-output/
course_lesson: true
course_index: "05"
previous_page: /lessons/operators/
previous_title: Operators
next_page: /lessons/control-flow/
next_title: Control Flow
---

# 05 - Input and Output

Programs become useful when they receive information and communicate results clearly.

## A simple picture

Input is the program's ear: it listens to what a person types. Output is the program's voice: it displays a clear answer. A friendly program asks one clear question at a time.

## Reading input

`input()` displays a prompt, waits for the user, and returns the entered text without the final Enter key:

```python
name = input("What is your name? ").strip()
print(f"Welcome, {name}!")
```

`.strip()` removes accidental spaces at the beginning and end. It does not remove spaces between words.

> **Important fact:** `input()` always returns a string (`str`). This is true even when the person types digits.

Try this program and enter `25`:

```python
age_text = input("Enter your age: ")

print(age_text)
print(type(age_text))
```

Output:

```text
25
<class 'str'>
```

The value looks like a number to us, but Python received keyboard characters. Convert it only when the program needs number operations:

```python
age_text = input("Enter your age: ")
age = int(age_text)

print(age)
print(type(age))
```

```text
keyboard -> input() -> str -> int() or float() when needed
```

Convert numeric input explicitly:

```python
quantity = int(input("Quantity: "))
price = float(input("Price: "))
```

The inner `input()` runs first. Its string result is passed to `int()` or `float()`.

## Displaying output

`print()` displays values and ends with a newline by default:

```python
print("Python")
print("is enjoyable")
```

It accepts multiple values and separates them with a space:

```python
print("Total", 125)  # Total 125
```

Change the separator with `sep`:

```python
print(2026, 8, 5, sep="-")  # 2026-8-5
```

Change the ending with `end`:

```python
print("Loading", end="...")
print("done")             # Loading...done
```

## Escape characters

Escape characters represent special formatting inside a string:

| Sequence | Meaning |
|---|---|
| `\n` | new line |
| `\t` | tab |
| `\\` | backslash |
| `\"` | double quote |
| `\'` | single quote |

```python
print("Name:\tRavi\nCity:\tPune")
```

Use triple quotes for a multi-line string when appropriate.

## f-strings

An f-string inserts expressions inside `{}`:

```python
name = "Ravi"
total = 125.5
print(f"{name} paid Rs. {total:.2f}")
```

Useful format specifiers include `.2f` for two decimal places and `>10` for right alignment:

```python
print(f"{'Item':<12}{'Price':>8}")
print(f"{'Pen':<12}{12.5:>8.2f}")
```

## Designing a good interaction

Write the conversation before writing code:

```text
Product name: Notebook
Quantity: 2
Unit price: 45.50
Total: 91.00
```

Then identify the type of every input and the formula for the result.

## Real-world example

```python
item = input("Item: ").strip()
quantity = int(input("Quantity: "))
unit_price = float(input("Unit price: "))
total = quantity * unit_price

print("\n--- Receipt ---")
print(f"Item:     {item}")
print(f"Quantity: {quantity}")
print(f"Total:    Rs. {total:.2f}")
```

This is clear because each value has a label and the money value has consistent formatting.

## Common mistakes

- Forgetting that input is text.
- Leaving user spaces uncleaned.
- Printing a calculation expression as text instead of evaluating it.
- Using many commas when one formatted f-string would be clearer.
- Mixing prompts, calculations, and output so the program is difficult to change.

## Bug Hunter

### Bug 1 — the number is still text

```python
age = input("Age: ")
next_age = age + 1
print(next_age)
```

Clue: convert the input before adding a number.

### Bug 2 — conversion happens too late

```python
first = input("First number: ")
second = input("Second number: ")
total = first + second
print(int(total))
```

If the inputs are `2` and `3`, this prints `23`. Convert each input before addition.

### Bug 3 — forgotten f-string marker

```python
name = input("Name: ")
print("Hello, {name}!")
```

Clue: an f-string begins with `f` before the opening quote.

<details markdown="1">
<summary>Show Bug Hunter fixes</summary>

```python
# Bug 1
age = int(input("Age: "))
next_age = age + 1
print(next_age)

# Bug 2
first = int(input("First number: "))
second = int(input("Second number: "))
total = first + second
print(total)

# Bug 3
name = input("Name: ")
print(f"Hello, {name}!")
```

</details>

<details markdown="1">
<summary>Optional deeper look: where do input and output go?</summary>

The terminal provides a text input stream called **standard input**. `input()` reads one line from it. `print()` writes text to **standard output**. A stream is simply a flow of data that a program can read or write. Keeping conversion separate makes the program easier to test later.

</details>

## Practice

Try these problems on this page. First write the sample conversation, then write the program.

### Problems

1. Read a name and greet the user.
2. Read two numbers and print their sum in a sentence.
3. Print a date using `sep`.
4. Create a formatted product receipt.
5. Read hours and hourly rate and print salary.
6. Predict the output of small programs using `sep` and `end`.
7. Build a temperature conversion prompt and result.
8. Print a three-column table using f-strings.
9. Create an invoice with aligned labels.
10. Design the input and output for a menu item order before writing code.

<details markdown="1">
<summary>Show hints</summary>

1. Store `input()` in a variable and use an f-string.
2. Convert both inputs to numbers.
3. Pass the date pieces to `print()` with `sep="-"`.
4. Give every value a label.
5. Multiply hours by the hourly rate.
6. `sep` goes between values; `end` replaces the final newline.
7. Convert the temperature to `float`.
8. Use alignment such as `:<12` and `:>8`.
9. Print one label and value per line.
10. Write example input and output before coding.

</details>

<details markdown="1">
<summary>Show solution ideas</summary>

1. `name = input("Name: ")` followed by `print(f"Hello, {name}!")`.
2. Convert with `int()` and calculate `first + second`.
3. `print(year, month, day, sep="-")`.
4. Use quantity times unit price and format money with `.2f`.
5. `salary = float(hours) * float(rate)`.
6. Read the code left to right and mark each separator and ending character.
7. Use `fahrenheit = celsius * 9 / 5 + 32`.
8. Use f-string width specifiers.
9. Separate input, calculation, and display with clear labels.
10. Decide the prompt, type, and output for every field.

</details>

## Homework

Create a formatted travel booking confirmation that accepts a passenger name, destination, ticket count, and total price.

## Checkpoint

Build a program that reads a product name, quantity, and price and prints a formatted receipt line.
