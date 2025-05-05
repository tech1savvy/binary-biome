---
modified_time: 05-05-25, 15:41
---

> Dockerizing a Simple Java App

## Dockerfile

```dockerfile
FROM openjdk:11
WORKDIR /usr/src/myapp
COPY Hello.java .
RUN javac Hello.java
CMD ["java", "Hello"]
```

## Hello.java

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("This is java app \n by using Docker");
    }
}
```

## Steps to Build and Run

1. Create `Hello.java` with:
```java
class Hello {
    public static void main(String[] args) {
        System.out.println("This is java app \n by using Docker");
    }
}
```

2. Build:
```bash
docker build -t java-app .
```

3. Run:
```bash
docker run java-app
```


## Output

```
This is java app 
 by using Docker
```

**Key Notes:**

- The `\n` in the Java code creates a **newline**, resulting in two lines of output. To get a single line, remove `\n` from the string.
- The `openjdk:11` base image includes both `javac` (for compilation) and `java` (for execution).
- `WORKDIR` sets the context for subsequent commands, ensuring files are copied/compiled in `/usr/src/myapp`.
