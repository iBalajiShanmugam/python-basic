# 09 - Sets and Dictionaries

## Sets

A set stores unique values and is useful for membership tests and set operations. Sets do not provide index-based access.

```python
tags = {"python", "beginner", "python"}
print(tags)  # duplicate is stored once
```

An empty set is created with `set()`, not `{}`; `{}` creates an empty dictionary.

```python
tags.add("programming")
tags.discard("unknown")  # safe if missing
```

## Set operations

```python
backend = {"python", "sql", "git"}
data = {"python", "pandas", "sql"}
print(backend & data)  # intersection
print(backend | data)  # union
print(backend - data)  # only in backend
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

Keys must be unique. Assigning an existing key updates its value. Accessing a missing key with `[]` raises `KeyError`; `.get()` is safer when absence is expected:

```python
email = student.get("email", "Not provided")
```

## Dictionary methods

```python
print(student.keys())
print(student.values())
for key, value in student.items():
    print(key, value)
```

Use `del student["passed"]` or `student.pop("passed")` to remove an entry.

## Nested data

```python
students = {
    "S001": {"name": "Meera", "marks": 86},
    "S002": {"name": "Ravi", "marks": 92},
}
print(students["S002"]["marks"])
```

Nested dictionaries model real records, but use functions to keep access logic readable.

## Comprehensions

```python
prices = {"pen": 10, "book": 50}
with_tax = {name: price * 1.18 for name, price in prices.items()}
```

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

## Practice

[Solve the sets and dictionaries problem set](../problem-solving/09-sets-dictionaries/problems.md)

## Homework

Build a small inventory dictionary with product quantities. Support adding stock, selling stock, and reporting products that need restocking.

## Checkpoint

Create a dictionary for three products and their prices. Calculate the total price of a selected shopping list and explain why a dictionary is useful.

---

Previous: [Lists and Tuples](../08-lists-and-tuples/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Functions](../10-functions/lesson.md)
