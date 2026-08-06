---
layout: default
title: Lists and Tuples
parent: Lessons
nav_order: 8
permalink: /lessons/lists-and-tuples/
course_lesson: true
course_index: "08"
previous_page: /lessons/strings/
previous_title: Strings
next_page: /lessons/sets-and-dictionaries/
next_title: Sets and Dictionaries
---

# 08 - Lists and Tuples

Lists and tuples group values in an order.

## A simple picture

A list is an editable row of school lockers. Each locker has an index and can hold a value. A tuple is a sealed row: you can read its values, but you cannot replace its slots.

```text
index:    0       1       2
list:   ["red", "blue", "green"]
```

## Lists

A list uses square brackets. Commas separate its items. The list keeps item order, and indexes begin at zero just like string indexes.

```python
marks = [72, 88, 91]
print(marks[0])
print(marks[-1])
```

Lists can contain values of different types, but a collection is easier to use when its values have a consistent meaning.

```text
marks = [72, 88, 91]
         |   |   |
index    0   1   2
```

## Changing a list

Lists are mutable, so these operations change the existing list:

```python
marks[0] = 75
marks.append(79)       # add at the end
marks.insert(1, 80)    # add at an index
marks.remove(91)       # remove the first matching value
last = marks.pop()     # remove and return the last value
```

`remove()` searches for a value; `pop()` removes by index or removes the final item when no index is supplied.

Run each change separately and inspect the list:

```python
colors = ["red", "blue"]

colors.append("green")
print(colors)  # ["red", "blue", "green"]

colors.insert(1, "yellow")
print(colors)  # ["red", "yellow", "blue", "green"]

removed_color = colors.pop()
print(removed_color)  # green
print(colors)         # ["red", "yellow", "blue"]
```

Important differences:

| Operation | Searches by | What happens when missing? | Returned value |
|---|---|---|---|
| `append(value)` | no search | adds at the end | `None` |
| `insert(index, value)` | position | inserts at the requested position | `None` |
| `remove(value)` | value | raises `ValueError` | `None` |
| `pop(index)` | position | raises `IndexError` | removed item |

## Slicing and copying

List slicing follows the same `start:stop:step` rule as string slicing. The stop index is not included.

```python
values = [10, 20, 30, 40, 50]
print(values[1:4])
copy_of_values = values[:]
```

Assigning `other = values` does not copy the list; both names refer to the same list. Use `values.copy()` or `values[:]` for a shallow copy.

> **Important fact:** `other = values` creates another name for the same list. A change through either name is visible through both names.

```python
first = [10, 20]
second = first
second.append(30)

print(first)  # [10, 20, 30]
```

A **shallow copy** creates a new outer list. If the list contains inner lists, those inner lists are still shared. This is an optional edge case for nested data:

```python
original = [[1, 2], [3, 4]]
copied = original.copy()
copied[0].append(99)

print(original)  # [[1, 2, 99], [3, 4]]
```

## Useful list operations

```python
numbers = [4, 1, 9, 2]
print(len(numbers))
print(sum(numbers))
print(min(numbers), max(numbers))
numbers.sort()
print(numbers)
```

`sort()` changes the list. `sorted(numbers)` returns a new sorted list.

## Tuples

Tuples use parentheses and are immutable:

```python
point = (10, 20)
x, y = point
print(x, y)
```

Use a tuple for a fixed record such as a coordinate, RGB color, or date. A one-item tuple needs a comma: `("Python",)`.

The comma creates a tuple; parentheses mainly make it easy to read:

```python
not_a_tuple = ("Python")
one_item_tuple = ("Python",)

print(type(not_a_tuple))      # <class 'str'>
print(type(one_item_tuple))   # <class 'tuple'>
```

## Packing and unpacking

```python
date = 2026, 8, 5       # packing
year, month, day = date # unpacking
```

The number of target names must match the number of values unless starred unpacking is used:

```python
first, *middle, last = [1, 2, 3, 4]
```

## List comprehensions

A comprehension creates a list from a clear rule:

