# 05 - Input and Output

## What you will learn

How to read user input and present useful output.

```python
name = input("Name: ").strip()
age = int(input("Age: "))
print(f"{name} will be {age + 1} next year.")
```

`print()` accepts multiple values and supports `sep` and `end`:

```python
print("2026", "08", "05", sep="-")
```

Validate assumptions before using input. Error handling arrives in a later lesson.

## Practice

[Solve the input and output problem set](../problem-solving/05-input-output/problems.md)

## Homework

Create a formatted travel booking confirmation that accepts a passenger name, destination, ticket count, and total price.

## Checkpoint

Build a program that reads a product name, quantity, and price and prints a formatted receipt line.
