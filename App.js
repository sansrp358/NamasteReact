// Hello World using React
const heading = React.createElement("p", { id: "heading" }, "Hello From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

/*
Making Complex html
<div id="parent">
    <div id="child">
        <h1>h1</h1>
        <h2>h2</h2>
    </div>
</div>

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ])
);
root.render(parent);
