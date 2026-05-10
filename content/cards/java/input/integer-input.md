---
id: integer-input
forward:
  - "[string-input](string-input.md)"
noteId: 1777823471821
---

How to take integer input from the user in Java?

---

To take integer input, use the `nextInt()` method of the `Scanner` class.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = input.nextInt();
        input.close();
    }
}
```
