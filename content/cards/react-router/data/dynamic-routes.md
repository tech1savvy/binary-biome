---
id: dynamic-routes
aliases: []
tags: []
backward:
  - "[usage](usage.md)"
noteId: 1777823480972
---

How to define and use dynamic routes in React Router?

---

Define a route with a colon-prefixed segment (e.g., `:id`) in your router configuration:

```jsx
const router = createBrowserRouter([
  // ... other routes
  { path: "/posts/:id", element: <PostItem /> },
]);
```

In your component, use the `useParams` hook to access the dynamic segment's value:

```jsx
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const PostItem = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, [id]);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default PostItem;
```

---

- Dynamic routes allow you to match patterns in the URL and extract parameters from them.
- The colon-prefixed segment (e.g., `:id`) acts as a placeholder for a dynamic value.
- The `useParams` hook provides an object of key/value pairs of URL parameters.

