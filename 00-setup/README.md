# Setup: Run Python on Your Computer

## Goal

By the end of this section you can install Python, open a terminal, run Python code, create a project folder, and use an isolated virtual environment.

## Which Python should I install?

Use a current stable Python 3 release from [python.org/downloads](https://www.python.org/downloads/). Do not install a pre-release for this course.

## macOS

1. Download the macOS installer from [Python Releases for macOS](https://www.python.org/downloads/macos/).
2. Run the installer and complete the prompts.
3. Open Terminal and verify:

```bash
python3 --version
```

4. Create a workspace:

```bash
mkdir python-learning
cd python-learning
python3 -m venv .venv
source .venv/bin/activate
python --version
```

## Linux

Python is already available on many distributions. Use your distribution's package manager and prefer Python 3. On Debian or Ubuntu:

```bash
sudo apt update
sudo apt install python3 python3-venv python3-pip
python3 --version
mkdir python-learning
cd python-learning
python3 -m venv .venv
source .venv/bin/activate
python --version
```

For Fedora, Arch, and other distributions, follow the distribution-specific instructions in the [official Unix guide](https://docs.python.org/3/using/unix.html).

## Windows

1. Install Python using the official [Windows installation guide](https://docs.python.org/3/using/windows.html) or the Python Install Manager from [python.org/downloads](https://www.python.org/downloads/).
2. Open PowerShell and verify:

```powershell
py --version
```

3. Create a workspace and virtual environment:

```powershell
mkdir python-learning
cd python-learning
py -m venv .venv
.venv\Scripts\Activate.ps1
python --version
```

If PowerShell blocks activation, use the Python interpreter directly with `.venv\Scripts\python.exe`, or ask an administrator to review the execution-policy setting. Do not randomly change system security settings.

## First program

Create a file named `hello.py`:

```python
print("Hello, Python!")
```

Run it from the activated environment:

```bash
python hello.py
```

## Setup checkpoint

- [ ] Python 3 is installed.
- [ ] The version command works.
- [ ] A virtual environment was created.
- [ ] The environment was activated.
- [ ] `hello.py` runs successfully.
- [ ] You know how to deactivate it with `deactivate`.

---

[Back to course home](../README.md) · [Start Chapter 1: Python Fundamentals](../01-python-fundamentals/lesson.md)
