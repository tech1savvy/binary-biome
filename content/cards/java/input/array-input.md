---
id: array-input
backward:
  - "[string-input](string-input.md)"
noteId: 1777823471797
---

How to take array input from the user in Java?

---

To take array input, you can loop and read each element individually.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];

        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            arr[i] = input.nextInt();
        }
        input.close();
    }
}
```
