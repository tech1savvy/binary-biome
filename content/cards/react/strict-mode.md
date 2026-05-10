---
id: strict-mode
aliases: []
tags: []
noteId: 1777823483146
---

What is React Strict Mode?

---

- A development tool that highlights potential problems in an application by activating additional checks and warnings.
- It wraps a part of the component tree in a `<StrictMode>` component.
- It does not render any visible UI or affect the production build.
- Enabling it can cause multiple log outputs in the browser's console for a single event due to the _double-invoking_ behavior, which is intentional to find "impure" logic. A pure function should produce the same result every time, so running it twice helps surface inconsistent behavior or side effects.

### Example

```jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

Key Purposes:

- **Detects unsafe lifecycles**: Warns about methods that are unsafe for async rendering.
- **Warns about legacy APIs**: Flags usage of outdated APIs like string refs and `findDOMNode`.
- **Detects unexpected side effects**: It double-invokes functions to find "impure" logic. - **Ensures proper cleanup**: For `useEffect`, it runs a `setup -> cleanup -> setup` cycle on mount. This verifies that your cleanup logic properly resets the state from the first effect, preventing memory leaks.

