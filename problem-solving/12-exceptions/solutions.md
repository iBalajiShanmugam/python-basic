# Solution notes

1. `try: value = int(text)` followed by `except ValueError`.
2. Check the divisor or catch `ZeroDivisionError`.
3. Catch the missing path and display a recovery message.
4. `if age < 0: raise ValueError("age cannot be negative")`.
5. Loop until conversion succeeds.
6. Match bad numeric text to `ValueError`, zero division to `ZeroDivisionError`, and missing paths to `FileNotFoundError`.
7. Catch expected errors inside the loop so the loop continues.
8. `if choice not in allowed: ...`.
9. Use `else` for success-only behavior and `finally` for cleanup.
10. Use small validation functions and catch errors at the user-interface boundary.
