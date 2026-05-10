---
id: toggle-theme
aliases: []
tags: []
backward:
  - "[dark-theme-default](cards/bootstrap/dark-theme-default.md)"
noteId: 1777823457497
---

How do you create a theme toggler for Bootstrap's dark/light modes?

---

1. Add a button for toggling:

```html
<button class="btn btn-primary" id="theme-toggle">Toggle Theme</button>
```

2. Add the JavaScript:

```javascript
// Get the theme toggler button
const themeToggler = document.getElementById("theme-toggle");

// Add click handler
themeToggler.addEventListener("click", () => {
  // Get the current theme
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-bs-theme");

  // Toggle the theme
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", newTheme);

  // Optional: Save preference
  localStorage.setItem("theme", newTheme);
});

// Optional: Load saved preference
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }
});
```

---

Key points:

- Uses the `data-bs-theme` attribute to switch themes
- Can persist user preference using localStorage
- Works with all Bootstrap components automatically
- Can be enhanced with icons or custom styling
- Consider adding transitions for smooth theme changes
