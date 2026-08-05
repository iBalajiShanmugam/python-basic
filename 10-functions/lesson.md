# 10 - Functions

## What you will learn

How to create reusable, testable units of logic.

```python
def calculate_total(price, quantity, discount=0):
    subtotal = price * quantity
    return subtotal - subtotal * discount

print(calculate_total(100, 2, 0.10))
```

Parameters are inputs; `return` sends a result back. Prefer small functions with one clear responsibility. Local variables belong to the function; do not rely on hidden global state.

## Practice

[Solve the functions problem set](../problem-solving/10-functions/problems.md)

## Homework

Refactor one earlier project so that input, validation, calculation, and display are handled by separate functions.

## Checkpoint

Break a bill calculator into at least three functions: input collection, calculation, and display.
