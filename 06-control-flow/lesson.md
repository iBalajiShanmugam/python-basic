---
layout: default
title: Control Flow
parent: Lessons
nav_order: 6
permalink: /lessons/control-flow/
course_lesson: true
course_index: "06"
previous_page: /lessons/input-and-output/
previous_title: Input and Output
next_page: /lessons/strings/
next_title: Strings
---

# 06 - Control Flow

Control flow decides which statements run and how often they run.

## A simple picture

Imagine walking through a game maze:

- a condition chooses one path;
- a `for` loop visits each checkpoint;
- a `while` loop keeps moving while a rule remains true;
- `break` is an emergency exit.

```text
start -> question? -> chosen path -> repeat if needed -> finish
```

## Conditions

A **condition** is an expression whose answer is `True` or `False`. A **branch** is one possible path through the program.

```python
score = 72
if score >= 90:
    grade = "A"
elif score >= 60:
    grade = "B"
else:
    grade = "C"
print(grade)
```

Python tests conditions from top to bottom and runs the first matching branch. The `else` branch runs when no condition matches.

Notice the colon `:` and four beginning spaces. The spaces show which lines belong to each branch.

## Nested conditions

```python
age = 25
has_ticket = True
if age >= 18:
    if has_ticket:
        print("Enter")
    else:
        print("Buy a ticket")
else:
    print("Not eligible")
```

Before nesting many levels, consider combining clear conditions with `and`. Functions provide another organisation tool in Chapter 10.

## What is an iterable?

An iterable is a value that contains, or can produce, items one at a time. In simple words, Python can “go through” it.

Start with two iterables you already recognise:

- a string produces one character at a time;
- `range()` produces one number at a time.

A **list** is a group written inside square brackets, such as `[10, 20, 30]`. Lists receive a complete lesson in Chapter 08. The table below is a map of iterable types you will gradually learn; you do not need to master them here.

Common iterables that you will use are:

| Iterable | Example items produced |
|---|---|
| List | `[10, 20, 30]` produces `10`, then `20`, then `30` |
| Tuple | `("red", "blue")` produces `"red"`, then `"blue"` |
| String | `"cat"` produces `"c"`, then `"a"`, then `"t"` |
| Set | `{"Python", "Java"}` produces each value; order is not guaranteed |
| Dictionary | `{"name": "Ravi", "age": 20}` produces its keys by default |
| `range()` | `range(1, 4)` produces `1`, then `2`, then `3` |

Beginner examples:

```python
for letter in "cat":
    print(letter)

for number in range(1, 4):
    print(number)
```

An integer, float, or boolean is not iterable because it is one value, not a group of values:

```python
# for number in 10:  # TypeError: an integer is not iterable
#     print(number)
```

You do not need to memorize the technical definition. When you see `for`, ask: “Can Python visit the values inside this object one by one?”

## `for` loops

Use `for` to process each item in an iterable. The name after `for` receives one item at a time. This name is called the **loop variable**:

```python
for number in range(1, 4):
    print(number)
```

The loop runs three times:

1. `number` becomes `1`.
2. `number` becomes `2`.
3. `number` becomes `3`.

The loop variable is not required to be called `item`; choose a name that describes each value.

```python
for letter in "Python":
    print(letter)
```

<details>
<summary>Preview: looping through dictionaries from Chapter 09</summary>

### Looping through a dictionary

By default, a dictionary loop visits keys:

```python
student = {"name": "Ravi", "marks": 86}

for key in student:
    print(key)
```

Use `.values()` for values and `.items()` for both keys and values:

```python
for value in student.values():
    print(value)

for key, value in student.items():
    print(f"{key}: {value}")
```

</details>

## `range()`

`range(start, stop, step)` produces numbers up to but not including `stop`:

```python
range(5)          # 0, 1, 2, 3, 4
range(2, 6)       # 2, 3, 4, 5
range(10, 4, -2)  # 10, 8, 6
```

```python
for number in range(1, 6):
    print(number)
```

## Accumulation

Use a variable to remember work from earlier iterations:

```python
total = 0
for number in range(1, 6):
    total += number
print(total)  # 15
```

## `while` loops

Use `while` when the number of repetitions depends on a condition:

```python
attempts = 0
while attempts < 3:
    print("Attempt", attempts + 1)
    attempts += 1
```

Always ensure something inside the loop can eventually make the condition false. Otherwise the loop never ends.

> **Important fact:** before running a `while` loop, point to the line that will eventually make its condition false. If no such line exists, the loop may run forever.

## `break`, `continue`, and `pass`

