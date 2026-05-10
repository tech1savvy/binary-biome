---
id: fragments
aliases: []
tags: []
noteId: 1777823482321
---

What are React Fragments and why are they useful?

---

React Fragments let you group multiple elements without adding extra nodes to the DOM. This is useful because React components must return a single element, and fragments allow grouping multiple sibling elements without introducing additional wrapper elements, which would affect the DOM structure and styling.

### Two ways to use fragments:

- Using shorthand syntax: `<></>`
- Using `<React.Fragment></React.Fragment>`

### Example using shorthand

- cannot use keys attribute with it

```jsx
function Post() {
  return (
    <>
      <h1>Post Title</h1>
      <p>This is the body of the post.</p>
    </>
  );
}
```

```html
<h1>Post Title</h1>
<p>This is the body of the post.</p>
```

- Without using fragment, will have to add a extra div node,
- And since its mandatory to pass the component as a single element we have to use div or fragments
- Which makes fragments, a better option.
- Kinda solution of the problem they created.

```jsx
function Post() {
  return (
    <div>
      <h1>Post Title</h1>
      <p>This is the body of the post.</p>
    </div>
  );
}
```

```html
<div>
  <h1>Post Title</h1>
  <p>This is the body of the post.</p>
</div>
```

### Example with React.Fragment

- can use keys attribute with it

```jsx
import { Fragment } from "react";

const posts = [
  { id: 1, title: "Hello", body: "First post" },
  { id: 2, title: "World", body: "Second post" },
];

function Blog() {
  return posts.map((post) => (
    <Fragment key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Fragment>
  ));
}
```

---

- Fragments are very useful in lists, tables (for grouping cells), and conditional rendering without adding unwanted wrapper elements, resulting in a cleaner and more performant DOM.
