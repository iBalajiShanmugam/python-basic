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

## Four common function types

We can group beginner functions by two questions:

1. Does the function receive input through parameters?
2. Does the function send a result back with `return`?

These are teaching categories, not four different Python keywords.

### Type 1: No parameters and no return value

```python
def show_welcome():
    print("Welcome to Python")

show_welcome()
```

This function always performs the same action. It does not receive data and does not send a result back.

### Type 2: Parameters and no return value

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Asha")
```

The function receives `name`, but its job is only to display a message.

### Type 3: No parameters and a return value

```python
def get_course_name():
    return "Python Basic"

course_name = get_course_name()
print(course_name)
```

The function needs no input, but it sends a value back to the caller.

### Type 4: Parameters and a return value

```python
def add(first, second):
    return first + second

total = add(10, 20)
print(total)
```

This is the most reusable type because it accepts data and produces a result.

## `return` versus `print`

`print()` displays a value. `return` sends a value to the caller:

```python
def add(a, b):
    return a + b

total = add(2, 3)
```

Use `return` when another part of the program needs to use the result. A function without `return` returns `None`.

## Parameters, arguments, and defaults

```python
def calculate_total(price, quantity, discount=0):
    subtotal = price * quantity
    return subtotal - subtotal * discount

print(calculate_total(100, 2))
print(calculate_total(100, 2, discount=0.10))
```

Positional arguments follow order. Keyword arguments name the parameter and make calls clearer. Required parameters should come before default parameters.

```python
def introduce(name, city="Unknown"):
    return f"{name} lives in {city}"

print(introduce("Ravi"))
print(introduce("Ravi", city="Pune"))
```

Here `name` is required and `city` has a default value. A default is used only when the caller does not provide that argument.

## Variable-length arguments: `*args`

Sometimes a function should accept any number of positional arguments. Put `*` before the parameter name:

```python
def add_all(*numbers):
    print(numbers)       # a tuple containing all received values
    return sum(numbers)

print(add_all(2, 4))
print(add_all(2, 4, 6, 8))
```

The name `args` is a convention, not a special word. `*numbers` collects extra positional arguments into a tuple. Use `*args` only when a variable number of values is genuinely useful; ordinary parameters are easier for beginners to read.

## Variable-length keyword arguments: `**kwargs`

Sometimes a function should accept extra named options. Put `**` before the parameter name:

```python
def show_profile(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

show_profile(name="Meera", city="Hyderabad", role="Student")
```

`**details` collects the named arguments into a dictionary. The name `kwargs` is also only a convention.

### `*args` and `**kwargs` together

```python
def report(title, *scores, **metadata):
    print(title)
    print(f"Average: {sum(scores) / len(scores):.2f}")
    print(metadata)

report("Math", 80, 90, 85, student="Ravi", term="First")
```

Learn the idea, but do not use these tools everywhere. Prefer clear named parameters when the number of inputs is known.

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
- Confusing `*args` with a normal list parameter.
- Forgetting that `**kwargs` collects named values in a dictionary.
- Using `*args` or `**kwargs` when simple named parameters would be clearer.

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
