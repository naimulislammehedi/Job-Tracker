# Job Application Tracker (Assignment 04)

## Overview

Job Application Tracker is a simple front-end web application built using HTML, Tailwind CSS, and Vanilla JavaScript. It allows users to manage job applications by updating status, filtering jobs, tracking statistics, and deleting entries dynamically.

---

## Features

* Dashboard with total, interview, and rejected job counts
* Filter jobs by status (All, Interview, Rejected)
* Update job status
* Delete job entries
* Dynamic UI rendering
* Lucide icons integration
* Tailwind CSS styling

---

## Technologies Used

* HTML5
* Tailwind CSS (CDN)
* Vanilla JavaScript
* Lucide Icons

---

## Project Structure

```
/project-root
│
├── index.html
├── /js
│   └── main.js
└── README.md
```

---

# JavaScript Interview Questions

## 1. Difference Between getElementById, getElementsByClassName, querySelector, querySelectorAll

| Method                 | Returns                | Live? | Selector Type |
| ---------------------- | ---------------------- | ----- | ------------- |
| getElementById         | Single Element         | No    | ID only       |
| getElementsByClassName | HTMLCollection         | Yes   | Class         |
| querySelector          | First Matching Element | No    | CSS Selector  |
| querySelectorAll       | NodeList               | No    | CSS Selector  |

---

## 2. Create and Insert a New Element into the DOM

```js
const div = document.createElement("div");
div.textContent = "Hello World";
div.classList.add("box");
document.body.appendChild(div);
```

---

## 3. What is Event Bubbling?

Event bubbling means when an event occurs on a child element, it propagates upward through its parent elements until it reaches the root (document).

---

## 4. What is Event Delegation?

Event delegation is a technique where a single event listener is added to a parent element to handle events for multiple child elements using event bubbling.

```js
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    console.log("Delete clicked");
  }
});
```

Why it is useful:

* Better performance
* Works for dynamically added elements
* Cleaner and scalable code

---

## 5. Difference Between preventDefault() and stopPropagation()

| Method            | Stops Default Behavior | Stops Bubbling |
| ----------------- | ---------------------- | -------------- |
| preventDefault()  | Yes                    | No             |
| stopPropagation() | No                     | Yes            |
