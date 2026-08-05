# 13 - Modules and Packages

## What you will learn

How to split a program into reusable files and run a module directly.

`tax.py`:

```python
def calculate_tax(amount, rate):
    return amount * rate

if __name__ == "__main__":
    print(calculate_tax(1000, 0.18))
```

Another file can import it:

```python
from tax import calculate_tax

print(calculate_tax(500, 0.18))
```

Keep related functions together and avoid circular imports. A package is a folder containing related modules.

## Practice

[Solve the modules problem set](../problem-solving/13-modules/problems.md)

## Homework

Refactor a previous project into at least three modules and document what responsibility belongs in each file.

## Checkpoint

Split a small calculator into a module containing calculation functions and a separate main program containing input and display logic.
