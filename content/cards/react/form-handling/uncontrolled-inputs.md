---
id: uncontrolled-inputs
forward:
  - "[controlled-inputs](controlled-inputs.md)"
noteId: 1777823482296
---

What are uncontrolled inputs in React?

---

- Form elements that manage their own state internally through the DOM.
- The DOM, not React state, is the source of truth for the input's value.
- React accesses the value via `refs` (e.g., `useRef`).
- No need for `onChange` handlers to update React state.

```jsx
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value); // Access value directly from DOM
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue="Initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

---

- **Key aspects**: Initial values set using `defaultValue` prop. Validation and value access often done on form submission.
- **Contrast with Controlled Inputs**:
    - Controlled: React state manages value; updated via `onChange`.
    - Uncontrolled: DOM manages value; accessed via `refs`.
- **Use Cases**: Less complex forms, when frequent React state updates are unnecessary, or integrating with non-React libraries.
- **Benefits**: Simpler for infrequent value access, potentially better performance for large forms.