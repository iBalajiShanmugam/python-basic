# 12 - Exception Handling

## What you will learn

How to handle expected runtime failures and give useful feedback.

```python
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a whole number.")
else:
    print(f"Age recorded: {age}")
```

Catch specific exceptions. Do not hide every error with a bare `except`. Use `finally` for cleanup that must happen regardless of success or failure.

## Practice

[Solve the exception-handling problem set](../problem-solving/12-exceptions/problems.md)

## Homework

Make the expense tracker reject invalid amounts, negative values, missing descriptions, and unavailable files with helpful messages.

## Checkpoint

Make a calculator that continues running after invalid input and handles division by zero.
