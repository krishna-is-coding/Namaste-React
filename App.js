import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"chiid1"},[
React.createElement("h1",{},"hello duniya wale "),
React.createElement("h2",{},"I'm h2 tag")
]),
React.createElement("div",{id:"chiid2"},[
  React.createElement("h1",{},"I'm h1 tag"),
  React.createElement("h2",{},"I'm h2 tag"),
]), 
]);
console.log(parent);
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);