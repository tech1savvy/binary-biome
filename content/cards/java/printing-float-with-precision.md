---
id: printing-float-with-precision
noteId: 1777823472370
---

How to print a float with a specific precision in Java?

---

To print a float with a specific precision, you can use `String.format()` or `System.out.printf()` with a format specifier.

For example, to print a float with 2 decimal places, use `%.2f`.

```java
public class Main {
    public static void main(String[] args) {
        double number = 3.14159265359;
        
        // Using System.out.printf
        System.out.printf("Formatted with printf: %.2f\n", number);
        
        // Using String.format
        String formattedString = String.format("Formatted with String.format: %.2f", number);
        System.out.println(formattedString);
    }
}
```

---

- `%.2f` means to format the float or double with 2 digits after the decimal point.
- `printf` prints the formatted string to the console.
- `String.format` returns a formatted string.