```python
for number in range(1, 11):
    if number == 5:
        break       # stop the loop completely
    print(number)
```

```python
for number in range(1, 6):
    if number % 2 == 0:
        continue    # skip even numbers
    print(number)
```

`pass` does nothing and is useful temporarily while designing a block:

```python
score = 80
if score >= 50:
    pass
```

The program above is valid, but `pass` produces no output. Replace it when the branch is ready.

## `else` with loops

Python also allows `else` after a `for` or `while` loop. The `else` block runs when the loop finishes normally. It does not run when `break` stops the loop.

```python
for number in range(2, 6):
    print(number)
else:
    print("The loop finished normally")
```

This is useful for searching:

```python
numbers = [3, 7, 11]
target = 7

for number in numbers:
    if number == target:
        print("Found")
        break
else:
    print("Not found")
```

If `target` is not found, the loop reaches its end and the `else` block runs. If it is found, `break` runs and the `else` block is skipped.

## Real-world example: menu loop

```python
while True:
    choice = input("Choose add, view, or exit: ").strip().lower()
    if choice == "add":
        print("Adding item")
    elif choice == "view":
        print("Showing items")
    elif choice == "exit":
        break
    else:
        print("Unknown choice")
```

## Common mistakes

- Forgetting the colon after `if`, `for`, or `while`.
- Using `range(1, 5)` expecting it to include 5.
- Forgetting to update a `while` loop's control variable.
- Putting `break` outside the intended loop.
- Using `continue` without understanding which code it skips.

## Bug Hunter

### Bug 1 — missing colon

```python
age = 12
if age >= 10
    print("Welcome")
```

### Bug 2 — endless loop

```python
count = 1
while count <= 3:
    print(count)
```

### Bug 3 — wrong range ending

```python
for number in range(1, 5):
    print(number)
```

The programmer expects `1` through `5`, but `range()` stops before its stop value.

<details>
<summary>Show Bug Hunter fixes</summary>

```python
# Bug 1
if age >= 10:
    print("Welcome")

# Bug 2
count = 1
while count <= 3:
    print(count)
    count += 1

# Bug 3
for number in range(1, 6):
    print(number)
```

</details>

<details>
<summary>Optional deeper look: how does a <code>for</code> loop get values?</summary>

Python asks the iterable for an **iterator**, an object that supplies one item at a time. The loop repeatedly asks that iterator for its next value. A special internal signal named `StopIteration` tells the loop that no items remain. Intermediate Python studies this protocol directly.

</details>

## Practice

Try these problems on this page. Before coding, write the decision or repetition in plain English.

### Problems

1. Check whether a number is positive, negative, or zero.
2. Find the larger of two numbers without `max()`.
3. Find the largest of three numbers.
4. Print numbers from 1 to 20.
5. Print all even numbers in a range.
6. Calculate the sum from 1 to `n`.
7. Check whether a year is a leap year. A year is a leap year when it is divisible by 400, or when it is divisible by 4 but not by 100.
8. Build a menu-driven calculator loop.
9. Print a multiplication table for a chosen number.
10. Check whether a number is prime.

<details>
<summary>Show hints</summary>

1. Compare the number with zero using `if` and `elif`.
2. Keep the larger value in a variable.
3. Compare each value with the current largest value.
4. Use `range(1, 21)`.
5. A number is even when its remainder after division by 2 is zero.
6. Start `total` at zero and add each number.
7. Translate each part of the written leap-year rule into remainder comparisons, then join them with `and` and `or`.
8. Put the menu inside a loop and provide an exit choice.
9. Multiply the chosen number by values from 1 to 10.
10. Test divisors from 2 up to the number, then improve later.

</details>

<details>
<summary>Show solution ideas</summary>

1. Use `if number > 0`, `elif number < 0`, otherwise zero.
2. Start with `largest = a`; use an `if` block to replace it with `b` when `b` is greater.
3. Start with `largest = a`, then compare `b` and `c`.
4. `for number in range(1, 21): print(number)`.
5. Add `if number % 2 == 0` inside the loop.
6. Add every value in `range(1, n + 1)`.
7. `year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)`.
8. Continue until the user chooses `exit`.
9. Use `for multiplier in range(1, 11)`.
10. If any number from 2 through `n - 1` divides evenly, it is not prime.

</details>

## Homework

Build a menu-driven quiz with five questions, a score counter, and a final result. Include an option to exit before completing all questions.

## Checkpoint

Write a countdown from ten to five, explain why a `while` loop terminates, and find the largest of three values without using `max()`.

---

Previous: [Input and Output](../05-input-and-output/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Strings](../07-strings/lesson.md)