```python
squares = [number ** 2 for number in range(1, 5)]
even_squares = [number ** 2 for number in range(1, 8) if number % 2 == 0]
```

Write the ordinary loop first if a comprehension feels difficult.

These two programs mean the same thing:

```python
# Ordinary loop
squares = []
for number in range(1, 5):
    squares.append(number ** 2)

# Comprehension
squares = [number ** 2 for number in range(1, 5)]
```

Read the comprehension as: “create `number ** 2` for each `number` in the range.” Use the ordinary loop whenever it communicates the steps more clearly.

## Real-world example

```python
marks = [72, 88, 91, 64]
total = sum(marks)
average = total / len(marks)
passed = [mark for mark in marks if mark >= 40]
print(f"Average: {average:.2f}")
print(f"Passed count: {len(passed)}")
```

## Common mistakes

- Using an index that does not exist.
- Confusing `remove(value)` and `pop(index)`.
- Accidentally sharing a list when a copy was intended.
- Trying to modify a tuple.
- Forgetting that `sort()` returns `None` because it changes the list in place.

## Bug Hunter

### Bug 1 — index outside the list

```python
colors = ["red", "blue", "green"]
print(colors[3])
```

### Bug 2 — two names, one list

```python
original = [1, 2]
copied = original
copied.append(3)
print(original)
```

The programmer expected `original` to remain `[1, 2]`.

### Bug 3 — `sort()` result

```python
scores = [70, 90, 80]
sorted_scores = scores.sort()
print(sorted_scores)
```

<details>
<summary>Show Bug Hunter fixes</summary>

```python
# Bug 1: the final valid index is 2.
print(colors[2])

# Bug 2: make a shallow copy of this simple list.
copied = original.copy()

# Bug 3: either sort then print the same list...
scores.sort()
print(scores)

# ...or request a new sorted list.
sorted_scores = sorted(scores)
```

</details>

<details>
<summary>Optional deeper look: how is a list stored?</summary>

A CPython list keeps an ordered array of references to objects. It normally reserves a little extra room so repeated `append()` operations do not need to rebuild the storage every time. A shallow copy creates a new outer list but still refers to the same nested objects.

</details>

## Practice

Try these problems on this page. Use a small list by hand before writing the program.

### Problems

1. Calculate the sum of a list of numbers.
2. Find the largest value without `max()`.
3. Count even and odd values.
4. Remove duplicates while preserving order.
5. Reverse a list without calling `reverse()`.
6. Rotate a list by one position.
7. Merge two lists and sort the result.
8. Find the second-largest distinct number.
9. Unpack a tuple representing a date.
10. Build a marks analyzer that displays total, average, highest, and lowest values.

<details>
<summary>Show hints</summary>

1. Start at zero and add each item.
2. Keep a current largest value.
3. Test `number % 2` inside a loop.
4. Use a result list and add an item only when it is not already present.
5. Slicing can move through a list backwards.
6. Combine the final item with the earlier slice.
7. Join the lists before sorting.
8. Build a new list containing each value only once, sort it, and select the second-last value.
9. Assign tuple values to three names.
10. Store and print the four results with clear labels.

</details>

<details>
<summary>Show solution ideas</summary>

1. `total = 0` and add every item.
2. Initialize from the first item and compare the rest.
3. Maintain `even_count` and `odd_count`.
4. `result = []`; append only when `item not in result`.
5. `values[::-1]`.
6. `values[-1:] + values[:-1]`.
7. `sorted(first + second)`.
8. Build `unique_values` with a loop, sort it, and use `unique_values[-2]` after checking its length.
9. `year, month, day = date_tuple`.
10. Use `sum()`, `len()`, `min()`, and `max()`, then print each result.

</details>

## Homework

Build a weekly sales analyzer that accepts seven values and reports total sales, average sales, best day, and days below average.

## Checkpoint

Given a list of marks, calculate total, average, highest, and lowest values. Explain why a list is more suitable than a tuple if marks can be corrected.

---

Previous: [Strings](../07-strings/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Sets and Dictionaries](../09-sets-and-dictionaries/lesson.md)
