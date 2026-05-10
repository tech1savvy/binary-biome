---
id: taking-input
forward:
  - "[printing-output](printing-output.md)"
noteId: 1777823471871
---

How to take input from the user in Java?

---

To take input, use the `Scanner` class.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = input.nextLine();
        input.close();
    }
}
```

---

- The `Scanner` class is in the `java.util` package.
- `System.in` is the standard input stream.