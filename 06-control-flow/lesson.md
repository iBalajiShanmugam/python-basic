# 06 - Control Flow

Control flow decides which statements run and how often they run.

## Conditions

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

Before nesting many levels, consider combining conditions with `and` or using a function.

## `for` loops

Use `for` to process each item in an iterable:

```python
for language in ["Python", "Java", "SQL"]:
    print(language)
```

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
def future_feature():
    pass
```

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

## Practice

Try these problems on this page. Before coding, write the decision or repetition in plain English.

### Problems

1. Check whether a number is positive, negative, or zero.
2. Find the larger of two numbers without `max()`.
3. Find the largest of three numbers.
4. Print numbers from 1 to 20.
5. Print all even numbers in a range.
6. Calculate the sum from 1 to `n`.
7. Check whether a year is a leap year.
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
7. Use the leap-year rule in the lesson's operator examples.
8. Put the menu inside a loop and provide an exit choice.
9. Multiply the chosen number by values from 1 to 10.
10. Test divisors from 2 up to the number, then improve later.

</details>

<details>
<summary>Show solution ideas</summary>

1. Use `if number > 0`, `elif number < 0`, otherwise zero.
2. `largest = a if a > b else b`.
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
