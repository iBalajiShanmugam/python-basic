---
layout: default
title: Operators
parent: Lessons
nav_order: 4
permalink: /lessons/operators/
course_lesson: true
course_index: "04"
previous_page: /lessons/type-conversion/
previous_title: Type Conversion
next_page: /lessons/input-and-output/
next_title: Input and Output
---

# 04 - Operators in Python

Operators help Python calculate values and answer questions.

## A simple picture

Imagine a calculator with many buttons:

- `+` is the **add** button.
- `-` is the **subtract** button.
- `*` is the **multiply** button.
- `>` is the **is greater than?** question button.
- `and` joins two questions.

Python calls these buttons **operators**. The values used with an operator are called **operands**.

```python
total = 10 + 5
print(total)
```

Read the important line from left to right:

```text
total = 10 + 5
              ^
              operator
        ^^   ^
        operands
```

Python first calculates `10 + 5`. The answer `15` is then stored using the name `total`.

## 1. Arithmetic operators

Arithmetic means working with numbers.

| Operator | Meaning | Example | Answer |
|---|---|---:|---:|
| `+` | add | `10 + 3` | `13` |
| `-` | subtract | `10 - 3` | `7` |
| `*` | multiply | `10 * 3` | `30` |
| `/` | divide and keep the decimal part | `10 / 4` | `2.5` |
| `//` | count complete groups | `10 // 4` | `2` |
| `%` | find what is left | `10 % 4` | `2` |
| `**` | power | `2 ** 3` | `8` |

### Addition `+`

Addition combines numbers.

```python
notebooks = 4
pencils = 6
total_items = notebooks + pencils

print(total_items)
```

Output:

```text
10
```

Python follows these steps:

```text
Read notebooks -> read pencils -> add -> store in total_items -> print
```

The `+` operator can also join strings:

```python
first_part = "Py"
second_part = "thon"
language = first_part + second_part

print(language)
```

Output:

```text
Python
```

Both operands must make sense together. Python cannot directly add text and a number:

```python
age = 10

# This is incorrect:
# print("Age: " + age)

# These are correct:
print("Age:", age)
print("Age: " + str(age))
```

### Subtraction `-`

Subtraction removes one amount from another.

```python
money = 100
spent = 35
remaining = money - spent

print(remaining)
```

Output:

```text
65
```

### Multiplication `*`

Multiplication is repeated addition.

```python
price = 20
quantity = 4
total_price = price * quantity

print(total_price)
```

Output:

```text
80
```

Multiplication can repeat a string:

```python
print("ha" * 3)
```

Output:

```text
hahaha
```

### Division `/`

Normal division answers: “If we share equally, how much does each person receive?”

```python
chocolates = 9
children = 2
each_child = chocolates / children

print(each_child)
```

Output:

```text
4.5
```

The `/` operator produces a `float`, even when the answer is a whole number:

> **Important fact:** `/` always returns a `float` for ordinary integer operands. `8 / 2` produces `4.0`, not the integer `4`.

```python
print(8 / 2)
```

Output:

```text
4.0
```

### Floor division `//`

Floor division counts **complete groups**.

Suppose 17 students travel in cars that hold 5 students each:

```python
students = 17
seats_per_car = 5
full_cars = students // seats_per_car

print(full_cars)
```

Output:

```text
3
```

Three cars can be filled completely. Two students are still left.

For positive numbers, `//` removes the decimal part. With negative numbers, it rounds down:

```python
print(7 // 2)    # 3
print(-7 // 2)   # -4
```

You can return to the negative-number rule after you are comfortable with positive numbers.

### Remainder `%`

The remainder operator finds what is left after complete groups are made.

```python
students = 17
seats_per_car = 5
students_left = students % seats_per_car

print(students_left)
```

Output:

```text
2
```

Floor division and remainder are partners:

```text
17 students
   |
   +-- 3 complete groups of 5  -> 17 // 5
   +-- 2 students left         -> 17 % 5
```

The remainder also helps us check whether a number is even:

