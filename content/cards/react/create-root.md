---
id: create-root
noteId: 1777823481946
---

How do you render a React component to the screen using the modern API?

---

Use the `createRoot` function from `react-dom/client`.

It's a two-step process:
1.  **Create a root:** Call `createRoot()` with the target DOM element (e.g., a `div` with `id="root"`).
2.  **Render the component:** Call the `.render()` method on the created root and pass your main component.

---

This is the standard way to start a React application since React 18.

```jsx
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the HTML element to attach the app to
const container = document.getElementById('root');

// Create a root for that element
const root = createRoot(container);

// Render the main <App /> component into the root
root.render(<App />);
```
