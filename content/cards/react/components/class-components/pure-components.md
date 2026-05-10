---
id: pure-components
aliases: []
tags: []
noteId: 1777823481622
---

What is a **Pure React Component** and how does it optimize performance?

---

A **Pure React Component** is a _class component_ that implements a built-in performance optimization. It automatically performs a **shallow comparison** of its current and next _props and state_ to decide whether to re-render.

### Key characteristics:

- Avoids unnecessary re-renders by default.
- Implements `shouldComponentUpdate()` with a shallow prop and state comparison.
- Ideal for components with simple props/state or immutable data.

---

### Example:

```jsx
import React, { PureComponent } from "react";

class PureCounter extends PureComponent {
  state = { count: 0 };

  // Set state with the same value (won't trigger re-render due to PureComponent)
  setSameCount = () => {
    this.setState({ count: 0 });
  };

  // Set state with a new value (triggers re-render)
  setNewCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("PureCounter render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.setSameCount}>Set Same Count</button>
        <button onClick={this.setNewCount}>Increment Count</button>
      </div>
    );
  }
}

export default PureCounter;
```

This component only re-renders if the `count` prop changes.
