---
id: useEffect-cleanup
aliases: []
tags: []
backward:
  - "[useEffect](useEffect.md)"
noteId: 1777823482597
---

How do you perform cleanup with `useEffect`?

---

Return a function from the `setup` function. React will execute this cleanup function automatically when component unmounts.

```jsx
useEffect(() => {
  // Return a cleanup function
  return () => {};
}, []);
```

---

## Example

```jsx
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetchController = new AbortController(); // create a AbortController object

    setTimeout(() => {
      fetch(url, { signal: abortFetchController.signal }) // associate the AbortController object with the fetch request
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data.");
          }
          return response.json();
        })
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);
    // cleanup
    return () => abortFetchController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
```

- If a component using this custom hook is unmounted before the fetch request completes,
- an error will occur because the fetch request will attempt to update the state of an unmounted component. To prevent this, the cleanup function runs when the component unmounts, aborting the fetch request.
