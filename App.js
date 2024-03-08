// Hello World using React
const heading = React.createElement("p", { id: "heading" }, "Hello From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
