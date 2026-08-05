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
6. `max(products.items(), key=lambda item: item[1])` is one option.
7. `{**left, **right}` makes the right dictionary win.
8. Use `phone_book[name] = number` and `.get()` for lookup.
9. Use `groups.setdefault(first_letter, []).append(name)`.
10. Add `prices[item] * quantity` for every cart entry.

</details>

## Homework

Build a small inventory dictionary with product quantities. Support adding stock, selling stock, and reporting products that need restocking.

## Checkpoint

Create a dictionary for three products and their prices. Calculate the total price of a selected shopping list and explain why a dictionary is useful.

---

Previous: [Lists and Tuples](../08-lists-and-tuples/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Functions](../10-functions/lesson.md)
