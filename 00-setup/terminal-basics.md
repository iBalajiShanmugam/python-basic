---
layout: default
title: Terminal Basics
parent: Setup
nav_order: 2
permalink: /setup/terminal/
---

# Terminal Basics

| Purpose | macOS/Linux | Windows PowerShell |
|---|---|---|
| Show current folder | `pwd` | `Get-Location` |
| List files | `ls` | `Get-ChildItem` |
| Enter a folder | `cd folder` | `cd folder` |
| Move up | `cd ..` | `cd ..` |
| Create a folder | `mkdir folder` | `mkdir folder` |
| Clear screen | `clear` | `Clear-Host` |
| Run a Python file | `python3 hello.py` or `python hello.py` | `python hello.py` or `py hello.py` |

You do not need to memorize every command. Learn enough to move around your project and run Python files.

## Terminal prompt versus Python prompt

The terminal prompt waits for operating-system commands. The Python interactive prompt displays `>>>` and waits for Python code.

```text
terminal command:  python hello.py
Python prompt:     >>> print("Hello")
```

If you see `>>>` and want to return to the terminal, type `exit()` and press Enter.

## A safe practice routine

```text
1. Use pwd/Get-Location to check the current folder.
2. Use ls/Get-ChildItem to check that the .py file is there.
3. Run the file with your working Python command.
4. Read any error from its final line upward.
```

---

[Back to Setup](README.md) · [Editor Setup](editor-setup.md) · [Troubleshooting](troubleshooting.md)
