---
id: rendering-lists
aliases: []
tags: []
noteId: 1777823483097
---

How to dynamically render a list of items from an array in React?

---

The `map()` array method is used to iterate over an array and return a new array of React elements. Each item in the list should have a unique `key` prop.

---

```jsx
function BlogList() {
  const blogs = [
    { title: "Understanding Async JavaScript", author: "Alice Johnson" },
    { title: "A Guide to Python Decorators", author: "Brian Smith" },
    { title: "Exploring CSS Grid Layout", author: "Carla Mendes" },
  ];
  return (
    <>
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

