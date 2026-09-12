Project name : DevStack A Simple Developer Technology & Project Showcase

Description:
DevStack is a React-based web application where users can explore different developer technologies, view projects, and manage their selected technology stack. The project provides a clean and responsive user interface for developers to showcase their skills and technologies.

✨ Features
 Explore Technologies — Browse different technologies used in modern web development.
 Technology Stack — Add and manage technologies in your personal stack.
 Responsive Design — Works smoothly on desktop, tablet, and mobile devices.

🛠️ Technologies Used
 React.js
 TypeScript
 Tailwind CSS
 DaisyUI
 Vite
 JSON Data
 Vs Code
 Toatify

React Questions & Answers
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript.
React uses JSX because it makes creating UI components easier and more readable.
Example:
const title = <h1>Welcome to DevStack</h1>;

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data that belongs to a component and can change over time.
Simply:
Props → Passed from parent to child.
State → Managed inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState is a React Hook used to create and update component data.
In this project, I used useState to manage data such as the selected technologies/stack.
Example:
const [stack, setStack] = useState([]);
When the stack changes, setStack() updates the UI.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to perform side effects in a React component.
I used useEffect to load the JSON data when the application starts.
Example:
useEffect(() => {
  fetch("/data.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);
The empty [] means the effect runs when the component is first loaded.

5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.
It helps React understand which item has changed, been added, or removed.
Example:
{technologies.map(technology => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}
The key should be unique for each item.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition.
For example, if the stack is empty, we can show an empty-stack message:
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList stack={stack} />
)}
Here, React shows the empty message when there are no technologies in the stack.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props.
Example:
<Child technology={technology} />
The child receives it:
function Child({ technology }) {
  return <h2>{technology.name}</h2>;
}
To send something back, the parent passes a function as a prop.
Parent:
<Child onAdd={handleAdd} />
Child:
<button onClick={() => onAdd(technology)}>
  Add
</button>
So, the child calls the parent's function to send information back.
