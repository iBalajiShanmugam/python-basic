# 10 - Functions

Functions let you name and reuse a piece of logic.

## Defining and calling

```python
def greet(name):
    return f"Hello, {name}!"

message = greet("Asha")
print(message)
```

The `def` block creates the function. The call `greet("Asha")` runs it. `name` is a parameter; `"Asha"` is an argument.

## `return` versus `print`

`print()` displays a value. `return` sends a value to the caller:

```python
def add(a, b):
    return a + b

total = add(2, 3)
```

Use `return` when another part of the program needs to use the result. A function without `return` returns `None`.

## Parameters and defaults

```python
def calculate_total(price, quantity, discount=0):
    subtotal = price * quantity
    return subtotal - subtotal * discount

print(calculate_total(100, 2))
print(calculate_total(100, 2, discount=0.10))
```

Positional arguments follow order. Keyword arguments name the parameter and make calls clearer. Required parameters should come before default parameters.

## Scope

Variables created inside a function are local:

```python
def make_message():
    message = "Done"
    return message
```

Prefer passing data into functions and returning results instead of changing global variables. This makes functions easier to test.

## Docstrings

```python
def area_of_circle(radius):
    """Return the area of a circle for a given radius."""
    return 3.14159 * radius ** 2
```

## Flexible arguments

`*args` collects extra positional arguments as a tuple; `**kwargs` collects extra keyword arguments as a dictionary. Learn them after ordinary parameters are comfortable:

```python
def total(*numbers):
    return sum(numbers)
```

## Recursion introduction

A recursive function calls itself and must have a base case:

```python
def factorial(number):
    if number == 0:
        return 1
    return number * factorial(number - 1)
```

For many beginner problems, a loop is easier to read than recursion.

## Real-world design

```python
def collect_item():
    name = input("Item: ")
    price = float(input("Price: "))
    return name, price

def display_item(name, price):
    print(f"{name}: Rs. {price:.2f}")
```

Each function has one responsibility, so changing input or display does not require rewriting the calculation.

## Common mistakes

- Defining a function but never calling it.
- Printing instead of returning a value needed elsewhere.
- Using global variables unnecessarily.
- Returning too early inside a loop.
- Forgetting a recursion base case.

## Practice

Try these problems on this page. Write the function name, parameters, return value, and one function call before writing the function body.

### Problems

1. Write a function that returns the square of a number.
2. Write a function that checks whether a number is even.
3. Write a function that returns the largest of three values.
4. Write a function that calculates a bill with an optional discount.
5. Write a function that counts vowels in text.
6. Split a calculator into separate functions.
7. Write a function that returns all factors of a number.
8. Write a function that validates a password and returns a reason.
9. Write a recursive factorial function and test edge cases.
10. Design a reusable student-result module with at least four functions.

<details>
<summary>Show hints</summary>

1. Return the number multiplied by itself.
2. Return the remainder comparison.
3. Keep a current best value.
4. Give the discount a default of zero.
5. Loop through lowercase text.
6. Use one function for each arithmetic operation.
7. Test divisors from 1 through the number.
8. Return a boolean and a reason, or return a clear message.
9. Use a base case for zero.
10. Separate input, validation, calculations, and display.

</details>

<details>
<summary>Show solution ideas</summary>

1. `def square(number): return number * number`.
2. `return number % 2 == 0`.
3. Start with the first value and compare the other two.
4. Calculate the subtotal, then subtract `subtotal * discount`.
5. Count characters that occur in `"aeiou"`.
6. Define `add`, `subtract`, `multiply`, and `divide`.
7. Return values for which `number % factor == 0`.
8. Check each password rule in order and return after the first failure.
9. `return 1 if number == 0 else number * factorial(number - 1)`.
10. Use small functions with clear parameters and return values.

</details>

## Homework

Refactor one earlier project so that input, validation, calculation, and display are handled by separate functions.

## Checkpoint

Break a bill calculator into at least three functions and explain the inputs and outputs of each function.

---

Previous: [Sets and Dictionaries](../09-sets-and-dictionaries/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [File Handling](../11-file-handling/lesson.md)
