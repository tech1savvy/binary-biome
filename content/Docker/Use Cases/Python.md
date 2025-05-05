---
modified_time: 03-05-25, 13:15
---

>  Dockerize Python Scripts Using CentOS 7

## Dockerfile Solution

```dockerfile
FROM centos:7
RUN yum install -y python3
RUN mkdir /My-python
WORKDIR /My-python
COPY join.py rev.py ./
ENTRYPOINT ["python3"]
```

## Steps

1. Create `join.py` and `rev.py` in your host's home directory.

**`join.py`**
```python
string1 = input("Enter string 1: ")
string2 = input("Enter string 2: ")
print(string1 + string2)
```

**`rev.py`**
```python
str = input("Enter string: ")
print(str[::-1])
```

2. Build and tag:
```bash
docker build -t my-python:007 .
```

3. Push to Docker Hub:
```bash
docker tag my-python:007 /my-python:007
docker login
docker push /my-python:007
```

## Key Details

- **Python 3 Installation**: Uses CentOS 7's native package (`yum install -y python3`).
- **Directory Setup**: `WORKDIR` auto-creates `/My-python` and sets it as the working directory.
- **Entrypoint**: `ENTRYPOINT ["python3"]` sets `python3` as the default executable for the container.
	- **When you run** `docker run my-python:007 join.py`, it executes `python3 join.py` and runs your script.
	- **When you run** `docker run -it my-python:007` with no arguments, it starts the Python REPL (interactive shell `>>>`) because `python3` with no script specified launches the interactive prompt.

So, with just `ENTRYPOINT ["python3"]`, if no arguments are provided, the Python interactive prompt will be launched, but if you specify a script (e.g., `join.py`), it will run that script instead. This gives you flexibility to either run a script or use the Python shell interactively.

## Usage Examples

```bash
# Run join.py
docker run -it my-python:007 join.py

# Run rev.py
docker run -it my-python:007 rev.py
```
