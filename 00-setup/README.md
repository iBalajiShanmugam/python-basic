---
layout: default
title: Setup
nav_order: 4
has_children: true
permalink: /setup/
course_lesson: true
course_index: "00"
next_page: /lessons/fundamentals/
next_title: Python Fundamentals
---

# Setup: Run Your First Python Program

This page helps you install Python, create one file, and see your first successful output. Complete the quick start before learning about virtual environments.

## Before installing anything

If you use a school or office computer, ask a parent, teacher, or administrator before installing software. Do not remove a Python installation that already belongs to the operating system.

You need:

- a computer running Windows, macOS, or Linux;
- permission to install software;
- a text editor;
- a terminal, which is a window where you type commands.

Choose only the section for your operating system.

## Windows quick start

### Step 1 — install Python

Use the official [Python Install Manager instructions](https://docs.python.org/3/using/windows.html). It can be installed from Python.org or the Microsoft Store.

After installation, open **PowerShell** from the Start menu and type:

```powershell
python --version
```

If your installation uses the `py` command, this also works:

```powershell
py --version
```

You should see a Python 3 version. The exact numbers may be newer than examples in this course.

### Step 2 — create a learning folder

```powershell
mkdir python-learning
cd python-learning
```

- `mkdir` creates a folder.
- `cd` moves the terminal into that folder.

### Step 3 — create and run `hello.py`

Open the `python-learning` folder in your editor. Create a file named `hello.py` and type:

```python
print("Hello, Python!")
```

Save the file. Return to PowerShell and run:

```powershell
python hello.py
```

If `python` does not work but `py` does, run:

```powershell
py hello.py
```

Expected output:

```text
Hello, Python!
```

## macOS quick start

### Step 1 — install Python

Download the current supported Python 3 installer from [Python Releases for macOS](https://www.python.org/downloads/macos/). Use the normal `.pkg` installer and complete its instructions.

Open **Terminal** and type:

```bash
python3 --version
```

You should see a Python 3 version. Do not delete or modify Python supplied by macOS or Apple development tools.

### Step 2 — create a learning folder

```bash
mkdir python-learning
cd python-learning
```

### Step 3 — create and run `hello.py`

Open the `python-learning` folder in your editor. Create `hello.py`:

```python
print("Hello, Python!")
```

Save it and run:

```bash
python3 hello.py
```

Expected output:

```text
Hello, Python!
```

## Linux quick start

Python 3 is already available on many Linux distributions. First try:

```bash
python3 --version
```

If Python is unavailable on Debian or Ubuntu, use:

```bash
sudo apt update
sudo apt install python3 python3-venv python3-pip
```

For Fedora, Arch, or another distribution, use its package manager and the [official Python Unix guide](https://docs.python.org/3/using/unix.html).

Create the learning folder:

```bash
mkdir python-learning
cd python-learning
```

Create `hello.py` in your editor:

```python
print("Hello, Python!")
```

Save it and run:

```bash
python3 hello.py
```

## What just happened?

```text
hello.py -> Python reads the file -> print() displays text -> terminal shows output
```

- `hello.py` is a Python source file.
- `.py` is the usual filename ending for Python code.
- `python`, `py`, or `python3` starts the Python interpreter.
- An **interpreter** is the program that reads and runs Python instructions.

If you saw `Hello, Python!`, pause and enjoy that small win. Your computer has successfully run your code.

## Recommended next step: a virtual environment

A virtual environment is a private project box for Python tools and installed packages. One project's packages will not interfere with another project's packages.

```text
computer Python
├── project A .venv -> project A packages
└── project B .venv -> project B packages
```

The Basic examples use the standard library and can run without extra packages. Creating `.venv` now is still a useful habit.

### macOS and Linux

From inside `python-learning`:

```bash
python3 -m venv .venv
source .venv/bin/activate
python --version
```

### Windows PowerShell

From inside `python-learning`:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python --version
```

If you normally use `py`, create it with:

```powershell
py -m venv .venv
```

When activation succeeds, the terminal prompt normally begins with `(.venv)`. Activation makes the plain `python` command select the environment's interpreter.

To leave the environment later:

```text
deactivate
```

If PowerShell blocks activation, do not randomly weaken computer security. You may run the environment directly:

```powershell
.venv\Scripts\python.exe hello.py
```

## Choose an editor

Read [Editor Setup](editor-setup.md). Any editor that saves plain `.py` files is acceptable. IDLE, which is included with many Python installations, is enough for this course.

## Learn six terminal commands

Read [Terminal Basics](terminal-basics.md). You only need a few commands to move between folders and run files.

## Setup checkpoint

- [ ] A Python 3 version command works.
- [ ] The `python-learning` folder exists.
- [ ] `hello.py` contains the one-line program.
- [ ] Running the file displays `Hello, Python!`.
- [ ] I know which command works on my computer: `python`, `py`, or `python3`.
- [ ] I either created `.venv` or understand that I can return to that optional step.

If a checkpoint fails, open [Setup Troubleshooting](troubleshooting.md).
