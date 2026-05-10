---
id: react-pub-sub
noteId: 1777823482847
---

What is the Publish-Subscribe (Pub-Sub) design pattern in React?

---

Publish-subscribe (pub-sub) in React is a design pattern for **decoupling components**, where publishers emit events or messages on specific topics/channels, and independent subscribers react to those events without direct references.

---

### Core Pattern Workflow

A basic pub-sub system involves three main roles:

1.  **Event Bus (or Broker):** A central hub that manages topics/channels. It provides methods to:
    *   `subscribe(topic, callback)`: Allows components to register their interest in a specific topic.
    *   `unsubscribe(topic, callback)`: Allows components to stop listening to a topic.
    *   `publish(topic, data)`: Allows components to send messages (with optional data) to a specific topic.
2.  **Subscribers:** Components that register a callback function with the Event Bus for one or more topics. When a message is published on that topic, their callback is invoked.
3.  **Publishers:** Components that send messages to the Event Bus on a specific topic. They don't know which (if any) subscribers are listening.

This pattern relies on the Event Bus to mediate communication, ensuring publishers and subscribers don't need direct knowledge of each other.

### React Integration

In React, you can wrap an event bus in a custom hook with `useEffect` for subscription/unsubscription lifecycle management. Publishers call `publish` on state changes; subscribers update via callbacks, avoiding prop drilling.

**Use cases:** Global notifications or cross-component state synchronization.
**Considerations:** For deeply nested hierarchies, prefer Context API or Redux.
