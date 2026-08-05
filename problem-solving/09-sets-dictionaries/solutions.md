# Solution notes

1. `unique_values = set(values)`.
2. `set(first) & set(second)`.
3. `set(first) - set(second)`.
4. `counts[ch] = counts.get(ch, 0) + 1`.
5. Repeat the same pattern with words.
6. `max(products.items(), key=lambda item: item[1])` is a concise option.
7. Use `{**left, **right}` when the right dictionary wins.
8. `phone_book[name] = number` and retrieve with `.get()`.
9. `groups.setdefault(name[0], []).append(name)`.
10. `total += prices[item] * quantity` for each cart entry.
