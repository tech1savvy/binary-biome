---
id: functions-as-props
aliases: []
tags: []
noteId: 1777823482947
---

Which option to use to pass a function from a parent component to a child component in React?

---

- Define the function in the parent component.
- Pass the function as a prop to the child component.
- Call the function in the child component using the prop.

```jsx
function BlogList({ blogs, title, handleDelete }) {
  return (
    <>
      <h1>{title}</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="blog">
              {blog.title} by {blog.author}
            </div>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogList;
import { useState } from "react";
import "./App.css";
import BlogList from "./BlogList";

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Understanding Async JavaScript", author: "Alice Johnson" },
    { id: 2, title: "A Guide to Python Decorators", author: "Brian Smith" },
    { id: 3, title: "Exploring CSS Grid Layout", author: "Carla Mendes" },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <>
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Alice Johnson")}
        title={"Alice Johnson"}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
```

---

- This allows the child component to trigger actions or update state in the parent component.

