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
