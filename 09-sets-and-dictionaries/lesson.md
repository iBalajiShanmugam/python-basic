---
layout: default
title: Sets and Dictionaries
parent: Lessons
nav_order: 9
permalink: /lessons/sets-and-dictionaries/
course_lesson: true
course_index: "09"
previous_page: /lessons/lists-and-tuples/
previous_title: Lists and Tuples
next_page: /lessons/functions/
next_title: Functions
---

# 09 - Sets and Dictionaries

## A simple picture

A set is like a classroom attendance list where each name appears only once. A dictionary is like a row of labelled lockers: a unique key such as a student ID opens the value stored for that student.

```text
key "S001" -> {"name": "Meera", "marks": 86}
```

## Sets

A set stores unique values and is useful for membership tests and set operations. Sets do not provide index-based access.

```python
tags = {"python", "beginner", "python"}
print(tags)  # duplicate is stored once
```

An empty set is created with `set()`, not `{}`; `{}` creates an empty dictionary.

> **Important fact:** sets remove duplicates and do not support position indexes. Do not depend on a set's display order.

```python
tags.add("programming")
tags.discard("unknown")  # safe if missing
```

`add()` inserts one value. `discard()` removes a value when present and does nothing when it is absent. `remove()` also removes a value, but raises `KeyError` when the value is absent.

```python
subjects = {"Math", "Science"}
subjects.add("Python")
subjects.discard("History")

print("Python" in subjects)  # True
print(len(subjects))         # 3
```

## Set operations

Set operations compare groups:

```python
backend = {"python", "sql", "git"}
data = {"python", "pandas", "sql"}
print(backend & data)  # intersection
print(backend | data)  # union
print(backend - data)  # only in backend
```

Using the sets above:

- intersection `backend & data` keeps values in both sets: `python`, `sql`;
- union `backend | data` combines all unique values;
- difference `backend - data` keeps values found only in `backend`;
- symmetric difference `backend ^ data` keeps values found in exactly one set.

```text
intersection: values shared by A and B
union:        every unique value from A or B
difference:   values in A but not B
```

Use these operations to compare permissions, skills, categories, or attendance lists.

## Dictionaries

A dictionary maps a key to a value:

```python
student = {"name": "Meera", "marks": 86}
print(student["name"])
student["passed"] = True
student["marks"] = 91
```

Read one entry as `key: value`:

```text
"name": "Meera"
   key      value
```

A key should be stable and unique inside that dictionary. Strings, numbers, and suitable tuples are common keys. Lists cannot be dictionary keys because lists can change.

Keys must be unique. Assigning an existing key updates its value. Accessing a missing key with `[]` raises `KeyError`; `.get()` is safer when absence is expected:

```python
email = student.get("email", "Not provided")
```

> **Important fact:** `student["email"]` means “this key must exist.” `student.get("email")` means “this key may be missing.” Choose the form that matches the rule of your program.

## Dictionary methods

Dictionary views let us inspect keys, values, or complete key-value pairs:

```python
print(student.keys())
print(student.values())
for key, value in student.items():
    print(key, value)
```

Use `del student["passed"]` or `student.pop("passed")` to remove an entry.

| Operation | Meaning |
|---|---|
| `dictionary.keys()` | view the keys |
| `dictionary.values()` | view the values |
| `dictionary.items()` | view `(key, value)` pairs |
| `dictionary.get(key, default)` | safely read an optional key |
| `dictionary.update(other)` | add or replace several entries |
| `dictionary.pop(key)` | remove and return one value |

## Nested data

Nested data means one collection contains another collection:

```python
students = {
    "S001": {"name": "Meera", "marks": 86},
    "S002": {"name": "Ravi", "marks": 92},
}
print(students["S002"]["marks"])
```

Follow one key at a time:

```text
students
  -> "S002"
      -> student dictionary
          -> "marks"
              -> 92
```

Nested dictionaries model real records, but use functions to keep access logic readable.

## Comprehensions

A dictionary comprehension builds key-value pairs from a loop. Read the ordinary loop first:

