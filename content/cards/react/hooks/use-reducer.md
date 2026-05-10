---
id: use-reducer
aliases: []
tags: []
noteId: 1777823482498
---

> [!NOTE]
> It's written to be "immutable," meaning it creates new copies of the state instead of changing the original, which is a core
> principle of reducers.

# useReducer Hook

The `useReducer` hook is an alternative to `useState` for managing complex state logic in React components. It is particularly useful when the next state depends on the previous one or when the state is an object or array.

## Definition

The `useReducer` hook has the following signature:

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- `reducer`: A function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state.
- `initialArg`: The initial state value.
- `init` (optional): An initializer function that returns the initial state.

`useReducer` returns an array with two elements:

- The current `state`.
- A `dispatch` function that you can call with an `action` to update the state.

## Reducer Function

The reducer function is where you define the state transitions. It takes the current state and an action object as arguments and returns the new state. In our todo list example, the reducer handles adding, changing, and deleting tasks.

```javascript
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
```

## Dispatching Actions

To update the state, you call the `dispatch` function with an action object. This object typically has a `type` property that describes the state update. In the todo list example, we dispatch actions to add, change, and delete tasks.

```javascript
function handleAddTask(text) {
  dispatch({
    type: "added",
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: "changed",
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: "deleted",
    id: taskId,
  });
}
```

## Initial State

You can provide the initial state directly to `useReducer`. In our todo list example, the initial state is an array of tasks.

```javascript
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
```

For more complex initialization, you can pass an `init` function.

### Example

`useReducer` is well-suited for managing arrays and objects. Here is an example of a todo list:

```javascript
import { useReducer } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
```

---

## Addressing "Why?" Immutability

You asked a very good question about why you can't just mutate the state directly. This is fundamental to React and useReducer:

- **Detecting Changes**: React (and useReducer) detects state changes by comparing the old state reference with the new state
  reference. If you mutate the original state object or array directly, the reference remains the same, and React won't realize
  anything has changed. This means your component won't re-render, and your UI won't update.
- **Time Travel Debugging**: Tools like Redux DevTools (and similar concepts for useReducer) rely on an immutable history of state
  changes to allow "time travel debugging" – stepping backward and forward through your application's state. Mutation breaks this.
- **Predictability and Purity**: Reducers are meant to be pure functions. Given the same state and action, they should always produce
  the same new state without causing side effects. Mutating state is a side effect. Immutability makes your application's behavior
  more predictable and easier to reason about.
- **Concurrency**: In future React versions, concurrent rendering features rely heavily on immutability. React might start rendering a
  component, get interrupted, and then resume. If state was mutated during an interrupted render, it could lead to inconsistent UI.
  Immutability ensures that you always have a stable version of the state to work with.

