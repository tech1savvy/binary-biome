---
id: props
aliases: []
tags: []
noteId: 1777823482972
---

Which mechanism in React allows passing data from a parent component to a child component?

---

Props (short for _properties_) are used to _pass data_ from a _parent_ component _to_ a _child_ component. They are read-only and help in creating _reusable components_.

---

```jsx
// BlogList.jsx (Child Component)
function BlogList(props) {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li className="blog" key={index}>
            {blog.title} by {blog.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogList;
```

```jsx
// App.jsx (Parent Component)
import { useState } from "react";
import "./App.css";
import BlogList from "./BlogList";

function App() {
  const [blogs, setBlogs] = useState([
    { title: "Understanding Async JavaScript", author: "Alice Johnson" },
    { title: "A Guide to Python Decorators", author: "Brian Smith" },
    { title: "Exploring CSS Grid Layout", author: "Carla Mendes" },
  ]);
  return (
    <>
      <BlogList blogs={blogs} title={"All Blogs"} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Alice Johnson")}
        title={"Alice Johnson"}
      />
    </>
  );
}

export default App;
```
