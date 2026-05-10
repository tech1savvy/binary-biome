---
id: class-components
aliases: []
tags: []
noteId: 1777823481571
---

What are class components in React?

---

- ES6 classes that extend `React.Component`.
- They use the `this` keyword to access props and state.
- State is managed with `this.state` and updated with `this.setState()`.
- They use **lifecycle methods** (e.g., `componentDidMount`, `componentDidUpdate`) to handle side effects and manage logic at different points in a component's life.

---

- Class components are less common in modern React but are still used for legacy code and for features like **Error Boundaries**, which are not available in functional components.

### Example

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
