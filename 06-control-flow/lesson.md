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

[Solve the control-flow problem set](../problem-solving/06-control-flow/problems.md)

## Homework

Build a menu-driven quiz with five questions, a score counter, and a final result. Include an option to exit before completing all questions.

## Checkpoint

Write a countdown from ten to five, explain why a `while` loop terminates, and find the largest of three values without using `max()`.

---

Previous: [Input and Output](../05-input-and-output/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Strings](../07-strings/lesson.md)
