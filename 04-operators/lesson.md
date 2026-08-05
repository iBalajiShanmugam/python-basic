# 04 - Operators in Python

An operator is a symbol or keyword that tells Python to perform an operation. The values that an operator works with are called operands.

```python
total = 10 + 5
```

Here `+` is the operator and `10` and `5` are operands.

## 1. Arithmetic operators

Arithmetic operators work with numbers.

| Operator | Name | Example | Result |
|---|---|---:|---:|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | True division | `10 / 3` | `3.333...` |
| `//` | Floor division | `10 // 3` | `3` |
| `%` | Remainder/modulus | `10 % 3` | `1` |
| `**` | Power | `10 ** 3` | `1000` |

### Addition, subtraction, multiplication

```python
price = 250
quantity = 3
subtotal = price * quantity
delivery_fee = 40
total = subtotal + delivery_fee

print(subtotal)  # 750
print(total)     # 790
```

The same operators also work with strings in some situations:

```python
print("Py" + "thon")  # Python
print("ha" * 3)       # hahaha
```

You cannot add a string and a number directly:

```python
age = 25
# print("Age: " + age)  # TypeError
print(f"Age: {age}")
```

### True division `/`

`/` returns the mathematical quotient as a float, even when the numbers divide evenly.

```python
print(8 / 2)   # 4.0
print(7 / 2)   # 3.5
```

Use it when you need an exact average, price, or measurement.

### Floor division `//`

`//` removes the fractional part by rounding down. For positive numbers this looks like truncation; for negative numbers, it rounds toward negative infinity.

```python
print(7 // 2)    # 3
print(-7 // 2)   # -4
```

Use it when you need complete groups:

```python
students = 23
students_per_bus = 5
full_buses = students // students_per_bus
print(full_buses)  # 4
```

### Remainder `%`

`%` gives what is left after division.

```python
print(23 % 5)  # 3
```

Common uses include checking even numbers and splitting units:

```python
number = 18
print(number % 2 == 0)  # True: no remainder means even

total_minutes = 135
hours = total_minutes // 60
minutes = total_minutes % 60
print(hours, minutes)  # 2 15
```

### Power `**`

```python
side = 4
area = side ** 2
print(area)  # 16
```

## 2. Comparison operators

Comparison operators ask a question and always produce `True` or `False`.

| Operator | Meaning | Example |
|---|---|---|
| `==` | equal to | `age == 18` |
| `!=` | not equal to | `status != "blocked"` |
| `>` | greater than | `score > 50` |
| `<` | less than | `price < 100` |
| `>=` | greater than or equal to | `age >= 18` |
| `<=` | less than or equal to | `quantity <= 10` |

```python
score = 72
print(score >= 50)  # True
print(score == 100) # False
```

Comparison is often used in a condition:

```python
age = 20
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible")
```

### `==` versus `=`

- `=` assigns a value.
- `==` compares two values.

```python
name = "Ravi"          # assignment
print(name == "Ravi")  # comparison: True
```

### Comparing text

Strings are compared according to their character ordering and case matters:

```python
print("apple" == "apple")  # True
print("Apple" == "apple")  # False
```

Normalize input when the business rule should ignore case:

```python
answer = input("Continue? ").strip().lower()
if answer == "yes":
    print("Continuing")
```

## 3. Logical operators

Logical operators combine boolean expressions.

| Operator | Meaning | True when |
|---|---|---|
| `and` | both conditions | every condition is true |
| `or` | at least one condition | one or more conditions are true |
| `not` | reverses a result | the original result is false |

### `and`

```python
age = 25
has_id = True
can_enter = age >= 18 and has_id
print(can_enter)  # True
```

If either condition is false, the complete `and` result is false.

### `or`

```python
is_weekend = False
is_holiday = True
can_rest = is_weekend or is_holiday
print(can_rest)  # True
```

Use `or` when any one acceptable condition is enough.

### `not`

```python
is_locked = False
print(not is_locked)  # True
```

Avoid confusing double negatives. A name such as `is_available` is usually clearer than `is_not_unavailable`.

## 4. Assignment operators

The basic assignment operator stores a value:

```python
count = 10
```

Compound assignment updates an existing variable:

| Operator | Equivalent to |
|---|---|
| `+=` | `x = x + value` |
| `-=` | `x = x - value` |
| `*=` | `x = x * value` |
| `/=` | `x = x / value` |
| `//=` | `x = x // value` |
| `%=` | `x = x % value` |
| `**=` | `x = x ** value` |

```python
balance = 1000
balance -= 250
balance += 100
print(balance)  # 850
```

The right side is calculated first, then assigned back to the variable.

## 5. Membership operators

`in` and `not in` check whether a value occurs in a container.

```python
allowed_roles = {"admin", "owner"}
role = "admin"
print(role in allowed_roles)      # True
print("guest" not in allowed_roles)  # True
```

They also work with strings and lists:

```python
print("py" in "python")       # True
print(10 in [5, 10, 15])       # True
```

Membership asks “does this value occur?” It does not ask whether two objects are the same object.

## 6. Identity operators

`is` and `is not` check whether two names refer to the same object in memory. They are not general value-comparison operators.