```python
prices = {"pen": 10, "book": 50}
with_tax = {}

for name, price in prices.items():
    with_tax[name] = price * 1.18
```

The shorter comprehension is:

```python
prices = {"pen": 10, "book": 50}
with_tax = {name: price * 1.18 for name, price in prices.items()}
```

Use the longer loop when the rule needs several steps or explanations.

## Real-world example: inventory

```python
inventory = {"pen": 12, "book": 3}
item = "book"
quantity = 2

if inventory.get(item, 0) >= quantity:
    inventory[item] -= quantity
    print("Sale completed")
else:
    print("Not enough stock")
```

## Common mistakes

- Trying to index a set.
- Creating an empty set with `{}`.
- Assuming dictionary keys are duplicated.
- Accessing a possibly missing key with `[]` instead of `.get()`.
- Mutating a dictionary while iterating over it without a plan.

## Bug Hunter

### Bug 1 — empty set or dictionary?

```python
tags = {}
tags.add("python")
```

### Bug 2 — missing key

```python
student = {"name": "Maya"}
print(student["email"])
```

### Bug 3 — duplicate dictionary key

```python
scores = {"Maya": 80, "Maya": 95}
print(scores)
```

A dictionary keeps one value for each unique key. The later assignment replaces the earlier value.

<details>
<summary>Show Bug Hunter fixes</summary>

```python
# Bug 1
tags = set()
tags.add("python")

# Bug 2: use a default when absence is expected.
print(student.get("email", "Not provided"))

# Bug 3: use unique student IDs when names may repeat.
scores = {"S001": 80, "S002": 95}
```

</details>

<details>
<summary>Optional deeper look: why are lookups fast?</summary>

Sets and dictionaries use a structure called a **hash table**. Python calculates a hash from a key to find a likely storage position, then checks equality. Lookup is usually very fast—average constant time—but keys must have stable hash behavior. Immutable values such as strings, numbers, and suitable tuples can be keys; a mutable list cannot.

</details>

## Practice

Try these problems on this page. Before choosing a collection, decide whether you need order, uniqueness, or key-based lookup.

### Problems

1. Remove duplicate values from a list using a set.
2. Find common values in two lists.
3. Find values present in one set but not another.
4. Count character frequency using a dictionary.
5. Count word frequency in a sentence.
6. Find the product with the highest price.
7. Merge two dictionaries and handle duplicate keys.
8. Build a phone book with add and lookup operations.
9. Group names by their first letter.
10. Build a shopping cart dictionary and calculate its total.

<details>
<summary>Show hints</summary>

1. Convert the list to a set.
2. Use set intersection.
3. Use set difference.
4. Increase a dictionary count for each character.
5. Normalize and split the sentence first.
6. Iterate over dictionary items.
7. Decide which dictionary wins when a key appears twice.
8. Use names as keys and phone numbers as values.
9. Use the first character as the group key.
10. Look up each product price and multiply by its quantity.

</details>

<details>
<summary>Show solution ideas</summary>

1. `unique_values = set(values)`.
2. `set(first) & set(second)`.
3. `set(first) - set(second)`.
4. `counts[ch] = counts.get(ch, 0) + 1`.
5. Use the same pattern for words from `sentence.split()`.
6. Start with no highest product, loop over `.items()`, and remember the highest price seen so far.
7. Start with `merged = left.copy()`, then loop through `right.items()` and assign each key. This makes the right dictionary win.
8. Use `phone_book[name] = number` and `.get()` for lookup.
9. If the first letter is missing, create an empty list for it; then append the name.
10. Add `prices[item] * quantity` for every cart entry.

</details>

## Homework

Build a small inventory dictionary with product quantities. Support adding stock, selling stock, and reporting products that need restocking.

## Checkpoint

Create a dictionary for three products and their prices. Calculate the total price of a selected shopping list and explain why a dictionary is useful.

---

Previous: [Lists and Tuples](../08-lists-and-tuples/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Functions](../10-functions/lesson.md)
