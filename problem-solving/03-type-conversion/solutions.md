# Solution notes

1. `age = int(text); print(age + 1)`.
2. `total = float(first) + float(second)`.
3. `hours, minutes = divmod(total_minutes, 60)`.
4. Check the format, then call `int()`.
5. `bool([])` is `False`; `bool(["x"])` is `True`.
6. `int("12")` works; `int("12.5")` raises `ValueError`; `bool("False")` is `True`.
7. `rounded = round(float(text))` or explicitly choose a truncation rule.
8. `fahrenheit = float(celsius) * 9 / 5 + 32`.
9. Examples: `int("ten")`, `int("3.5")`, `int("")`.
10. Convert quantity to `int`, money values to `float`, and reject negative values.