Use identity most commonly with `None`:

```python
result = None
if result is None:
    print("No result was returned")
```

Use `==` for normal value comparison:

```python
first = [1, 2]
second = [1, 2]
print(first == second)  # True: same contents
print(first is second)  # False: different list objects
```

## 7. Operator precedence

When an expression contains several operators, Python follows an order. A simplified order is:

1. Parentheses
2. Power: `**`
3. Unary signs: `+x`, `-x`
4. Multiplication, division, floor division, remainder
5. Addition and subtraction
6. Comparisons
7. `not`
8. `and`
9. `or`

```python
answer = 2 + 3 * 4
print(answer)  # 14, not 20

answer = (2 + 3) * 4
print(answer)  # 20
```

Use parentheses when they make the business rule obvious, even when Python would calculate the same result without them.

## Real-world example: delivery eligibility

```python
order_value = 850
weight = 3.5
is_member = True
distance = 8

free_delivery = (
    is_member
    or (order_value >= 1000 and weight <= 5)
    or distance <= 2
)

print(f"Free delivery: {free_delivery}")
```

Read this as: a member qualifies, or a large enough light order qualifies, or a very nearby order qualifies.

## Common mistakes

- Writing `=` when you mean `==`.
- Using `is` to compare ordinary numbers or strings.
- Forgetting that `/` returns a float.
- Assuming `//` simply truncates negative values.
- Mixing strings and numbers without conversion or formatting.
- Writing a long condition without parentheses or meaningful intermediate variables.

## Guided practice

First predict the result, then run the code:

```python
print(10 + 2 * 3)
print((10 + 2) * 3)
print(25 // 4, 25 % 4)
print(5 > 2 and 3 == 4)
print("admin" in {"admin", "user"})
```

## Practice

Try these problems on this page. Write your code in a separate `.py` file. Do not open the hints until you have made an attempt.

### Problem 1 - Quotient and remainder

Ask the user for two whole numbers. Display the quotient and the remainder.

### Problem 2 - Simple interest

Read the principal, annual rate, and number of years. Calculate simple interest using `principal * rate * years / 100`.

### Problem 3 - Range check

Read a number and two limits. Print whether the number is inside the inclusive range.

### Problem 4 - System access

Allow access only when the user is logged in and has a valid access card. Use boolean values and `and`.

### Problem 5 - Final price

Read an item price, discount percentage, and tax percentage. Calculate the final price. Clearly decide whether tax is applied before or after the discount.

### Problem 6 - Predict the result

Without running the code first, predict the result of `2 + 3 * 4`, `(2 + 3) * 4`, `17 // 5`, and `17 % 5`. Then verify your answers.

### Problem 7 - Explain division operators

Write a small program that demonstrates `/`, `//`, and `%` using the same two numbers. Add a comment explaining each result.

### Problem 8 - Membership check

Ask for a role and print whether it belongs to the allowed roles `admin`, `owner`, or `teacher`.

### Problem 9 - Value comparison

Create two separate values with the same contents. Compare them using `==`, then explain why `is` should not be used for ordinary value comparison.

### Problem 10 - Delivery rule

Free delivery is available for members, orders of at least Rs. 1000 with weight of at most 5 kg, or orders within 2 km. Write and test the complete boolean expression.

<details>
<summary>Show hints</summary>

1. `divmod()` can return both values, or use `//` and `%`.
2. Keep the rate as a percentage and follow the given formula.
3. Use a chained comparison such as `low <= number <= high`.
4. Store each condition in a clearly named variable.
5. Write the business rule in plain English before writing the expression.
6. Multiplication happens before addition unless parentheses change the order.
7. Test with `17` and `5`.
8. Put the allowed roles in a set and use `in`.
9. `==` compares contents; `is` checks whether two names refer to the same object.
10. Use parentheses around each larger condition so the rule is easy to read.

</details>

<details>
<summary>Show solution ideas</summary>

1. `quotient, remainder = divmod(first, second)`.
2. `interest = principal * rate * years / 100`.
3. `inside = low <= number <= high`.
4. `can_access = is_logged_in and has_card`.
5. Calculate the discounted amount, then apply tax according to your documented rule.
6. The results are `14`, `20`, `3`, and `2`.
7. Print the three expressions side by side and describe the quotient, whole groups, and leftover amount.
8. `role in {"admin", "owner", "teacher"}`.
9. Use two separate lists or strings with equal contents and compare them with `==`.
10. `is_free = is_member or (order_value >= 1000 and weight <= 5) or distance <= 2`.

</details>

## Homework

Build a shipping-cost expression using order value, package weight, membership status, and distance. Write at least three test cases and explain each result in a comment.

## Checkpoint

1. Explain the difference between `/`, `//`, and `%`.
2. Explain the difference between `=` and `==`.
3. Explain when to use `is` instead of `==`.
4. Rewrite a long boolean condition using named intermediate variables.
5. Evaluate `2 + 4 * 3 ** 2` by hand and verify it in Python.

---

Previous: [Type Conversion](../03-type-conversion/lesson.md) · [Course map](../COURSE_MAP.md) · [Course home](../README.md) · Next: [Input and Output](../05-input-and-output/lesson.md)
