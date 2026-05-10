---
id: react-router-modes
backward:
  - "[React Router](../react-router.md)"
noteId: 1777823481196
---

What are the three primary modes for using React Router?

---

React Router offers three modes, with features that build on each other:

- **Declarative Mode:** The simplest mode. You use familiar components like `<BrowserRouter>` and `<Route>` to control routing. It's ideal for basic client-side navigation.

- **Data Mode:** Adds powerful data loading and mutation features to your routes. Use this when you need to fetch data for a specific page before it renders.

- **Framework Mode:** The most comprehensive mode. It provides a full-featured solution, often including file-based routing, similar to frameworks like Next.js or Remix.

---

The modes are additive: `Declarative` ⊂ `Data` ⊂ `Framework`. You choose a mode based on how much control you want versus how much you want the router to do for you.