```python
number = 18
remainder = number % 2
is_even = remainder == 0

print(is_even)
```

Output:

```text
True
```

### Power `**`

Power means multiplying a number by itself a given number of times.

```python
print(2 ** 3)
```

This means `2 * 2 * 2`, so the output is:

```text
8
```

A square has the same width and height:

```python
side = 4
area = side ** 2

print(area)
```

Output:

```text
16
```

## 2. Comparison operators

A comparison operator asks a question. Python answers with one of two boolean values:

- `True` means yes.
- `False` means no.

| Operator | Question | Example | Answer |
|---|---|---|---|
| `==` | Are they equal? | `5 == 5` | `True` |
| `!=` | Are they different? | `5 != 3` | `True` |
| `>` | Is the left value greater? | `5 > 3` | `True` |
| `<` | Is the left value smaller? | `5 < 3` | `False` |
| `>=` | Is it greater or equal? | `5 >= 5` | `True` |
| `<=` | Is it smaller or equal? | `4 <= 5` | `True` |

```python
score = 72

print(score >= 50)
print(score == 100)
```

Output:

```text
True
False
```

### Assignment `=` and comparison `==`

These symbols have different jobs:

- `=` stores a value using a name.
- `==` compares two values.

```python
name = "Ravi"
is_ravi = name == "Ravi"

print(is_ravi)
```

Output:

```text
True
```

### Comparing strings

Capital and small letters are different:

```python
print("python" == "python")
print("Python" == "python")
```

Output:

```text
True
False
```

You already learned string methods during type conversion examples. We can make both strings lowercase before comparing:

```python
first_answer = "YES"
second_answer = "yes"

print(first_answer.lower() == second_answer.lower())
```

Output:

```text
True
```

## 3. Logical operators

Logical operators join or reverse questions.

| Operator | Simple meaning |
|---|---|
| `and` | both answers must be `True` |
| `or` | at least one answer must be `True` |
| `not` | reverse the answer |

### `and`

Imagine a ride that requires a ticket **and** a minimum height.

```python
has_ticket = True
is_tall_enough = True
can_enter = has_ticket and is_tall_enough

print(can_enter)
```

Output:

```text
True
```

`and` is `True` only when both sides are `True`:

| Left | Right | Result |
|---|---|---|
| `True` | `True` | `True` |
| `True` | `False` | `False` |
| `False` | `True` | `False` |
| `False` | `False` | `False` |

### `or`

Imagine that a student may enter with a school card **or** a visitor pass.

```python
has_school_card = False
has_visitor_pass = True
can_enter = has_school_card or has_visitor_pass

print(can_enter)
```

Output:

```text
True
```

`or` is `True` when at least one side is `True`.

### `not`

`not` reverses a boolean value:

```python
is_raining = False
can_play_outside = not is_raining

print(can_play_outside)
```

Output:

```text
True
```

Choose positive names such as `is_available`. They are easier to understand than confusing names such as `is_not_unavailable`.

## 4. Assignment operators

You already know that `=` stores a value:

```python
score = 10
```

Sometimes we calculate a new value from the old value:

```python
score = score + 5
print(score)
```

Output:

```text
15
```

Python provides a shorter form:

```python
score = 10
score += 5

print(score)
```

This also prints `15`.

| Short form | Longer form |
|---|---|
| `value += 2` | `value = value + 2` |
| `value -= 2` | `value = value - 2` |
| `value *= 2` | `value = value * 2` |
| `value /= 2` | `value = value / 2` |
| `value //= 2` | `value = value // 2` |
| `value %= 2` | `value = value % 2` |
| `value **= 2` | `value = value ** 2` |

The complete right side is calculated first. The result is then stored back in the variable.

## 5. Membership operators

Membership means checking whether a value is inside another value.

- `in` asks: “Is it inside?”
- `not in` asks: “Is it absent?”

With a string:

```python
message = "I am learning Python"

print("Python" in message)
print("Java" not in message)
```

Output:

```text
True
True
```

