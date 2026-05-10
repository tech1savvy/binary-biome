---
id: use-fetch-custom-hook
aliases: []
tags: []
backward:
  - "[useEffect](useEffect/useEffect.md)"
forward:
  - "[fetching-api-data](fetching-api-data/fetch.md)"
noteId: 1777823482396
---

How to create a reusable custom hook for fetching data in React, including loading and error states?

---

Create a `useFetch` custom hook that encapsulates the data fetching logic, managing `data`, `isLoading`, and `error` states. It takes a URL as an argument and uses `useEffect` to perform the fetch operation.

```js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]); // Dependency array includes url to refetch if url changes

  return { data, isLoading, error };
};

export default useFetch;
```

---

**Usage Example:**

```jsx
import React from "react";
import useFetch from "./use-fetch"; // Adjust path as needed

function BlogList() {
  const {
    data: posts, // allows use to use data as posts variable
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts"); // Fetch blog posts

  if (isLoading) {
    return <div>Loading blog posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>{" "}
            {/* Display title and a snippet of body */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
```

**Notes:**

- This hook provides a clean, reusable way to handle data fetching logic across multiple components.
- The `url` in the dependency array ensures that the data is re-fetched if the URL changes.
- Error handling includes checking `response.ok` for HTTP errors and a `try-catch` block for network or other errors.
