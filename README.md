# Dev Stack
This project is all about adding technology stack into cart and then later delete the item. purpose of this project is understanding React Components,props,JSX,fetch data,usestate,use and etc.

## Technology that I use:
- React
- Tailwind
- React Toastify
- React Icon
- Daisy UI

## 3 features about your project
- i can add technology stack into my cart
- then delete the individual card on the selected stacks.
- the projects is fully responsive

# React questions
## What is JSX, and why is it used in React?
Ans: JSX is Like Html but not actual HTML. by use JSX we can write JS code into HTML elements..

## What is the difference between props and state?
Ans: Props is passing data from parent components to child components. 
State means temporary memory where we can store some information to render components by changing the data.

## What does the useState hook do, and where did you use it in this project?
Ans : useState hook actually do store the data and re-render the data according to the variable value. in my projects i use useState to impolement hamburger menu, add to cart button functionality..

## What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect hook is used if i have to do something after the components render then we can use useEffect hook. to load JSON data we use UseEffect because first we have to load the components,after render the components then load the JSON data.

## Why does every item in a .map() list need a unique key prop?
Ans : Because react use unique key to understand where the changes happen in the website. then simply compare to the previous DOM and update the DOM by using unique key.

## What is conditional rendering? Show one place you used it 
Ans : Conditional rendering means to show something based on condition. in my project i use conditional rendering in many parts such as selected stacks, hamburger menu.

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: To pass data from parent component to child i have used props. but in react child can not send data to parent. react works only one directional. parent to child. if child need to send data to parent then we simply use the concept lifting up state. 