Collections such as lists and sets will be taught in later lessons. After learning them, you will also use `in` to search those collections.

## 6. Identity operators

Identity asks whether two names point to the exact same object.

- `is` means “the same object”.
- `is not` means “different objects”.

At this level, use `is` mainly with `None`:

```python
result = None
no_result = result is None

print(no_result)
```

Output:

```text
True
```

Use `==` when comparing normal values:

```python
first_name = "Maya"
second_name = "Maya"

print(first_name == second_name)
```

<details>
<summary>Optional deeper explanation: why are <code>==</code> and <code>is</code> different?</summary>

A variable name refers to a Python object.

```text
first  ------> object A containing a value
second ------> object B containing the same value
```

`==` asks whether the values are equal. `is` asks whether both arrows point to the exact same object. Python may reuse some immutable objects as an optimisation, so never depend on `is` for ordinary number or string comparison.

</details>

## 7. Operator precedence

Precedence means the order in which operators are calculated.

Python follows familiar mathematics rules:

1. parentheses `()`;
2. power `**`;
3. multiplication and division: `*`, `/`, `//`, `%`;
4. addition and subtraction: `+`, `-`;
5. comparisons;
6. `not`;
7. `and`;
8. `or`.

```python
answer = 2 + 3 * 4
print(answer)
```

Python multiplies first, so the answer is `14`.

Parentheses change the order:

```python
answer = (2 + 3) * 4
print(answer)
```

The answer is now `20`.

When a long expression is difficult to read, use parentheses or split it into clearly named steps.

## 8. Bitwise operators — optional preview

Computers store integers using binary digits called **bits**. Bitwise operators work with those individual digits.

| Operator | Name |
|---|---|
| `&` | bitwise AND |
| `|` | bitwise OR |
| `^` | bitwise XOR |
| `~` | bitwise complement |
| `<<` | shift left |
| `>>` | shift right |

You do not need these operators for the remaining Basic lessons. Return to them when studying permissions, networking, graphics, or low-level data.

<details>
<summary>Show one bitwise example</summary>

The number `5` is `101` in binary. The number `3` is `011`.

```text
  101
& 011
-----
  001
```

Therefore, `5 & 3` is `1`.

```python
print(5 & 3)
```

</details>

## Real-life mini project: sharing snacks

This program uses only concepts learned in Chapters 01–04.

```python
snacks = 29
students = 6

snacks_for_each_student = snacks // students
snacks_left = snacks % students
shared_equally = snacks_left == 0

print("Snacks for each student:", snacks_for_each_student)
print("Snacks left:", snacks_left)
print("Shared with nothing left:", shared_equally)
```

Before running it, predict all three output lines.

<details>
<summary>Show the output</summary>

```text
Snacks for each student: 4
Snacks left: 5
Shared with nothing left: False
```

</details>

<details>
<summary>Optional deeper look: how do operators work with objects?</summary>

An operator is convenient syntax for an operation supported by an object's type. For example, `left + right` normally asks the left object to perform its special addition behavior, named `__add__`. These double-underscore names are often called **dunder methods**. You do not call them directly in Basic Python.

Logical `and` and `or` also use **short-circuit evaluation**: Python may skip the right side when the left side already decides the result. Intermediate Python explains why these operators can return an operand instead of a strict boolean.

</details>

## Bug Hunter

Each program contains a mistake. Read the clue, fix the code, and run it again.

### Bug 1 — assignment or comparison?

```python
score = 80
is_full_score = score = 100
print(is_full_score)
```

Clue: the second line should ask a question instead of storing a new value.

### Bug 2 — text and number

```python
age = 10
print("My age is " + age)
```

Clue: `+` cannot directly join a string and an integer. Use a comma in `print()` or convert the number with `str()`.

### Bug 3 — calculation order

```python
price = 100
delivery = 20
quantity = 3
total = price + delivery * quantity

print(total)
```

The shop wants `(price + delivery) * quantity`. Add parentheses to express that rule.

<details>
<summary>Show Bug Hunter fixes</summary>

