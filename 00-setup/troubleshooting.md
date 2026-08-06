---
layout: default
title: Troubleshooting
parent: Setup
nav_order: 3
permalink: /setup/troubleshooting/
---

# Setup Troubleshooting

## `python` is not recognized

Use the platform-specific command from the setup guide: `python3` on many macOS/Linux systems or `py` on Windows. Restart the terminal after installation.

## The wrong Python version runs

Check all available commands and use the one that points to the intended Python 3 installation. Do not remove system Python files.

## The virtual environment will not activate

Confirm that you are in the project folder and that `.venv` exists. You can still run the environment directly:

```bash
.venv/bin/python hello.py
```

On Windows:

```powershell
.venv\Scripts\python.exe hello.py
```

## A program does not run

Read the complete error message. Note the file name and line number, check indentation, and reproduce the error with the smallest possible program.

## Python says it cannot open the file

The terminal is probably in a different folder. Use `pwd` on macOS/Linux or `Get-Location` on PowerShell. Then list files with `ls` or `Get-ChildItem`. Use `cd` to enter the folder containing your `.py` file.

## The file is really named `hello.py.txt`

Some editors hide filename endings. Ask the editor or file manager to show extensions and save the file exactly as `hello.py`.

## I see `>>>`

You are inside Python's interactive prompt, not the normal terminal. Type `exit()` and press Enter. Then run the saved file with `python hello.py`, `py hello.py`, or `python3 hello.py`.

## PowerShell blocks `.venv` activation

Activation is convenient but not required. Run the environment's interpreter directly:

```powershell
.venv\Scripts\python.exe hello.py
```

Do not copy random security-setting commands from the internet. Ask a parent, teacher, or administrator when using a managed computer.

---

[Back to Setup](README.md) · [Terminal Basics](terminal-basics.md)
