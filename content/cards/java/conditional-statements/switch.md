---
id: switch
backward:
  - "[else-if](else-if.md)"
noteId: 1777823471696
---

How to use the `switch` statement in Java?

---

- Switch case statements are a substitute for long `if-else if-else` statements that compare a variable to multiple values.
- After a match is found, it executes the corresponding code of that value case.

```java
int n = 1;
switch(n) {
   case 1:
       System.out.println("Monday");
       break;
   case 2:
       System.out.println("Tuesday");
       break;
   case 3:
       System.out.println("Wednesday");
       break;
   case 4:
       System.out.println("Thursday");
       break;
   case 5:
       System.out.println("Friday");
       break;
   case 6:
       System.out.println("Saturday");
       break;
   default:
       System.out.println("Sunday");
}
```

---

- The `break` keyword is used to exit the switch statement.
- The `default` case is executed if no other case matches.
