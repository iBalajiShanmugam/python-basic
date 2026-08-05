# 08 - Lists and Tuples

Lists and tuples group values in an order.

## Lists

```python
marks = [72, 88, 91]
print(marks[0])
print(marks[-1])
```

Lists can contain values of different types, but a collection is easier to use when its values have a consistent meaning.

## Changing a list

```python
marks[0] = 75
marks.append(79)       # add at the end
marks.insert(1, 80)    # add at an index
marks.remove(91)       # remove the first matching value
last = marks.pop()     # remove and return the last value
```

`remove()` searches for a value; `pop()` removes by index or removes the final item when no index is supplied.

## Slicing and copying

```python
values = [10, 20, 30, 40, 50]
print(values[1:4])
copy_of_values = values[:]
```

Assigning `other = values` does not copy the list; both names refer to the same list. Use `values.copy()` or `values[:]` for a shallow copy.

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
10. Build a marks analyzer returning total, average, highest, and lowest values.

<details>
<summary>Show hints</summary>

1. Start at zero and add each item.
2. Keep a current largest value.
3. Test `number % 2` inside a loop.
4. Use a result list and add an item only when it is not already present.
5. Slicing can move through a list backwards.
6. Combine the final item with the earlier slice.
7. Join the lists before sorting.
8. Remove duplicates before finding the second value.
9. Assign tuple values to three names.
10. Return the four results in a dictionary.

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
8. `sorted(set(values))[-2]` after checking that enough values exist.
9. `year, month, day = date_tuple`.
10. Use `sum()`, `len()`, and a loop or built-ins for comparisons.

</details>

## Homework

Build a weekly sales analyzer that accepts seven values and reports total sales, average sales, best day, and days below average.

## Checkpoint

Given a list of marks, calculate total, average, highest, and lowest values. Explain why a list is more suitable than a tuple if marks can be corrected.

---

Previous: [Strings](../07-strings/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Sets and Dictionaries](../09-sets-and-dictionaries/lesson.md)