```python
# Bug 1
is_full_score = score == 100

# Bug 2
print("My age is", age)

# Bug 3
total = (price + delivery) * quantity
```

</details>

## Practice

Create a file named `operators_practice.py`. Solve the problems in order. These exercises use only concepts from Chapters 01–04.

### Problem 1 — total price

A pen costs Rs. 15. Store the price and quantity `4`, then calculate and print the total.

### Problem 2 — money remaining

You have Rs. 500 and spend Rs. 175. Print the remaining amount.

### Problem 3 — complete teams

There are 31 students and 5 students in each team. Print the number of complete teams and the number of students left.

### Problem 4 — convert minutes

Convert `135` minutes into complete hours and remaining minutes using `//` and `%`.

### Problem 5 — square and cube

Store the number `4`. Print its square and cube using `**`.

### Problem 6 — comparison questions

Store a score of `72`. Print the answers to these questions:

- Is it at least 50?
- Is it exactly 100?
- Is it different from 0?

### Problem 7 — logical questions

Create `has_ticket = True` and `has_id = False`. Print the results of `has_ticket and has_id`, `has_ticket or has_id`, and `not has_id`.

### Problem 8 — update a score

Start with `score = 10`. Add 5 using `+=`, multiply it by 2 using `*=`, and print the final value.

### Problem 9 — text membership

Store the sentence `"Python is friendly"`. Print whether `"Python"` is in the sentence and whether `"Java"` is not in it.

### Problem 10 — predict before running

Predict these answers on paper, then run the code:

```python
print(10 + 2 * 3)
print((10 + 2) * 3)
print(17 // 5)
print(17 % 5)
print(2 ** 3 + 1)
```

<details>
<summary>Show hints</summary>

1. Multiply price and quantity.
2. Subtract the spent amount from the starting amount.
3. `//` finds complete teams and `%` finds students left.
4. One hour contains 60 minutes.
5. Square uses power `2`; cube uses power `3`.
6. Use `>=`, `==`, and `!=`.
7. Print each logical expression separately.
8. Follow the two update steps in order.
9. Use `in` and `not in`.
10. Power is calculated before addition; multiplication is calculated before addition.

</details>

<details>
<summary>Show solution ideas</summary>

```python
# Problem 1
price = 15
quantity = 4
print(price * quantity)

# Problem 2
money = 500
spent = 175
print(money - spent)

# Problem 3
students = 31
team_size = 5
print(students // team_size)
print(students % team_size)

# Problem 4
total_minutes = 135
print(total_minutes // 60)
print(total_minutes % 60)

# Problem 5
number = 4
print(number ** 2)
print(number ** 3)

# Problem 6
score = 72
print(score >= 50)
print(score == 100)
print(score != 0)

# Problem 7
has_ticket = True
has_id = False
print(has_ticket and has_id)
print(has_ticket or has_id)
print(not has_id)

# Problem 8
score = 10
score += 5
score *= 2
print(score)

# Problem 9
sentence = "Python is friendly"
print("Python" in sentence)
print("Java" not in sentence)
```

Problem 10 answers: `16`, `36`, `3`, `2`, and `9`.

</details>

## Homework

Create a classroom stationery calculator using only variables, operators, conversion, and `print()`.

Store:

- number of notebooks;
- price of one notebook;
- number of pens;
- price of one pen;
- money available.

Calculate and print:

1. notebook cost;
2. pen cost;
3. complete cost;
4. money remaining;
5. whether the available money is enough.

Test the program by changing the stored values at least three times.

## Checkpoint

Before moving forward, explain these answers in your own words:

1. What is an operator?
2. What is the difference between `/`, `//`, and `%`?
3. What is the difference between `=` and `==`?
4. When is `and` true?
5. When is `or` true?
6. Why does `2 + 3 * 4` equal `14`?
7. Why should normal values use `==` instead of `is`?

If any answer is unclear, return to its section and run the example after changing one value.

---

Previous: [Type Conversion](../03-type-conversion/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Input and Output](../05-input-and-output/lesson.md)
