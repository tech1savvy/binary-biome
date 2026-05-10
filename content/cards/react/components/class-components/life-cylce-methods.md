---
id: life-cycle-methods
aliases: []
tags: []
backward:
  - "[class-components](class-components.md)"
noteId: 1777823481596
---

What are the lifecycle phases and methods in a React class component?

---

React class components have a defined set of **lifecycle methods** that correspond to the different phases in a component's life:

### Mounting

> When an instance of a component is created, inserted into the DOM and, setting up its side-effects.

- `constructor(props)`: Initialize state and bind methods.
- `render()`: Produce JSX for the UI; required in all class components.
- `componentDidMount()`: Run side effects after component appears in the DOM (e.g., data fetch).

### Updating

> When a component is being re-rendered as a result of changes to either its props or state.

- `shouldComponentUpdate(nextProps, nextState)`: Control whether re-render happens; return `false` to optimize.
- `componentDidUpdate(prevProps, prevState, snapshot)`: Run side effects after updates, react to changes.

### Unmounting

> When a component is being removed from the DOM, like removing listeners or timers.

- `componentWillUnmount()`: Cleanup tasks before component is removed.

---

```jsx
import React from "react";

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    // Mounting: initializing state
    this.state = { count: 0 };
    console.log("constructor: state initialized");
  }

  // Mounting: rendering UI
  render() {
    console.log("render: UI is being generated");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }

  // Mounting: runs once after component is in the DOM
  componentDidMount() {
    console.log("componentDidMount: component inserted into the DOM");
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  // Updating: decide if re-render should happen
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: checking re-render condition");
    return true; // allow all updates
  }

  // Updating: runs after the component re-renders
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: component re-rendered");
  }

  // Unmounting: clean up things like timers/listeners
  componentWillUnmount() {
    console.log("componentWillUnmount: clean up before removal");
    clearInterval(this.timer);
  }
}

export default LifecycleExample;
```
