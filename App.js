/**
 * <div id="parent">
 *    <div id="chid1">
 *     <h1> I'm h1 tag</h1>
 *     <h2> I'm h2 tag</h2> 
 *   </div>
 *  <div id="chid2">
 *   <h1> I'm h1 tag</h1>
 *   <h2> I'm h2 tag</h2> 
 *  </div>
 *
 *
 *
 *
 *
 */
const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"chiid1"},[
React.createElement("h1",{},"I'm h1 tag"),
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