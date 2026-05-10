---
id: string-input
backward:
  - "[integer-input](integer-input.md)"
forward:
  - "[array-input](array-input.md)"
noteId: 1777823471847
---

How to take string input from the user in Java?

---

To take string input, use the `nextLine()` method of the `Scanner` class for a full line, or `next()` for a single word.

**Reading a full line:**
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = input.nextLine();
        input.close();
    }
}
```

**Reading a single word:**
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String word = input.next();
        input.close();
    }
}
```
