# 🚀 DevStack

### 💻 A Simple Developer Technology & Project Showcase

DevStack is a **React-based web application** where users can explore different developer technologies, view projects, and manage their selected technology stack.

The project provides a **clean, modern, and responsive user interface** for developers to explore and showcase their skills and technologies.

---

## ✨ Features

### 🧑‍💻 Explore Technologies

Browse and explore different technologies used in modern web development.

### 🛠️ Manage Technology Stack

Add technologies to your personal stack and easily manage your selected technologies.

### 📱 Fully Responsive

The website works smoothly across **desktop, tablet, and mobile devices**.

---

## 🛠️ Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| ⚛️ React.js       | Building the user interface   |
| 🟦 TypeScript     | Type-safe JavaScript          |
| 🎨 Tailwind CSS   | Styling and responsive design |
| 🌼 DaisyUI        | UI components                 |
| ⚡ Vite            | Development and build tool    |
| 📄 JSON           | Storing technology data       |
| 💻 VS Code        | Code editor                   |
| 🔔 React Toastify | Showing notifications         |

---

# ⚛️ React Questions & Answers

## 1️⃣ What is JSX, and why is it used in React?

**JSX** stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes the UI code **easier to write, understand, and maintain**.

### Example

```jsx
const title = <h1>Welcome to DevStack</h1>;
```

---

## 2️⃣ What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

### Simply:

* 📤 **Props** → Passed from parent to child
* 🔄 **State** → Managed inside a component

---

## 3️⃣ What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to **create and update state** in a component.

In this project, I used `useState` to manage the **selected technologies in the user's stack**.

### Example

```jsx
const [stack, setStack] = useState([]);
```

When the stack changes, `setStack()` updates the state and React updates the UI.

---

## 4️⃣ What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform **side effects**, such as fetching data.

In this project, I used `useEffect` to **load the JSON data when the application starts**.

### Example

```jsx
useEffect(() => {
  fetch("/data.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);
```

The empty `[]` means the effect runs **once when the component first loads**.

---

## 5️⃣ Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand **which item has changed, been added, or removed**, making updates more efficient.

### Example

```jsx
{technologies.map(technology => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}
```

The `key` should be **unique for every item** in the list.

---

## 6️⃣ What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI elements based on a condition.

For example, when the technology stack is empty, we can show an empty-stack message.

### Example

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList stack={stack} />
)}
```

Here, React shows **"Your stack is empty"** when there are no technologies in the stack.

---

## 7️⃣ How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

### Parent → Child

```jsx
<Child technology={technology} />
```

The child receives the data through props:

```jsx
function Child({ technology }) {
  return <h2>{technology.name}</h2>;
}
```

### Child → Parent

To send data back, the parent passes a **function as a prop**.

#### Parent

```jsx
<Child onAdd={handleAdd} />
```

#### Child

```jsx
<button onClick={() => onAdd(technology)}>
  Add
</button>
```

The child calls the parent's function to send information back.

---

# 📌 React Concepts Used in DevStack

This project demonstrates several important React concepts:

* ⚛️ JSX
* 🧩 Components
* 📦 Props
* 🔄 State
* 🪝 `useState`
* 🔀 Conditional Rendering
* 📋 `.map()`
* 🔑 Unique `key`
* 🔗 Parent-Child Communication

---

# 🎯 Project Goal

The main goal of **DevStack** is to create a simple and user-friendly platform where developers can **explore technologies and build their own technology stack** while practicing important React concepts.

---

## 👨‍💻 Author

### DevStack

> 🚀 Built with React, TypeScript, Tailwind CSS & DaisyUI.

---

⭐ **If you like this project, consider giving it a star!**
